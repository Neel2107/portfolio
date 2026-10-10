"use client";

import { ENTER_CHILD, ENTER_CONTAINER } from "@/utils/constants";
import { motion, useMotionValueEvent, useSpring } from "motion/react";
import Link from "next/link";
import { useRef, type CSSProperties, type PointerEvent } from "react";

import "./not-found.css";

const ECHO_COUNT = 12;
// Farthest first, so nearer outlines paint over the ones behind them.
const ECHOES = Array.from({ length: ECHO_COUNT }, (_, i) => ECHO_COUNT - i);

const clamp = (value: number) => Math.max(-1, Math.min(1, value));

/* Depth: a solid 404 trails a dozen fading outlines, like a
   wireframe extrusion. The trail sweeps round on its own and points
   toward the pointer once it moves. */
const Echo = () => {
  const echoRef = useRef<HTMLDivElement>(null);
  const x = useSpring(0, { stiffness: 80, damping: 16 });
  const y = useSpring(0, { stiffness: 80, damping: 16 });

  useMotionValueEvent(x, "change", (value) =>
    echoRef.current?.style.setProperty("--nf-dx", value.toFixed(3))
  );
  useMotionValueEvent(y, "change", (value) =>
    echoRef.current?.style.setProperty("--nf-dy", value.toFixed(3))
  );

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    const rect = echoRef.current?.getBoundingClientRect();
    if (!rect) return;
    const centreX = rect.left + rect.width / 2;
    const centreY = rect.top + rect.height / 2;
    x.set(clamp((event.clientX - centreX) / (window.innerWidth / 2)));
    y.set(clamp((event.clientY - centreY) / (window.innerHeight / 2)));
  };

  return (
    <motion.section
      className="flex flex-1 flex-col items-center justify-center gap-8 overflow-x-clip px-4 py-10 text-center"
      variants={ENTER_CONTAINER}
      initial="initial"
      animate="visible"
      onPointerMove={handlePointerMove}
    >
      <motion.div variants={ENTER_CHILD}>
        <div ref={echoRef} className="nf-echo" aria-hidden="true">
          {ECHOES.map((depth) => (
            <span
              key={depth}
              className="nf-echo-layer"
              style={{ "--i": depth } as CSSProperties}
            >
              404
            </span>
          ))}
          <span className="nf-echo-front">404</span>
        </div>
      </motion.div>

      <div className="flex flex-col items-center gap-3">
        <motion.h1
          className="text-xl sm:text-3xl font-bold"
          variants={ENTER_CHILD}
        >
          Only an echo left.
        </motion.h1>
        <motion.p
          className="max-w-md text-base sm:text-xl leading-relaxed text-text-muted"
          variants={ENTER_CHILD}
        >
          Error 404: something used to answer at this address. The link is
          broken or the page moved.
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

export default Echo;
