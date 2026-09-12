'use client';

import { cn } from '@/lib/utils';
import { Check, Copy, type LucideIcon } from 'lucide-react';
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';

interface CopyButtonProps {
  /** Text written to the clipboard. */
  text: string;
  /** Accessible name for the button. */
  ariaLabel: string;
  /** Visible label. Omit for the 36px icon-only button. */
  label?: string;
  /** Icon shown in the idle state. Defaults to the copy icon. */
  icon?: LucideIcon;
  tooltipText?: string;
  copiedText?: string;
  /** Opened in place if the clipboard write fails (e.g. a mailto:). */
  fallbackHref?: string;
  className?: string;
}

const DESKTOP_DWELL_MS = 1600;
const TOUCH_DWELL_MS = 2000;
// Wait for the pill to fade out before the label flips back, so the
// user never sees "Copied" revert to "Copy link" while it is visible.
const LABEL_RESET_DELAY_MS = 200;

/**
 * Split two labels into a shared stem plus two tails, so only the tail
 * animates. "Copy link" / "Copied" -> stem "Cop", tails "y link" / "ied".
 */
const splitLabels = (a: string, b: string) => {
  let i = 0;
  while (i < a.length && i < b.length && a[i] === b[i]) i += 1;
  return { stem: a.slice(0, i), tailA: a.slice(i), tailB: b.slice(i) };
};

const CopyButton = ({
  text,
  ariaLabel,
  label,
  icon: Icon = Copy,
  tooltipText = 'Copy link',
  copiedText = 'Copied',
  fallbackHref,
  className,
}: CopyButtonProps) => {
  const [copied, setCopied] = useState(false);
  const [labelCopied, setLabelCopied] = useState(false);

  const swapRef = useRef<HTMLSpanElement>(null);
  const tailARef = useRef<HTMLSpanElement>(null);
  const tailBRef = useRef<HTMLSpanElement>(null);
  const dwellTimer = useRef<number | undefined>(undefined);
  const labelTimer = useRef<number | undefined>(undefined);

  const { stem, tailA, tailB } = splitLabels(tooltipText, copiedText);

  // Measure both tails once so the swap slot can animate its width
  // between them. Re-measure after web fonts finish loading.
  useLayoutEffect(() => {
    const swap = swapRef.current;
    const a = tailARef.current;
    const b = tailBRef.current;
    if (!swap || !a || !b) return;

    const measure = () => {
      const widths = [a, b].map((el) => {
        const prevPos = el.style.position;
        const prevDisp = el.style.display;
        el.style.position = 'static';
        el.style.display = 'inline-block';
        const w = el.getBoundingClientRect().width;
        el.style.position = prevPos;
        el.style.display = prevDisp;
        return w;
      });
      swap.style.setProperty('--tt-w-a', `${widths[0]}px`);
      swap.style.setProperty('--tt-w-b', `${widths[1]}px`);
    };

    measure();
    if (typeof document !== 'undefined' && document.fonts?.ready) {
      document.fonts.ready.then(measure).catch(() => {});
    }
  }, [tailA, tailB]);

  useEffect(
    () => () => {
      window.clearTimeout(dwellTimer.current);
      window.clearTimeout(labelTimer.current);
    },
    [],
  );

  const handleCopy = useCallback(async () => {
    try {
      if (!navigator.clipboard?.writeText) {
        throw new Error('Clipboard API unavailable');
      }
      await navigator.clipboard.writeText(text);
    } catch {
      if (fallbackHref) window.open(fallbackHref, '_self');
      return;
    }

    window.clearTimeout(dwellTimer.current);
    window.clearTimeout(labelTimer.current);

    setCopied(true);
    setLabelCopied(true);

    const isTouch = window.matchMedia?.('(hover: none)').matches ?? false;
    const dwell = isTouch ? TOUCH_DWELL_MS : DESKTOP_DWELL_MS;

    dwellTimer.current = window.setTimeout(() => {
      setCopied(false);
      labelTimer.current = window.setTimeout(() => {
        setLabelCopied(false);
      }, LABEL_RESET_DELAY_MS);
    }, dwell);
  }, [text, fallbackHref]);

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={ariaLabel}
      data-copied={copied ? 'true' : undefined}
      className={cn('copy-btn', !label && 'copy-btn-icon-only', className)}
    >
      {label && <span className="whitespace-nowrap">{label}</span>}
      <span className="relative inline-flex size-4 items-center justify-center">
        <Icon className="copy-btn-icon copy-btn-icon-copy size-4" />
        <Check className="copy-btn-icon copy-btn-icon-check size-4" />
      </span>

      <span className="copy-tooltip" role="tooltip" aria-hidden="true">
        <span className="tt-text">
          <span className="tt-stem">{stem}</span>
          <span
            ref={swapRef}
            className="tt-swap"
            data-state={labelCopied ? 'copied' : 'copy'}
          >
            <span ref={tailARef} className="tt-label tt-a">
              {tailA}
            </span>
            <span ref={tailBRef} className="tt-label tt-b">
              {tailB}
            </span>
          </span>
        </span>
      </span>

      <span className="sr-only" aria-live="polite">
        {copied ? `${copiedText} ${text}` : ''}
      </span>
    </button>
  );
};

export default CopyButton;
