import { MetaLink, Meta } from "~types";

export type Imports = Record<string, string>;

export type HtmlHeadState = {
  imports: Imports;
  links: MetaLink[];
  meta: Meta[];
};

export const getHtmlHeadState = (): HtmlHeadState => ({
  imports: {},
  links: [],
  meta: [],
});
