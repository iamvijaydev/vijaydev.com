import { createContext } from "react";
import { type HtmlHeadStore } from "./store";
import { useValidContext } from "~hooks/useValidContent";

export const HtmlHeadContext = createContext<HtmlHeadStore | undefined>(undefined);

export const useHtmlHeadContext = (): HtmlHeadStore => useValidContext(HtmlHeadContext);

