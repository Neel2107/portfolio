'use client';

import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import React, { useCallback, useEffect, useState } from 'react';

import Moon from '@/components/svgs/Moon';
import Sun from '@/components/svgs/Sun';
import { Button } from '@/components/ui/button';

export const useThemeToggle = ({
  variant = 'circle',
  start = 'center',
  blur = false,
  gifUrl = '',
}: {
  variant?: AnimationVariant;
  start?: AnimationStart;
  blur?: boolean;
  gifUrl?: string;
} = {}) => {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(resolvedTheme === 'dark');
  }, [resolvedTheme]);

  const styleId = 'theme-transition-styles';

  const updateStyles = useCallback((css: string, name: string) => {
    if (typeof window === 'undefined') return;

    let styleElement = document.getElementById(styleId) as HTMLStyleElement;

    if (!styleElement) {
      styleElement = document.createElement('style');
      styleElement.id = styleId;
      document.head.appendChild(styleElement);
    }

    styleElement.dataset.themeTransitionName = name;
    styleElement.textContent = css;
  }, []);

  const toggleTheme = useCallback(() => {
    setIsDark((current) => !current);

    const animation = createAnimation(variant, start, blur, gifUrl);

    updateStyles(animation.css, animation.name);

    if (typeof window === 'undefined') return;

    const switchTheme = () => {
      setTheme(theme === 'light' ? 'dark' : 'light');
    };

    if (!document.startViewTransition) {
      switchTheme();
      return;
    }

    document.startViewTransition(switchTheme);
  }, [
    theme,
    setTheme,
    variant,
    start,
    blur,
    gifUrl,
    updateStyles,
    setIsDark,
  ]);

  const setCrazyLightTheme = useCallback(() => {
    setIsDark(false);

    const animation = createAnimation(variant, start, blur, gifUrl);

    updateStyles(animation.css, animation.name);

    if (typeof window === 'undefined') return;

    const switchTheme = () => {
      setTheme('light');
    };

    if (!document.startViewTransition) {
      switchTheme();
      return;
    }

    document.startViewTransition(switchTheme);
  }, [setTheme, variant, start, blur, gifUrl, updateStyles, setIsDark]);

  const setCrazyDarkTheme = useCallback(() => {
    setIsDark(true);

    const animation = createAnimation(variant, start, blur, gifUrl);

    updateStyles(animation.css, animation.name);

    if (typeof window === 'undefined') return;

    const switchTheme = () => {
      setTheme('dark');
    };

    if (!document.startViewTransition) {
      switchTheme();
      return;
    }

    document.startViewTransition(switchTheme);
  }, [setTheme, variant, start, blur, gifUrl, updateStyles, setIsDark]);

  return {
    isDark,
    setIsDark,
    toggleTheme,
    setCrazyLightTheme,
    setCrazyDarkTheme,
  };
};

// ///////////////////////////////////////////////////////////////////////////

export const ThemeToggleButton = ({
  className = '',
  variant = 'circle',
  start = 'center',
  blur = false,
  gifUrl = '',
}: {
  className?: string;
  variant?: AnimationVariant;
  start?: AnimationStart;
  blur?: boolean;
  gifUrl?: string;
}) => {
  const { isDark, toggleTheme } = useThemeToggle({
    variant,
    start,
    blur,
    gifUrl,
  });

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className={cn(
        'size-10 cursor-pointer  p-0 transition-all duration-300 active:scale-95',
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

// ///////////////////////////////////////////////////////////////////////////

export type AnimationVariant =
  | 'circle'
  | 'rectangle'
  | 'gif'
  | 'polygon'
  | 'circle-blur';
export type AnimationStart =
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'
  | 'center'
  | 'top-center'
  | 'bottom-center'
  | 'bottom-up'
  | 'top-down'
  | 'left-right'
  | 'right-left';

interface Animation {
  name: string;
  css: string;
}

export const createAnimation = (
  variant: AnimationVariant,
  start: AnimationStart = 'center',
  blur = false,
  url?: string,
): Animation => {
  const enteringBlur = blur ? '5px' : '0px';
  const exitingBlur = blur ? '2px' : '0px';

  return {
    name: `subtle-crossfade-${variant}-${start}${blur ? '-blur' : ''}${url ? '-media' : ''}`,
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
