import { useMemo, useState } from "react";
import { useIsomorphicLayoutEffect, useMediaQuery, Menu, getButtonClassName } from "main";

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

export const themeOptions = Object.freeze([...lightItems, ...darkItems]);

export const ThemeToggle = (): JSX.Element => {
  const [value, setValue] = useState(light);

  const onToggle = () => {
    setValue((prev) => {
      let next = light;

      if (lightItemsIds.includes(value.id)) {
        next = dark;
      }

      document.firstElementChild?.setAttribute('color-scheme', next.id);
      localStorage.setItem("__color-scheme", next.id);

      return next;
    });
  };

  useIsomorphicLayoutEffect(() => {
    const id = localStorage.getItem("__color-scheme");

    if (!id) {
      return;
    }

    const found = themeOptions.find((option) => option.id === id);

    if (found) {
      setValue(found);
      document.firstElementChild?.setAttribute('color-scheme', found.id);
    }
  }, []);

  const isDark = useMemo(() => darkItemsIds.includes(value.id), [value.id]);

  const buttonClassName = getButtonClassName({ as: 'Icon' });

  return (
    <button
      className={`${buttonClassName} theme-toggle ${isDark ? "theme-toggled" : ""}`}
      type="button"
      title="Toggle theme"
      aria-label="Toggle theme"
      onClick={onToggle}
    >
      <span className="text">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          width="24px"
          height="24px"
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
    </button>
  );
  // return (
  //   <Menu
  //     options={themeOptions}
  //     onSelect={onChange}
  //     selectedId={value.id}
  //   >
  //     <button
  //       className={`button as-icon theme-toggle ${
  //         isDark ? "theme-toggled" : ""
  //       }`}
  //       type="button"
  //       title="Toggle theme"
  //       aria-label="Toggle theme"
  //       onClick={onToggle}
  //     >
  //       <span className="text">
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           aria-hidden="true"
  //           role="img"
  //           width="1.3rem"
  //           height="1.3rem"
  //           fill="currentColor"
  //           className="toggle-icon"
  //           viewBox="0 0 32 32"
  //         >
  //           <clipPath id="around-icon-cutout">
  //             <path d="M0 0h42v30a1 1 0 00-16 13H0Z" />
  //           </clipPath>
  //           <g clipPath="url(#around-icon-cutout)">
  //             <circle cx="16" cy="16" r="8.4" />
  //             <g>
  //               <circle cx="16" cy="3.3" r="2.3" />
  //               <circle cx="27" cy="9.7" r="2.3" />
  //               <circle cx="27" cy="22.3" r="2.3" />
  //               <circle cx="16" cy="28.7" r="2.3" />
  //               <circle cx="5" cy="22.3" r="2.3" />
  //               <circle cx="5" cy="9.7" r="2.3" />
  //             </g>
  //           </g>
  //         </svg>
  //       </span>
  //     </button>
  //   </Menu>
  // );
};
