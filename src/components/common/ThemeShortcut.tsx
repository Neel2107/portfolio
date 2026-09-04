'use client';

import { useThemeToggle } from '@/components/common/ThemeSwitch';
import { useEffect } from 'react';

const isTypingTarget = (target: EventTarget | null) => {
  if (!(target instanceof HTMLElement)) return false;
  const tag = target.tagName;
  return (
    tag === 'INPUT' ||
    tag === 'TEXTAREA' ||
    tag === 'SELECT' ||
    target.isContentEditable
  );
};

/**
 * Global "d" shortcut that toggles the theme, mirroring the shadcn/ui site.
 * Ignored while typing in a field or when a modifier key is held.
 */
const ThemeShortcut = () => {
  const { toggleTheme } = useThemeToggle({ blur: true });

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() !== 'd') return;
      if (event.metaKey || event.ctrlKey || event.altKey || event.repeat) return;
      if (isTypingTarget(event.target)) return;

      event.preventDefault();
      toggleTheme();
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [toggleTheme]);

  return null;
};

export default ThemeShortcut;
