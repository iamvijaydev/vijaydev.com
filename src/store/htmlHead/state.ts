import { MetaLink, Meta } from "~types";

export type Imports = Record<string, string>;

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
  links: links,
  meta: meta,
});
