import { Grid, Cell } from "~components/core/grid/Grid";
import { Link } from "~components/core/link/Link";
import { Separator } from "~components/core/Separator";
import { Theming } from "./Theming";

export const AppBar = () => {
  return (
    <header className="app-bar">
      <Grid>
        <Cell size={6} className="app-bar__height flex align-center">
          <Link href="/" className="logo">
            <span className="logo__fname primary-color">Vijay</span>
            <span> </span>
            <span className="logo__lname secondary-color">Dev</span>
          </Link>
        </Cell>
        <Cell size={6}>
          <nav className="app-bar__height flex flex-end align-center gap-m">
            <Link href="/about" textProps={{ variant: 'label' }}>About</Link>
            <Link href="/featured" textProps={{ variant: 'label' }}>Featured</Link>
            <Link href="/blog" textProps={{ variant: 'label' }}>Blog</Link>
            <Link href="/learn" textProps={{ variant: 'label' }}>Learn</Link>
            <span>|</span>
            <button>Theme</button>
          </nav>
          <Theming />
        </Cell>
      </Grid>
    </header>
  );
};
