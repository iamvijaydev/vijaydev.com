import { Header } from "islands/header/Header";
import { Footer } from "islands/footer/Footer";
import { hydrateRoot } from "main";
import type { HydrateHeaderFooterProps } from "types";

let isHeaderFooterHydrated = false;

export const hydrateHeaderFooter = ({
  pathname,
  title,
}: HydrateHeaderFooterProps) => {
  if (isHeaderFooterHydrated) {
    return;
  }

  try {
    hydrateRoot(
      document.getElementById("header-island")!,
      <Header
        pathname={pathname}
        pageTitle={title}
      />
    );
    hydrateRoot(document.getElementById("footer-island")!, <Footer />);
    isHeaderFooterHydrated = true;
  } catch (error) {
    console.warn("Mount of header and footer failed", error);
  }
};
