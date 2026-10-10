'use client';

import { useEffect } from 'react';

import { isSoundEnabled } from '@/hooks/use-sound-enabled';

const CLICKABLE = 'a[href], button, [role="button"]';

type Blip = { frequency: number; gain: number; duration: number };

const HOVER: Blip = { frequency: 1800, gain: 0.03, duration: 0.015 };
const CLICK: Blip = { frequency: 1200, gain: 0.08, duration: 0.04 };

const closestClickable = (target: EventTarget | null) =>
  target instanceof Element ? target.closest(CLICKABLE) : null;

/**
 * Tiny synthesized UI sounds: a tick when the pointer enters a link or
 * button and a slightly lower, longer one on click. Listeners are delegated
 * from the document so every clickable is covered without wiring each one.
 */
const UiSounds = () => {
  useEffect(() => {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext?: typeof AudioContext })
        .webkitAudioContext;
    if (!AudioContextClass) return;

    let ctx: AudioContext | null = null;

    // Browsers keep audio suspended until the first user gesture, so the
    // context is created there; hovers before it stay silent.
    const unlock = () => {
      ctx ??= new AudioContextClass();
      if (ctx.state === 'suspended') ctx.resume().catch(() => {});
    };

    const play = ({ frequency, gain, duration }: Blip) => {
      if (!ctx || ctx.state !== 'running' || !isSoundEnabled()) return;
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();
      osc.connect(gainNode);
      gainNode.connect(ctx.destination);
      osc.type = 'sine';
      osc.frequency.setValueAtTime(frequency, now);
      gainNode.gain.setValueAtTime(gain, now);
      gainNode.gain.exponentialRampToValueAtTime(0.00001, now + duration);
      osc.start(now);
      osc.stop(now + duration);
    };

    const onPointerOver = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return;
      const el = closestClickable(event.target);
      // Skip moves between children of the same clickable.
      if (!el || el === closestClickable(event.relatedTarget)) return;
      play(HOVER);
    };

    const onClick = (event: MouseEvent) => {
      // Walk the dispatch path rather than the target: a handler may have
      // already re-rendered the clicked icon out of the document.
      const hit = event
        .composedPath()
        .some((node) => node instanceof Element && node.matches(CLICKABLE));
      if (hit) play(CLICK);
    };

    document.addEventListener('pointerdown', unlock, true);
    document.addEventListener('keydown', unlock, true);
    document.addEventListener('pointerover', onPointerOver);
    document.addEventListener('click', onClick);

    return () => {
      document.removeEventListener('pointerdown', unlock, true);
      document.removeEventListener('keydown', unlock, true);
      document.removeEventListener('pointerover', onPointerOver);
      document.removeEventListener('click', onClick);
      ctx?.close().catch(() => {});
    };
  }, []);

  return null;
};

export default UiSounds;
