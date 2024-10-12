import { Grid, Cell, SizeType } from "~components/core/grid/Grid";
import { Link } from "~components/core/link/Link";
import { MobileMenu } from "./features/MobileMenu";
import { DefaultMenu } from "./features/DefaultMenu";
import { Logo } from "./features/Logo";

export const AppBar = () => {
  const cellSize: SizeType = [{
    size: 2
  }, {
    screen: 'md',
    size: 3
  }, {
    screen: 'lg',
    size: 4
  }, {
    screen: 'xl',
    size: 6
  }];
  return (
    <header className="app-bar theme-hue">
      <Grid>
        <Cell size={cellSize} className="app-bar__height flex align-center">
          <Logo />
        </Cell>
        <Cell size={cellSize} className="self-center self-end">
          <MobileMenu />
          <DefaultMenu />
        </Cell>
      </Grid>
    </header>
  );
};
