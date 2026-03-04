'use client';

import { cn } from '@/lib/utils';
import { Check, Mail } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

interface CopyEmailButtonProps {
  email: string;
  label?: string;
  tooltipText?: string;
  copiedText?: string;
  className?: string;
}

const RESET_TIMEOUT_MS = 1600;

const CopyEmailButton = ({
  email,
  label = 'Say Hello!',
  tooltipText = 'Copy email',
  copiedText = 'Copied!',
  className,
}: CopyEmailButtonProps) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;

    const timeout = window.setTimeout(() => {
      setCopied(false);
    }, RESET_TIMEOUT_MS);

    return () => window.clearTimeout(timeout);
  }, [copied]);

  const handleCopy = useCallback(async () => {
    try {
      if (!navigator.clipboard?.writeText) {
        throw new Error('Clipboard API unavailable');
      }

      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      // Fallback for restricted clipboard environments.
      window.open(`mailto:${email}`, '_self');
      setCopied(false);
    }
  }, [email]);

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label="Copy email address"
      className={cn(
        'group relative inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-primary border border-primary/10 hover:border-primary/40 transition-all duration-300 self-start active:scale-[0.98]',
        className,
      )}
    >
      <span
        className={cn(
          'pointer-events-none absolute -top-10 left-1/2 z-10 -translate-x-1/2 rounded-md border border-primary/20 bg-background px-2 py-1 text-xs font-medium text-primary shadow-sm whitespace-nowrap transition-all duration-200',
          copied
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:translate-y-0',
        )}
      >
        {copied ? copiedText : tooltipText}
      </span>
      <span className="whitespace-nowrap text-primary">{label}</span>
      <span className="relative inline-flex size-5 items-center justify-center">
        <Mail
          className={cn(
            'absolute size-5 text-secondary transition-all duration-200 ease-out',
            copied ? 'scale-75 opacity-0 blur-[2px]' : 'scale-100 opacity-100 blur-0',
          )}
        />
        <Check
          className={cn(
            'absolute size-5 text-primary transition-all duration-200 ease-out',
            copied ? 'scale-100 opacity-100 blur-0' : 'scale-75 opacity-0 blur-[2px]',
          )}
        />
      </span>
    </button>
  );
};

export default CopyEmailButton;
