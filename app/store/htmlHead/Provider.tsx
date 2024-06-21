import { PropsWithChildren, useMemo } from "react";
import { HtmlHeadContext } from "./context";
import { useHtmlHeadStore } from "./store";
import type { Imports, Link, Meta } from "./state";

export type Props = {
  imports?: Imports;
  links?: Link[];
  meta?: Meta[];
};

export const HtmlHeadContextProvider = (props: PropsWithChildren<Props>) => {
  const store = useHtmlHeadStore(props.imports, props.links, props.meta);

  const value = useMemo(() => store, [store]);

  return (
    <HtmlHeadContext.Provider value={value}>
      {props.children}
    </HtmlHeadContext.Provider>
  );
};
