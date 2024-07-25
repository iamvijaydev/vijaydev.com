import { Grid, Cell } from "~components/core/grid/Grid";
import { Link } from "~components/core/link/Link";
import { MobileMenu } from "./features/MobileMenu";
import { DefaultMenu } from "./features/DefaultMenu";

export const AppBar = () => {
  return (
    <header className="app-bar surface-container">
      <Grid>
        <Cell size={6} className="app-bar__height flex align-center">
          <Link href="/" className="logo">
            <span className="logo__fname primary-color">Vijay</span>
            <span> </span>
            <span className="logo__lname primary-color">Dev</span>
          </Link>
        </Cell>
        <Cell size={6} className="self-center self-end">
          <MobileMenu />
          <DefaultMenu />
        </Cell>
      </Grid>
    </header>
  );
};
