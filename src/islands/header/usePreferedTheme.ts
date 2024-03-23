import { useEffect, useState } from "react";
import { ThemeType } from 'types';
import { dispatchThemeChange } from 'main';

const prefersDark = '(prefers-color-scheme: dark)';
const storageKey = '__theme-preference';


const getColorPreference = (): ThemeType => {
  const lsTheme = localStorage.getItem(storageKey);

  if (lsTheme === 'light' || lsTheme === 'dark') {
    return lsTheme;
  }

  return window.matchMedia(prefersDark).matches
    ? 'dark'
    : 'light'
}

const getThemeText = (theme: ThemeType) => theme === 'light' ? 'Dark mode' : 'Light mode';

const setPreference = (theme: ThemeType) => {
  localStorage.setItem(storageKey, theme);
  reflectPreference(theme);
}

const reflectPreference = (theme: ThemeType) => {
  document.firstElementChild?.setAttribute('data-theme', theme);
  dispatchThemeChange(theme);
}

export const usePreferedTheme = () => {
  if (!globalThis || !globalThis.localStorage) {
    return {
      theme: 'light',
      themeText: getThemeText('light'),
      onToggleTheme: () => {}
    }
  }

  const [theme, setTheme] = useState<ThemeType>(getColorPreference());

  reflectPreference(theme);

  useEffect(() => {
    const controller = new AbortController();

    window
      .matchMedia(prefersDark)
      .addEventListener('change', ({ matches: isDark }) => {
        const value = isDark ? 'dark' : 'light';

        setTheme(value);
        setPreference(value);
      }, {
        signal: controller.signal
      })

    return () => {
      controller.abort();
    }
  }, [])

  const onToggleTheme = () => {
    const value = theme === 'light' ? 'dark' : 'light';

    setTheme(value);
    setPreference(value);
  };

  return {
    theme,
    themeText: getThemeText(theme),
    onToggleTheme,
  }
}