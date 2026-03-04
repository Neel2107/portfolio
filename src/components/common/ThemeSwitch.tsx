'use client';

import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import React, { useCallback } from 'react';

import Moon from '@/components/svgs/Moon';
import Sun from '@/components/svgs/Sun';
import { Button } from '@/components/ui/button';

const styleId = 'theme-transition-styles';

const createThemeTransition = (blur: boolean) => {
  const enteringBlur = blur ? '5px' : '0px';
  const exitingBlur = blur ? '2px' : '0px';

  return {
    name: `subtle-crossfade${blur ? '-blur' : ''}`,
    css: `
      ::view-transition-group(root) {
        animation-duration: 320ms;
        animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
      }

      ::view-transition-old(root),
      .dark::view-transition-old(root) {
        animation: theme-fade-out 320ms both;
      }

      ::view-transition-new(root),
      .dark::view-transition-new(root) {
        animation: theme-fade-in 320ms both;
      }

      @keyframes theme-fade-out {
        from {
          opacity: 1;
          filter: blur(0px);
        }
        to {
          opacity: 0;
          filter: blur(${exitingBlur});
        }
      }

      @keyframes theme-fade-in {
        from {
          opacity: 0;
          filter: blur(${enteringBlur});
        }
        to {
          opacity: 1;
          filter: blur(0px);
        }
      }

      @media (prefers-reduced-motion: reduce) {
        ::view-transition-old(root),
        .dark::view-transition-old(root),
        ::view-transition-new(root),
        .dark::view-transition-new(root) {
          animation-duration: 120ms;
          filter: none;
        }
      }
    `,
  };
};

const updateStyles = (css: string, name: string) => {
  if (typeof window === 'undefined') return;

  let styleElement = document.getElementById(styleId) as HTMLStyleElement | null;

  if (!styleElement) {
    styleElement = document.createElement('style');
    styleElement.id = styleId;
    document.head.appendChild(styleElement);
  }

  styleElement.dataset.themeTransitionName = name;
  styleElement.textContent = css;
};

const useThemeToggle = ({ blur = false }: { blur?: boolean } = {}) => {
  const { resolvedTheme, setTheme } = useTheme();

  const isDark = resolvedTheme === 'dark';

  const toggleTheme = useCallback(() => {
    const animation = createThemeTransition(blur);
    updateStyles(animation.css, animation.name);

    const switchTheme = () => {
      setTheme(isDark ? 'light' : 'dark');
    };

    if (!document.startViewTransition) {
      switchTheme();
      return;
    }

    document.startViewTransition(switchTheme);
  }, [blur, isDark, setTheme]);

  return {
    isDark,
    toggleTheme,
  };
};

export const ThemeToggleButton = ({
  className = '',
  blur = false,
}: {
  className?: string;
  blur?: boolean;
}) => {
  const { isDark, toggleTheme } = useThemeToggle({ blur });

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className={cn(
        'size-10 cursor-pointer p-0 transition-all duration-300 active:scale-95',
        className,
      )}
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <span className="sr-only">Toggle theme</span>
      {isDark ? <Moon className="size-4" /> : <Sun className="size-4" />}
    </Button>
  );
};
