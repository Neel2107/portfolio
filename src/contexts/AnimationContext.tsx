'use client';

import Lenis from 'lenis';
import React, { createContext, ReactNode, useContext, useEffect, useRef } from 'react';

const LenisContext = createContext<Lenis | null>(null);

interface LenisProviderProps {
  children: ReactNode;
}

export const LenisProvider: React.FC<LenisProviderProps> = ({ children }) => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    // Simple RAF loop for Lenis
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Make Lenis globally available
    if (typeof window !== 'undefined') {
      window.lenis = lenis;
    }

    return () => {
      lenis.destroy();
      if (typeof window !== 'undefined') {
        window.lenis = null;
      }
    };
  }, []);

  return (
    <LenisContext.Provider value={lenisRef.current}>
      {children}
    </LenisContext.Provider>
  );
};

export const useLenis = (): Lenis | null => {
  return useContext(LenisContext);
};

// Extend Window interface for Lenis
declare global {
  interface Window {
    lenis: Lenis | null;
  }
}
