import { Grid, Cell } from "~components/core/grid/Grid";
import { Link } from "~components/core/link/Link";
import { Button } from "~components/core/button/Button";
import { Theming } from "./Theming";

export const AppBar = () => {
  return (
    <header className="app-bar surface-container">
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
            <Button label="Theme" />
          </nav>
          <Theming />
        </Cell>
      </Grid>
    </header>
  );
};
