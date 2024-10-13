import { MetaLink, Meta } from "~types";

export type Imports = Record<string, string>;

export const defaultLinks: MetaLink[] = [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com",
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: true,
}, {
  href: "https://fonts.googleapis.com/css2?family=Inter:slnt,wght@-10,100..900&family=Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&family=JetBrains+Mono&display=swap&",
  rel: "stylesheet",
}, { 
  href: "/assets/styles.css",
  rel: "stylesheet",
}]

export const defaultMeta: Meta[] = [{
  name: "viewport",
  content: "width=device-width, initial-scale=1.0",
}];

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
  meta: [...defaultMeta, ...meta],
});
