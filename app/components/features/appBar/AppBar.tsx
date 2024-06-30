import { Grid, Cell } from "~components/core/grid/Grid";
import { Link } from "~components/core/link/Link";

export const AppBar = () => {
  return (
    <header className="app-bar">
      <Grid>
        <Cell size={6} className="app-bar__height flex align-center">
          <Link href="/" className="logo">
            <span className="logo__fname">Vijay</span>
            <span> </span>
            <span className="logo__lname">Dev</span>
          </Link>
        </Cell>
        <Cell size={6}>
          <nav className="app-bar__height flex flex-end align-center gap-m">
            <Link href="/about">About</Link>
            <Link href="/featured">Featured</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/learn">Learn</Link>
          </nav>
        </Cell>
      </Grid>
    </header>
  );
};