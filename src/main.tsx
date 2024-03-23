import { debounce } from "./utils/debounce";
import { loadPageComponent } from "./utils/loadPageComponent";

export { loadPageComponent };

export { hydrateRoot } from "react-dom/client";
export { CONST } from "./consts";

export { Layout } from "./components/layout/Layout";
export { ArticleLayout } from "./components/layout/ArticleLayout";

export * from "./utils/fireCustomEvents";
export { hydrateHeaderFooter } from "./utils/hydrateHeaderFooter";
export { textToSlug } from "./utils/textToSlug";
export { slugToText } from "./utils/slugToText";
export { hexToRgb } from "./utils/hexToRgb";

export { Link } from "./components/link/Link";
export type { AnchorAttributes } from "./components/link/Link";
export { Logo } from "./components/logo/Logo";
export { NavList } from "./components/NavList/NavList";
// export { FlowField } from './components/FlowField/FlowField';
export { Toc } from "./components/toc/Toc";
export { mdxComponents } from "./components/mdx/mdxComponents";
export { Label } from "./components/label/Label";
export { Breadcrumb } from "./components/breadcrumb/Breadcrumb";
export { LinkCard } from "./components/linkCard/LinkCard";
export { NextPrevNav } from "./components/nextPrevNav/NextPrevNav";
export { StaticSandbox, StaticExplorerSandbox, ConsoleSandbox, TestSandbox } from "./components/sandpackBox/SandpackBox";
export { H1, H2, H3, H4 } from "./components/typography/Heading";
export { Description } from "./components/typography/Description";
export { Masthead } from './components/masthead/Masthead';
export { ThemeToggle } from "./components/themeToggle/ThemeToggle";
export { Button, getButtonClassName } from "./components/button/Button";
export { Menu } from './components/menu/Menu';
export { HamburgerIcon } from './components/hamburgerIcon/HamburgerIcon';
export { Separator } from './components/separator/Separator';

/** utils components */
export { HydrationSafe } from './components/hydrationSafe/HydrationSafe';
export { ErrorBoundary } from './components/errorBoundary/ErrorBoundary';

// export { useDefinedContext } from './utils/hooks/useDefinedContext';
// export { HeaderPageTitleContextProvider } from './store/headerPageTitle/Provider';
// export { useHeaderPageTitleContext } from './store/headerPageTitle/context';

export { useMediaQuery } from "./utils/hooks/useMediaQuery";
export { useIsDarkMode } from "./utils/hooks/useIsDarkMode";
export { useHeadingObserver } from "./utils/hooks/useHeadingObserver";
export { useIsomorphicLayoutEffect } from "./utils/hooks/useIsomorphicLayoutEffect";

export const Thing = () => <p>Thing</p>;

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
