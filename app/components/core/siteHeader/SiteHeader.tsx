export const SiteHeader = () => {
  return (
    <header className="site-header">
      <div className="site-header__content">
        <Link href="/" className="site-header__logo">
          <img src="/images/logo.svg" alt="Logo" />
        </Link>
        <nav className="site-header__nav">
          <Link href="/blog" className="site-header__nav-link">
            Blog
          </Link>
          <Link href="/learn" className="site-header__nav-link">
            Learn
          </Link>
        </nav>
      </div>
    </header>
  );
};