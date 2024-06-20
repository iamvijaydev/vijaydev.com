import { PropsWithChildren } from "react";
import { Link } from '~components/Link';

export const Layout = ({ children }: PropsWithChildren) => (
  <div>
    <header>
      <div><Link to="/">Vijay Dev</Link></div>
      <nav>
        <Link to="/featured">Featured</Link>
        <Link to="/learn">Learn</Link>
        <Link to="/blog">Blog</Link>
      </nav>
    </header>
    <main>{children}</main>
    <footer>
      <div><Link to="/">Vijay Dev</Link></div>
      <nav>
        <Link to="/featured">Featured</Link>
        <Link to="/learn">Learn</Link>
        <Link to="/blog">Blog</Link>
      </nav>
    </footer>
  </div>
);
