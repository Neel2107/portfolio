'use client';

import { useCallback, useSyncExternalStore } from 'react';

const STORAGE_KEY = 'ui-sounds';
const CHANGE_EVENT = 'ui-sounds-change';

/** Sounds are on unless the visitor has turned them off. */
export const isSoundEnabled = () => {
  try {
    return window.localStorage.getItem(STORAGE_KEY) !== 'off';
  } catch {
    return true;
  }
};

const subscribe = (onChange: () => void) => {
  window.addEventListener(CHANGE_EVENT, onChange);
  window.addEventListener('storage', onChange);
  return () => {
    window.removeEventListener(CHANGE_EVENT, onChange);
    window.removeEventListener('storage', onChange);
  };
};

export const useSoundEnabled = () => {
  const enabled = useSyncExternalStore(subscribe, isSoundEnabled, () => true);

  const toggleSound = useCallback(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, isSoundEnabled() ? 'off' : 'on');
    } catch {
      // Storage unavailable (e.g. private mode): the preference can't be kept.
    }
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }, []);

  return { enabled, toggleSound };
};
