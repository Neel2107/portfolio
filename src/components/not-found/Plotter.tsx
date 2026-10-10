"use client";

import { ENTER_CHILD, ENTER_CONTAINER } from "@/utils/constants";
import { motion } from "motion/react";
import Link from "next/link";
import { useEffect, useRef } from "react";

import "./not-found.css";

const STEP = 2;
const MAX_STEPS = 120;

// Small seeded generator so a drawing can be replayed after a resize or
// theme change without turning into a different one.
const mulberry32 = (seed: number) => () => {
  seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

/* A generative drawing: thousands of short pen strokes follow
   a flow field and hatch the numerals in. Every visit plots a different
   one, and it stops moving once it is finished. */
const Plotter = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const redrawRef = useRef<() => void>(() => {});

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let seed = Math.floor(Math.random() * 2 ** 32);
    let width = 0;
    let frame = 0;
    let cancelled = false;
    let ready = false;

    const render = (animate: boolean) => {
      cancelAnimationFrame(frame);
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.round(rect.width);
      const height = Math.round(rect.height);
      if (!width || !height) return;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // The numerals are only ever a stencil: they decide where ink lands.
      const stencil = document.createElement("canvas");
      stencil.width = width;
      stencil.height = height;
      const stencilCtx = stencil.getContext("2d");
      if (!stencilCtx) return;
      const fontSize = Math.min(width / 2, height * 1.05);
      stencilCtx.font = `600 ${fontSize}px ${getComputedStyle(canvas).fontFamily}`;
      stencilCtx.textAlign = "center";
      stencilCtx.textBaseline = "middle";
      stencilCtx.fillText("404", width / 2, height / 2 + fontSize * 0.04);
      const { data } = stencilCtx.getImageData(0, 0, width, height);
      const inside = (x: number, y: number) =>
        x >= 0 &&
        x < width &&
        y >= 0 &&
        y < height &&
        data[(Math.floor(y) * width + Math.floor(x)) * 4 + 3] > 128;

      const random = mulberry32(seed);
      const frequency = 0.005 + random() * 0.005;
      const [a, b, c] = [random(), random(), random()].map(
        (value) => value * Math.PI * 2
      );
      const angleAt = (x: number, y: number) =>
        (Math.sin(x * frequency + a) +
          Math.sin(y * frequency * 1.3 + b) +
          Math.sin((x + y) * frequency * 0.6 + c)) *
        Math.PI *
        0.9;

      // Every spot of the stencil that could start a stroke.
      const spots: number[] = [];
      for (let y = 0; y < height; y += 2) {
        for (let x = 0; x < width; x += 2) {
          if (inside(x, y)) spots.push(x, y);
        }
      }

      // Short strokes hatch the numerals in evenly, a few at a time. Long
      // faint ones wander the whole page and show the field behind them.
      const strokes = Array.from({ length: Math.round(spots.length / 5) }, () => {
        const spot = Math.floor(random() * (spots.length / 2)) * 2;
        return {
          x: spots[spot] + random() * 2,
          y: spots[spot + 1] + random() * 2,
          wait: Math.floor(random() * (MAX_STEPS - 30)),
          life: 8 + Math.floor(random() * 22),
        };
      });
      const wanderers = Array.from(
        { length: Math.round((width * height) / 450) },
        () => ({ x: random() * width, y: random() * height })
      );

      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = getComputedStyle(canvas).color;
      ctx.lineWidth = 0.9;
      ctx.lineCap = "round";

      const advance = (path: Path2D, pen: { x: number; y: number }) => {
        const angle = angleAt(pen.x, pen.y);
        path.moveTo(pen.x, pen.y);
        pen.x += Math.cos(angle) * STEP;
        pen.y += Math.sin(angle) * STEP;
        path.lineTo(pen.x, pen.y);
      };

      let steps = 0;
      const step = () => {
        const ink = new Path2D();
        const ghost = new Path2D();
        for (const stroke of strokes) {
          if (stroke.wait-- > 0 || stroke.life <= 0) continue;
          advance(ink, stroke);
          // A stroke lifts off the page as soon as it leaves the numerals.
          stroke.life = inside(stroke.x, stroke.y) ? stroke.life - 1 : 0;
        }
        for (const wanderer of wanderers) advance(ghost, wanderer);
        ctx.globalAlpha = 0.75;
        ctx.stroke(ink);
        ctx.globalAlpha = 0.08;
        ctx.stroke(ghost);
        steps += 1;
        return steps < MAX_STEPS;
      };

      if (!animate) {
        while (step());
        return;
      }
      const tick = () => {
        if (step()) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    redrawRef.current = () => {
      if (!ready) return;
      seed = Math.floor(Math.random() * 2 ** 32);
      render(!reduceMotion);
    };

    // Wait for Inter so the stencil is not drawn in a fallback face.
    document.fonts.ready.then(() => {
      if (cancelled) return;
      ready = true;
      render(!reduceMotion);
    });

    const resizeObserver = new ResizeObserver(() => {
      if (ready && Math.round(canvas.getBoundingClientRect().width) !== width) {
        render(false);
      }
    });
    resizeObserver.observe(canvas);

    const themeObserver = new MutationObserver(() => {
      if (ready) render(false);
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      themeObserver.disconnect();
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
        <canvas ref={canvasRef} className="nf-plot" aria-hidden="true" />
      </motion.div>

      <div className="flex flex-col items-center gap-3">
        <motion.h1
          className="text-xl sm:text-3xl font-bold"
          variants={ENTER_CHILD}
        >
          We drew a blank.
        </motion.h1>
        <motion.p
          className="max-w-md text-base sm:text-xl leading-relaxed text-text-muted"
          variants={ENTER_CHILD}
        >
          Error 404: no page lives at this address, so here is a drawing
          instead. No two come out the same.
        </motion.p>
      </div>

      <motion.div
        className="flex flex-wrap justify-center gap-2"
        variants={ENTER_CHILD}
      >
        <Link href="/" className="btn-pill btn-pill--primary">
          Back home
        </Link>
        <button
          type="button"
          className="btn-pill btn-pill--secondary"
          onClick={() => redrawRef.current()}
        >
          Draw another
        </button>
      </motion.div>
    </motion.section>
  );
};

export default Plotter;
