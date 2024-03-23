import { useMemo, useState } from "react";
import { useIsomorphicLayoutEffect, useMediaQuery, CONST } from "main";

const light = {
  id: "light",
  label: "Light",
};
const lightItems = [
  light,
  {
    id: "light-mc",
    label: "Light medium contrast",
  },
  {
    id: "light-hc",
    label: "Light high contrast",
  },
];
const lightItemsIds = lightItems.map((item) => item.id);
const dark = {
  id: "dark",
  label: "Dark",
};
const darkItems = [
  dark,
  {
    id: "dark-mc",
    label: "Dark medium contrast",
  },
  {
    id: "dark-hc",
    label: "Dark high contrast",
  },
];
const darkItemsIds = darkItems.map((item) => item.id);
const options = [...lightItems, ...darkItems];

export const ThemeToggle = (): JSX.Element => {
  const [value, setValue] = useState(light);
  const [isPageLoad, setIsPageLoad] = useState(false);

  const isPrefLight = useMediaQuery("(prefers-color-scheme: light)");
  const isPrefDark = useMediaQuery("(prefers-color-scheme: dark)");

  useIsomorphicLayoutEffect(() => {
    const id = localStorage.getItem("vj-theme");
    const found = options.find((option) => option.id === id);

    if (found) {
      setValue(found);
      document.documentElement.dataset.theme = found.id;
    }

    setTimeout(() => {
      setIsPageLoad(true);
    }, 1000);
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (!isPageLoad) {
      return;
    }

    setValue(light);
  }, [isPrefLight]);

  useIsomorphicLayoutEffect(() => {
    if (!isPageLoad) {
      return;
    }

    setValue(dark);
  }, [isPrefDark]);

  window.addEventListener(CONST.onThemeChange, setColor, {
    signal: controller.signal
  });

  useIsomorphicLayoutEffect(() => {
    document.documentElement.dataset.theme = value.id;
    localStorage.setItem("vj-theme", value.id);
  }, [value]);

  useIsomorphicLayoutEffect(() => {
    const controller = new AbortController();

    window.addEventListener(CONST.onThemeChange, setColor, {
      signal: controller.signal
    });

    return () => {
      controller.abort();
    }
  }, []);

  const isDark = useMemo(() => darkItemsIds.includes(value.id), [value.id]);

  return (
    <div className="flex button tonal">
      <div
        className={`theme-toggle ${isDark ? "theme-toggled" : ""}`}
        title="Toggle theme"
        aria-label="Toggle theme"
      >
        <span className="text">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="1.3rem"
            height="1.3rem"
            fill="currentColor"
            className="toggle-icon"
            viewBox="0 0 32 32"
          >
            <clipPath id="around-icon-cutout">
              <path d="M0 0h42v30a1 1 0 00-16 13H0Z" />
            </clipPath>
            <g clipPath="url(#around-icon-cutout)">
              <circle cx="16" cy="16" r="8.4" />
              <g>
                <circle cx="16" cy="3.3" r="2.3" />
                <circle cx="27" cy="9.7" r="2.3" />
                <circle cx="27" cy="22.3" r="2.3" />
                <circle cx="16" cy="28.7" r="2.3" />
                <circle cx="5" cy="22.3" r="2.3" />
                <circle cx="5" cy="9.7" r="2.3" />
              </g>
            </g>
          </svg>
        </span>
      </div>
    </div>
  );
};
