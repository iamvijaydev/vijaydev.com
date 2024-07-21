import { Link } from "~components/core/link/Link";

export const DefaultBasicMenu = () => {
  return (
    <nav className="app-bar__height flex flex-end align-center gap-m">
      <Link href="/about" textProps={{ variant: "label" }}>
        About
      </Link>
      <Link href="/featured" textProps={{ variant: "label" }}>
        Featured
      </Link>
      <Link href="/blog" textProps={{ variant: "label" }}>
        Blog
      </Link>
      <Link href="/learn" textProps={{ variant: "label" }}>
        Learn
      </Link>
    </nav>
  );
};
