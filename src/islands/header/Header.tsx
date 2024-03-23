import {
  Logo,
  Menu,
  Link,
  ThemeToggle,
  Separator,
} from "main";
import { useActiveLink } from "./useActiveLink";
// // import { usePageLoadAnimation } from "./usePageLoadAnimation";
import { PageMask } from "./features/pageMask/PageMask";

export type HeaderProps = {
  pathname: string;
  pageTitle: string;
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

  const route = useActiveLink(props.pathname);
  const isActive = (path: string) =>
    path === "/" ? route === path : route.indexOf(path) > -1;

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
        </div>
      </div>
      <PageMask />
    </header>
  );
};
