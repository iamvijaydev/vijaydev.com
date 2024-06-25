import { PropsWithChildren } from "react";
import { Link } from '~components/core/Link';

export const Layout = ({ children }: PropsWithChildren) => (
  <div>
    <header>
      <div><Link href="/">Vijay Dev</Link></div>
      <nav>
        <Link href="/about">About</Link>
        <Link href="/featured">Featured</Link>
        <Link href="/learn">Learn</Link>
        <Link href="/blog">Blog</Link>
      </nav>
    </header>
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
  </div>
);
