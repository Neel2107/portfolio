"use client";

import { RefreshCw } from "lucide-react";
import { MotionConfig } from "motion/react";
import { useState } from "react";

import Ascii from "./Ascii";
import Moire from "./Moire";
import Plotter from "./Plotter";
import Vantage from "./Vantage";

// In the order the button steps through them. Every visit opens on the
// first.
const ARTWORKS = [
  { id: "plotter", name: "Plotter", Component: Plotter },
  { id: "moire", name: "Moiré", Component: Moire },
  { id: "ascii", name: "ASCII", Component: Ascii },
  { id: "vantage", name: "Vantage", Component: Vantage },
];

/**
 * The 404 page's artwork, with a button underneath that steps through the
 * other versions in turn.
 */
const NotFoundArt = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [announcement, setAnnouncement] = useState("");
  const active = ARTWORKS[activeIndex];

  const showNext = () => {
    const nextIndex = (activeIndex + 1) % ARTWORKS.length;
    setActiveIndex(nextIndex);
    setAnnouncement(`Now showing ${ARTWORKS[nextIndex].name}`);
  };

  return (
    // Entrances keep their fade but drop the movement for visitors who ask
    // for reduced motion.
    <MotionConfig reducedMotion="user">
      <active.Component key={active.id} />

      <div className="flex justify-center px-4 pb-8">
        <button type="button" className="nav-pill gap-2" onClick={showNext}>
          <RefreshCw className="size-3.5" aria-hidden="true" />
          Show a different 404
          <span className="tabular-nums" aria-hidden="true">
            {activeIndex + 1}/{ARTWORKS.length}
          </span>
        </button>
        {/* The artwork swaps above the button, out of a screen reader's
            sight, so say which one arrived. */}
        <span className="sr-only" aria-live="polite">
          {announcement}
        </span>
      </div>
    </MotionConfig>
  );
};

export default NotFoundArt;
