import { Grid, Cell } from "~components/core/grid/Grid";
import { Link } from '~components/core/Link';

export const AppBar = () => {
  return (
    <header className="app-bar">
      <Grid>
        <Cell size={6}>
          <h1>VijayDev</h1>
        </Cell>
        <Cell size={6}>
          <nav>
            <Link href="/">Home</Link>
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
