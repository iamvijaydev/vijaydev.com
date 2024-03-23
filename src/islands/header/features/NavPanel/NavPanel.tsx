import { Link } from 'main';

export const NavPanel = () => {
  return (
    <nav>
        <Link href="/" className={isActive('/') ? 'isActive' : ''}>Home</Link>
        <Link href="/about" className={isActive('/about') ? 'isActive' : ''}>About</Link>
        <Link href="/blog" className={isActive('/blog') ? 'isActive' : ''}>Blog</Link>
      </nav>
  )
}