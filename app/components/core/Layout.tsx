import { PropsWithChildren } from "react";
import { Link } from '~components/core/link/Link';
import { AppBar } from '~components/features/appBar/AppBar';

export const Layout = ({ children }: PropsWithChildren) => (
  <>
    <AppBar />
    <main>{children}</main>
    <footer>
      <div><Link href="/">Vijay Dev</Link></div>
      <nav>
        <Link href="/about">About</Link>
        <Link href="/featured">Featured</Link>
        <Link href="/learn">Learn</Link>
        <Link href="/blog">Blog</Link>
      </nav>
    </footer>
  </>
);
