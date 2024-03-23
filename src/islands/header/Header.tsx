import {
  Logo,
  Menu,
  Link,
  ThemeToggle,
  Button,
  HamburgerIcon,
  Separator,
} from "main";
import { TocEntry } from "@stefanprobst/rehype-extract-toc";
import { useActiveLink } from "./useActiveLink";
// // import { usePageLoadAnimation } from "./usePageLoadAnimation";
// import { useScrollPresentHeaderAnimation } from "./useScrollPresentHeaderAnimation";
// // import { usePreferedTheme } from './usePreferedTheme';
import { useRef, useState } from "react";
import { usePageTitleAndToc } from "./usePageTitleAndToc";
import { PageMask } from "./features/pageMask/PageMask";

export type HeaderProps = {
  pathname: string;
  pageTitle: string;
  tableOfContents?: TocEntry[];
};

const navLinks = [
  {
    id: "about",
    href: "/about",
    label: "About",
  },
  {
    id: "case-study",
    href: "/case-study",
    label: "Case Study",
  },
  {
    id: "learn",
    href: "/learn",
    label: "Learn",
  },
];

export const Header = (props: HeaderProps): JSX.Element => {
  // const { themeText, onToggleTheme } = usePreferedTheme();

  const route = useActiveLink(props.pathname);
  const isActive = (path: string) =>
    path === "/" ? route === path : route.indexOf(path) > -1;

  // usePageLoadAnimation();

  const { pageTitle, tableOfContents } = usePageTitleAndToc({
    pageTitle: props.pageTitle,
    tableOfContents: props.tableOfContents,
  });

  return (
    <header className="site-header-level full-width app-bar bb b-surface py-3xs">
      <div className="content-grid">
        <Logo className="col-6 sm:col-3" />
        <div className="col-6 sm:col-9 flex j-end a-center gapx-s">
          <nav className="none sm:flex a-center gapx-s">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                isActive={isActive(link.href)}
                className="height-tight text-label link-card px-xs py-2xs"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Separator className="none sm:block" type="Vertical" half />
          <ThemeToggle />
          <Separator className="block sm:none!" type="Vertical" half />
          <Menu className="flex sm:none!" trigger="click" label="Menu" optionList={navLinks} />
          {/* <Button
            as="Tonal"
            label={open ? "Close" : "Menu"}
            icon={<HamburgerIcon isClose={open} />}
            onClick={() => setOpen(!open)}
            className="flex sm:none!"
          /> */}
        </div>
      </div>
      {/* <div
        className={`sm:none! ${
          open ? "content-block" : "none"
        }`}
      >
        <nav className="bt b-variant py-xs mt-xs flex f-column a-end gapy-m">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              isActive={isActive(link.href)}
              className="height-tight text-label link-card px-xs py-2xs"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div> */}
      <PageMask />
    </header>
  );
};
