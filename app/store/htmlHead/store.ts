import { useState } from "react";
import { MetaLink, Meta } from "~types";
import {
  type HtmlHeadState,
  type Imports,
  getHtmlHeadState,
  defaultLinks,
  defaultMeta,
} from "./state";

export interface HtmlHeadStore {
  state: HtmlHeadState;
  addImpormap: (importmap: Record<string, string>) => void;
  replaceMetaLinks: (links: MetaLink[]) => void;
  replaceMeta: (meta: Meta[]) => void;
}

export const useHtmlHeadStore = (
  imports?: Imports,
  links?: MetaLink[],
  meta?: Meta[]
): HtmlHeadStore => {
  const [state, setState] = useState<HtmlHeadState>(
    getHtmlHeadState(imports, links, meta)
  );

  const replaceMetaLinks = (links: MetaLink[]) => {
    setState((prev) => ({ ...prev, links: [...defaultLinks, ...links] }));
  };

  const replaceMeta = (meta: Meta[]) => {
    setState((prev) => ({ ...prev, meta: [...defaultMeta, ...meta]}));
  };

  const addImpormap = (importmap: Record<string, string>) => {
    setState((prev) => ({ ...prev, importmap }));
  };

  return {
    state,
    addImpormap,
    replaceMetaLinks,
    replaceMeta,
  };
};
