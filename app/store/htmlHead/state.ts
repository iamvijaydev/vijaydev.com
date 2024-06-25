import { MetaLink, Meta } from "~types";

export type Imports = Record<string, string>;

export const defaultLinks: MetaLink[] = [{
  href: "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap",
  rel: "stylesheet",
}, { 
  href: "/assets/styles.css",
  rel: "stylesheet",
}]

export type HtmlHeadState = {
  imports: Imports;
  links: MetaLink[];
  meta: Meta[];
};

export const getHtmlHeadState = (
  imports: Imports = {},
  links: MetaLink[] = [],
  meta: Meta[] = []
): HtmlHeadState => ({
  imports: imports,
  links: [...defaultLinks, ...links],
  meta: meta,
});
