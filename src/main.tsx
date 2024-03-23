import { debounce } from "./utils/tools/debounce";
import { loadPageComponent } from "./utils/page/loadPageComponent";

export { loadPageComponent };

export { hydrateRoot } from "react-dom/client";
export { CONST } from "./consts";

export * from "./components/index";

export { useMediaQuery } from "./utils/hooks/useMediaQuery";
export { useIsDarkMode } from "./utils/hooks/useIsDarkMode";
export { useHeadingObserver } from "./utils/hooks/useHeadingObserver";
export { useIsomorphicLayoutEffect } from "./utils/hooks/useIsomorphicLayoutEffect";

export { hydrateHeaderFooter } from "./utils/page/hydrateHeaderFooter";

const setUpNavigateBackHandler = () => {
  const base = "http://localhost:3000";

  window.addEventListener("popstate", () => {
    loadPageComponent(
      /* path */ `${document.location}`.replace(base, ""),
      /* isPush */ false
    );
  });
};

const setUpScrollStore = () => {
  const onScroll = () => {
    document.documentElement.dataset.scroll = window.scrollY.toString();
  };

  document.addEventListener("scroll", debounce(onScroll), { passive: true });
  onScroll();
};

const init = () => {
  try {
    setUpNavigateBackHandler();
    setUpScrollStore();
  } catch (error) {
    // no-op, this is node build env
  }
};

init();
