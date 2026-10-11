"use client";

import { ENTER_CHILD, ENTER_CONTAINER } from "@/utils/constants";
import { motion } from "motion/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import "./not-found.css";
import { numeralMask } from "./stencil";

const DEG = Math.PI / 180;
// How far the view can be turned either way.
const MAX_YAW = 32 * DEG;
const MAX_PITCH = 18 * DEG;
// Getting this close to the right angle counts as finding it; the view
// then holds until the visitor moves this far away again.
const FIND = 1.7 * DEG;
const LOSE = 4.5 * DEG;
const IDLE_MS = 3500;

const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(max, value));

/* An anamorphosis. The 404 is cut into several hundred short strokes and
   each one is hung at a different depth, placed so that from exactly one
   direction they all fall back into line. From anywhere else they are a
   loose cloud of dashes. The pointer turns the view, and the page changes
   its mind about being lost once the right angle is found. */
const Vantage = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [found, setFound] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    // A finger can only drag sideways here without scrolling the page, so
    // on touch screens the right angle is purely a matter of turning.
    const coarse = window.matchMedia("(pointer: coarse)").matches;

    const side = () => (Math.random() < 0.5 ? -1 : 1);
    const vantage = {
      yaw: side() * (9 + Math.random() * 13) * DEG,
      pitch: coarse ? 0 : side() * (4 + Math.random() * 7) * DEG,
    };

    let width = 0;
    let height = 0;
    let depth = 0;
    let focal = 0;
    // x1, x2, y and depth of every stroke, measured from the centre.
    let strokes = new Float32Array(0);
    let color = "";
    const view = { yaw: 0, pitch: 0 };
    const target = { yaw: 0, pitch: 0 };
    let locked = false;
    let lastInput = -Infinity;
    let drawn = { yaw: Number.NaN, pitch: Number.NaN };
    let started = 0;
    let frame = 0;
    let cancelled = false;
    let ready = false;

    const build = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.round(rect.width);
      height = Math.round(rect.height);
      if (!width || !height) return;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.lineCap = "butt";
      depth = width * 0.34;
      focal = width * 1.3;

      const mask = numeralMask(width, height, 0.8);
      if (!mask) return;
      const rowGap = width < 480 ? 4 : 5;
      const list: number[] = [];
      // Hatch the numerals with horizontal lines, then break every line
      // into pieces and send each piece to its own depth.
      for (let y = rowGap / 2; y < height; y += rowGap) {
        const row = Math.floor(y) * width;
        let x = 0;
        while (x < width) {
          if (mask[row + x] <= 128) {
            x += 1;
            continue;
          }
          let end = x;
          while (end < width && mask[row + end] > 128) end += 1;
          while (x < end) {
            const piece = Math.min(end, x + 9 + Math.random() * 28);
            list.push(
              x - width / 2,
              piece - width / 2,
              y - height / 2,
              (Math.random() * 2 - 1) * depth
            );
            x = piece + 2;
          }
          x = end;
        }
      }
      strokes = Float32Array.from(list);
      drawn = { yaw: Number.NaN, pitch: Number.NaN };
    };

    const draw = () => {
      const yaw = view.yaw - vantage.yaw;
      const pitch = view.pitch - vantage.pitch;
      const cosY = Math.cos(yaw);
      const sinY = Math.sin(yaw);
      const cosP = Math.cos(pitch);
      const sinP = Math.sin(pitch);
      // 1 dead on, falling to 0 a few degrees out: strokes lose their
      // depth shading as they come into line, so the found view is crisp.
      const aligned = 1 - clamp(Math.hypot(yaw, pitch) / (3 * DEG), 0, 1);
      const weight = width < 480 ? 1.5 : 2.1;
      const cx = width / 2;
      const cy = height / 2;

      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = color;
      for (let i = 0; i < strokes.length; i += 4) {
        const z = strokes[i + 3];
        // Further strokes are drawn larger in space, exactly enough that
        // perspective shrinks them back onto the numerals at the vantage.
        const spread = (focal + z) / focal;
        const y = strokes[i + 2] * spread;
        let sx1 = 0;
        let sy1 = 0;
        let sx2 = 0;
        let sy2 = 0;
        let scale = 1;
        let far = 0;
        for (let end = 0; end < 2; end += 1) {
          const x = strokes[i + end] * spread;
          const turnedX = x * cosY + z * sinY;
          const turnedZ = -x * sinY + z * cosY;
          const tiltedY = y * cosP - turnedZ * sinP;
          far = y * sinP + turnedZ * cosP;
          scale = focal / (focal + far);
          if (end === 0) {
            sx1 = cx + turnedX * scale;
            sy1 = cy + tiltedY * scale;
          } else {
            sx2 = cx + turnedX * scale;
            sy2 = cy + tiltedY * scale;
          }
        }
        const near = 1 - clamp((far + depth) / (2 * depth), 0, 1);
        ctx.globalAlpha = 0.25 + 0.75 * near + (0.75 - 0.75 * near) * aligned;
        ctx.lineWidth = weight * scale;
        ctx.beginPath();
        ctx.moveTo(sx1, sy1);
        ctx.lineTo(sx2, sy2);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
      drawn = { yaw: view.yaw, pitch: view.pitch };
    };

    const tick = (time: number) => {
      if (!reduceMotion && !locked && time - lastInput > IDLE_MS) {
        // Left alone, the view sways, passing through the right angle
        // every few seconds as a hint that there is one.
        const t = (time - started) / 1000;
        target.yaw = vantage.yaw + 15 * DEG * Math.cos(t * 0.45);
        target.pitch = vantage.pitch + 6 * DEG * Math.cos(t * 1.35);
      }
      const ease = reduceMotion ? 1 : 0.11;
      view.yaw += (target.yaw - view.yaw) * ease;
      view.pitch += (target.pitch - view.pitch) * ease;
      if (
        Math.abs(view.yaw - drawn.yaw) > 1e-5 ||
        Math.abs(view.pitch - drawn.pitch) > 1e-5 ||
        Number.isNaN(drawn.yaw)
      ) {
        draw();
      }
      frame = requestAnimationFrame(tick);
    };

    const turnTo = (yaw: number, pitch: number) => {
      const wanted = {
        yaw: clamp(yaw, -MAX_YAW, MAX_YAW),
        pitch: clamp(pitch, -MAX_PITCH, MAX_PITCH),
      };
      const off = Math.hypot(wanted.yaw - vantage.yaw, wanted.pitch - vantage.pitch);
      if (!locked && off < FIND) {
        locked = true;
        setFound(true);
      } else if (locked && off > LOSE) {
        locked = false;
        setFound(false);
      }
      target.yaw = locked ? vantage.yaw : wanted.yaw;
      target.pitch = locked ? vantage.pitch : wanted.pitch;
      lastInput = performance.now();
    };

    const onPointerMove = (event: PointerEvent) => {
      const yaw = (event.clientX / window.innerWidth - 0.5) * 2 * MAX_YAW;
      const pitch =
        event.pointerType === "touch" || coarse
          ? vantage.pitch
          : -(event.clientY / window.innerHeight - 0.5) * 2 * MAX_PITCH;
      turnTo(yaw, pitch);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      const nudge = 1.2 * DEG;
      // Keys carry on from where the view is, not from where a pointer
      // last asked it to go.
      const from = locked ? vantage : target;
      if (event.key === "ArrowLeft") turnTo(from.yaw - nudge, from.pitch);
      else if (event.key === "ArrowRight") turnTo(from.yaw + nudge, from.pitch);
      else if (event.key === "ArrowUp") turnTo(from.yaw, from.pitch + nudge);
      else if (event.key === "ArrowDown") turnTo(from.yaw, from.pitch - nudge);
      else return;
      event.preventDefault();
    };

    // Wait for Inter so the strokes are not cut from a fallback face.
    document.fonts.ready.then(() => {
      if (cancelled) return;
      ready = true;
      color = getComputedStyle(canvas).color;
      build();
      started = performance.now();
      // Begin well off the right angle, with the cloud fully apart.
      target.yaw = view.yaw = vantage.yaw + 15 * DEG;
      target.pitch = view.pitch = vantage.pitch + (coarse ? 0 : 6 * DEG);
      frame = requestAnimationFrame(tick);
    });

    const resizeObserver = new ResizeObserver(() => {
      if (ready && Math.round(canvas.getBoundingClientRect().width) !== width) {
        build();
      }
    });
    resizeObserver.observe(canvas);

    const themeObserver = new MutationObserver(() => {
      color = getComputedStyle(canvas).color;
      drawn = { yaw: Number.NaN, pitch: Number.NaN };
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    window.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("keydown", onKeyDown);

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      themeObserver.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <motion.section
      className="flex flex-1 flex-col items-center justify-center gap-8 px-4 py-10 text-center"
      variants={ENTER_CONTAINER}
      initial="initial"
      animate="visible"
    >
      <motion.div className="w-full max-w-3xl" variants={ENTER_CHILD}>
        <canvas
          ref={canvasRef}
          className="nf-vantage"
          tabIndex={0}
          role="application"
          aria-label="A cloud of floating strokes that lines up into 404 from one viewing angle. Use the arrow keys to turn the view."
        />
      </motion.div>

      <div className="flex flex-col items-center gap-3" aria-live="polite">
        <motion.h1
          className="text-xl sm:text-3xl font-bold"
          variants={ENTER_CHILD}
        >
          {found ? "There. That's all of it." : "It only exists from one angle."}
        </motion.h1>
        <motion.p
          className="max-w-md text-base sm:text-xl leading-relaxed text-text-muted"
          variants={ENTER_CHILD}
        >
          {found
            ? "Error 404, seen from the one place it makes sense. The page itself is still missing."
            : "Error 404: every piece of it is here, just not lined up. Move around until it comes together."}
        </motion.p>
      </div>

      <motion.div
        className="flex flex-wrap justify-center gap-2"
        variants={ENTER_CHILD}
      >
        <Link href="/" className="btn-pill btn-pill--primary">
          Back home
        </Link>
        <Link href="/#project" className="btn-pill btn-pill--secondary">
          See projects
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default Vantage;
