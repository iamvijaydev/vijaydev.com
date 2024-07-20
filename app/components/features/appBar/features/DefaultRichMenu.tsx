import { Link } from "~components/core/link/Link";

export const DefaultRichMenu = () => {
  return (
    <details>
      <summary className="flex flex-end focus-visible">
        <div className="button secondary-container flex align-center gap-2xs">
          <span className="icon text label material-symbols-outlined">
            menu
          </span>
          <span className="text label">Menu</span>
          <span className="icon text label material-symbols-outlined">
            arrow_drop_down
          </span>
        </div>
      </summary>
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
    </details>
  );
};