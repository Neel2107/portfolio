"use client";

import { ENTER_CHILD, ENTER_CONTAINER } from "@/utils/constants";
import { motion, useSpring } from "motion/react";
import Link from "next/link";
import { useId, useRef, type PointerEvent } from "react";

import "./not-found.css";

const VIEW_WIDTH = 800;
const VIEW_HEIGHT = 320;
const CENTER_X = VIEW_WIDTH / 2;
const CENTER_Y = VIEW_HEIGHT / 2;

const OUTER_RINGS = Array.from({ length: 56 }, (_, i) => 8 + i * 8);
const INNER_RINGS = Array.from({ length: 120 }, (_, i) => 5.5 + i * 5.5);

const clamp = (value: number, limit: number) =>
  Math.max(-limit, Math.min(limit, value));

/* An optical effect: one set of rings fills the page, and a
   second, tighter set shows only through the numerals. The pointer drags
   the second set off-centre, so the 404 shimmers out of the interference. */
const Moire = () => {
  const clipId = useId();
  const svgRef = useRef<SVGSVGElement>(null);
  const x = useSpring(0, { stiffness: 70, damping: 18 });
  const y = useSpring(0, { stiffness: 70, damping: 18 });

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    const rect = svgRef.current?.getBoundingClientRect();
    if (!rect) return;
    const viewX = ((event.clientX - rect.left) / rect.width) * VIEW_WIDTH;
    const viewY = ((event.clientY - rect.top) / rect.height) * VIEW_HEIGHT;
    x.set(clamp((viewX - CENTER_X) * 0.4, 150));
    y.set(clamp((viewY - CENTER_Y) * 0.4, 90));
  };

  return (
    <motion.section
      className="flex flex-1 flex-col items-center justify-center gap-8 px-4 py-10 text-center"
      variants={ENTER_CONTAINER}
      initial="initial"
      animate="visible"
      onPointerMove={handlePointerMove}
    >
      <motion.div className="w-full max-w-3xl" variants={ENTER_CHILD}>
        <svg
          ref={svgRef}
          className="nf-moire"
          viewBox={`0 0 ${VIEW_WIDTH} ${VIEW_HEIGHT}`}
          fill="none"
          stroke="currentColor"
          strokeWidth={1.6}
          aria-hidden="true"
        >
          <defs>
            <clipPath id={clipId}>
              <text
                x={CENTER_X}
                y={276}
                textAnchor="middle"
                fontSize={330}
                fontWeight={600}
                letterSpacing="-0.06em"
              >
                404
              </text>
            </clipPath>
          </defs>

          <g className="nf-moire-field" opacity={0.55}>
            {OUTER_RINGS.map((radius) => (
              <circle key={radius} cx={CENTER_X} cy={CENTER_Y} r={radius} />
            ))}
          </g>

          <g clipPath={`url(#${clipId})`}>
            <rect
              width={VIEW_WIDTH}
              height={VIEW_HEIGHT}
              fill="var(--background)"
              stroke="none"
            />
            <g className="nf-moire-orbit">
              <motion.g style={{ x, y }}>
                {INNER_RINGS.map((radius) => (
                  <circle key={radius} cx={CENTER_X} cy={CENTER_Y} r={radius} />
                ))}
              </motion.g>
            </g>
          </g>
        </svg>
      </motion.div>

      <div className="flex flex-col items-center gap-3">
        <motion.h1
          className="text-xl sm:text-3xl font-bold"
          variants={ENTER_CHILD}
        >
          You&apos;re seeing things.
        </motion.h1>
        <motion.p
          className="max-w-md text-base sm:text-xl leading-relaxed text-text-muted"
          variants={ENTER_CHILD}
        >
          Error 404: this page isn&apos;t one of them. The link is broken or
          the page moved.
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

export default Moire;
