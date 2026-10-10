"use client";

import { cn } from "@/lib/utils";
import { MotionConfig } from "motion/react";
import { useEffect, useId, useState } from "react";

import Ascii from "./Ascii";
import Echo from "./Echo";
import Moire from "./Moire";
import Plotter from "./Plotter";

const ARTWORKS = [
  { id: "moire", name: "Moiré", Component: Moire },
  { id: "plotter", name: "Plotter", Component: Plotter },
  { id: "echo", name: "Echo", Component: Echo },
  { id: "ascii", name: "ASCII", Component: Ascii },
];

const STORAGE_KEY = "not-found-art";

// Any artwork except the one shown last time, so two wrong turns in a row
// never land on the same page.
const pickArtwork = () => {
  let last: string | null = null;
  try {
    last = window.localStorage.getItem(STORAGE_KEY);
  } catch {
    // Storage can be blocked; a plain random pick is fine.
  }
  const pool = ARTWORKS.filter((artwork) => artwork.id !== last);
  return pool[Math.floor(Math.random() * pool.length)].id;
};

/**
 * The 404 page's artwork. Each visit gets one of four at random, and the
 * switcher underneath lets a visitor try the rest.
 */
const NotFoundArt = () => {
  const labelId = useId();
  // Chosen after mount: a pick made during render would differ between
  // the server and the browser.
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    setActiveId(pickArtwork());
  }, []);

  useEffect(() => {
    if (!activeId) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, activeId);
    } catch {
      // Nothing to remember it in.
    }
  }, [activeId]);

  const active = ARTWORKS.find((artwork) => artwork.id === activeId);

  return (
    // Entrances keep their fade but drop the movement for visitors who ask
    // for reduced motion.
    <MotionConfig reducedMotion="user">
      {active ? (
        <active.Component key={active.id} />
      ) : (
        <div className="flex-1" />
      )}

      <div className="flex flex-col items-center gap-3 px-4 pb-8">
        <p id={labelId} className="text-[13px] font-medium text-text-muted">
          This page has four faces. Try another:
        </p>
        <div
          role="group"
          aria-labelledby={labelId}
          className="site-nav flex flex-wrap justify-center gap-1 rounded-2xl p-2"
        >
          {ARTWORKS.map((artwork) => (
            <button
              key={artwork.id}
              type="button"
              aria-pressed={artwork.id === activeId}
              onClick={() => setActiveId(artwork.id)}
              className={cn(
                "nav-pill",
                artwork.id === activeId && "nav-pill--active"
              )}
            >
              {artwork.name}
            </button>
          ))}
        </div>
      </div>
    </MotionConfig>
  );
};

export default NotFoundArt;
