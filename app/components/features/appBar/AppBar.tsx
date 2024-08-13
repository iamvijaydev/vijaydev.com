import { Grid, Cell } from "~components/core/grid/Grid";
import { Link } from "~components/core/link/Link";
import { MobileMenu } from "./features/MobileMenu";
import { DefaultMenu } from "./features/DefaultMenu";
import { Logo } from "./features/Logo";

export const AppBar = () => {
  return (
    <header className="app-bar surface-container theme-hue">
      <Grid>
        <Cell size={6} className="app-bar__height flex align-center">
          <Logo />
        </Cell>
        <Cell size={6} className="self-center self-end">
          <MobileMenu />
          <DefaultMenu />
        </Cell>
      </Grid>
    </header>
  );
};
