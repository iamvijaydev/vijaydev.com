import { useState } from "react";
import { MetaLink, Meta } from "~types";
import {
  type HtmlHeadState,
  getHtmlHeadState,
} from "./state";

export interface HtmlHeadStore {
  state: HtmlHeadState;
  addImpormap: (importmap: Record<string, string>) => void;
  replaceMetaLinks: (links: MetaLink[]) => void;
  replaceMeta: (meta: Meta[]) => void;
}

export const useHtmlHeadStore = (): HtmlHeadStore => {
  const [state, setState] = useState<HtmlHeadState>(
    getHtmlHeadState()
  );

  const replaceMetaLinks = (links: MetaLink[]) => {
    setState((prev) => ({ ...prev, links }));
  }

  const replaceMeta = (meta: Meta[]) => {
    setState((prev) => ({ ...prev, meta }));
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
