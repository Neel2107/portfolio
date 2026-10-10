"use client";

import { ENTER_CHILD, ENTER_CONTAINER } from "@/utils/constants";
import { motion } from "motion/react";
import Link from "next/link";
import { useEffect, useRef } from "react";

import "./not-found.css";

// Sparse to dense: how much ink each character puts on the page.
const RAMP = " .·:-=+*#%@";
const FRAME_MS = 1000 / 20;
const LENS_RADIUS = 5;

/* Texture: the page is a sheet of typed characters. Dense
   ones pile up into the numerals while a slow tide moves through the
   rest, and the pointer is a lens that flips dense and sparse. */
const Ascii = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let cols = 0;
    let rows = 0;
    let cellW = 0;
    let cellH = 0;
    let filled: boolean[] = [];
    let color = "";
    let frame = 0;
    let last = 0;
    let cancelled = false;
    let ready = false;
    const pointer = { col: -99, row: -99 };

    const build = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.round(rect.width);
      height = Math.round(rect.height);
      if (!width || !height) return;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const fontSize = width < 480 ? 8 : 11;
      cellW = fontSize * 0.62;
      cellH = fontSize * 1.25;
      cols = Math.floor(width / cellW);
      rows = Math.floor(height / cellH);
      ctx.font = `500 ${fontSize}px ${getComputedStyle(canvas).fontFamily}`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      // Draw the numerals offscreen and note which cells they cover.
      const stencil = document.createElement("canvas");
      stencil.width = width;
      stencil.height = height;
      const stencilCtx = stencil.getContext("2d");
      if (!stencilCtx) return;
      const numeralSize = Math.min(width / 2, height * 1.05);
      stencilCtx.font = `600 ${numeralSize}px ${getComputedStyle(document.body).fontFamily}`;
      stencilCtx.textAlign = "center";
      stencilCtx.textBaseline = "middle";
      stencilCtx.fillText("404", width / 2, height / 2 + numeralSize * 0.04);
      const { data } = stencilCtx.getImageData(0, 0, width, height);
      filled = [];
      for (let row = 0; row < rows; row += 1) {
        for (let col = 0; col < cols; col += 1) {
          const x = Math.floor((col + 0.5) * cellW);
          const y = Math.floor((row + 0.5) * cellH);
          filled.push(data[(y * width + x) * 4 + 3] > 128);
        }
      }
    };

    const draw = (time: number) => {
      const t = time / 1000;
      const offsetX = (width - cols * cellW) / 2;
      const offsetY = (height - rows * cellH) / 2;
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = color;

      // Two passes, so the faint field and the solid numerals each set the
      // alpha once instead of per character.
      for (const solid of [false, true]) {
        ctx.globalAlpha = solid ? 1 : 0.35;
        for (let row = 0; row < rows; row += 1) {
          for (let col = 0; col < cols; col += 1) {
            const distance = Math.hypot(
              col - pointer.col,
              (row - pointer.row) * 2
            );
            const lens = distance < LENS_RADIUS;
            const dense = filled[row * cols + col] !== lens;
            if (dense !== solid) continue;

            const tide =
              Math.sin(col * 0.22 + t * 1.1) * Math.sin(row * 0.45 - t * 0.7);
            const level = dense
              ? 0.78 + 0.22 * Math.sin(col * 0.35 + row * 0.5 - t * 2.2)
              : 0.16 + 0.16 * tide;
            const char = RAMP[Math.round(level * (RAMP.length - 1))];
            if (char === " ") continue;
            ctx.fillText(
              char,
              offsetX + (col + 0.5) * cellW,
              offsetY + (row + 0.5) * cellH
            );
          }
        }
      }
    };

    const tick = (time: number) => {
      // Stepping at 20fps reads as typed, and spares the battery.
      if (time - last >= FRAME_MS) {
        last = time;
        draw(time);
      }
      frame = requestAnimationFrame(tick);
    };

    const readColor = () => {
      color = getComputedStyle(canvas).color;
      if (ready && reduceMotion) draw(0);
    };

    const rebuild = () => {
      build();
      if (reduceMotion) draw(0);
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.col = (event.clientX - rect.left - (width - cols * cellW) / 2) / cellW;
      pointer.row = (event.clientY - rect.top - (height - rows * cellH) / 2) / cellH;
    };
    const onPointerGone = () => {
      pointer.col = -99;
      pointer.row = -99;
    };

    // Wait for the fonts so neither the stencil nor the characters are
    // drawn in a fallback face.
    document.fonts.ready.then(() => {
      if (cancelled) return;
      ready = true;
      readColor();
      rebuild();
      if (!reduceMotion) frame = requestAnimationFrame(tick);
    });

    const resizeObserver = new ResizeObserver(() => {
      if (ready && Math.round(canvas.getBoundingClientRect().width) !== width) {
        rebuild();
      }
    });
    resizeObserver.observe(canvas);

    const themeObserver = new MutationObserver(readColor);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    if (!reduceMotion) {
      window.addEventListener("pointermove", onPointerMove);
      window.addEventListener("pointerup", onPointerGone);
      window.addEventListener("pointercancel", onPointerGone);
      document.documentElement.addEventListener("pointerleave", onPointerGone);
    }

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      themeObserver.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerGone);
      window.removeEventListener("pointercancel", onPointerGone);
      document.documentElement.removeEventListener("pointerleave", onPointerGone);
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
        <canvas ref={canvasRef} className="nf-ascii" aria-hidden="true" />
      </motion.div>

      <div className="flex flex-col items-center gap-3">
        <motion.h1
          className="text-xl sm:text-3xl font-bold"
          variants={ENTER_CHILD}
        >
          Nothing here but characters.
        </motion.h1>
        <motion.p
          className="max-w-md text-base sm:text-xl leading-relaxed text-text-muted"
          variants={ENTER_CHILD}
        >
          Error 404: the link is broken or the page moved. These few hundred
          symbols are all that turned up.
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

export default Ascii;
