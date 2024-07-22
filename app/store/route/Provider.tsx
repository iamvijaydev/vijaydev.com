import { PropsWithChildren, useMemo } from "react";
import { RouteContext } from "./context";
import { useRouteStore } from "./store";
import type { RouteLayoutType, RouteOutLet } from "./state";

export type Props = {
  pathname: string;
  layoutType?: RouteLayoutType;
  Outlet?: RouteOutLet;
};

export const RouteContextProvider = (props: PropsWithChildren<Props>) => {
  const store = useRouteStore(props.pathname, props.layoutType, props.Outlet);

  const value = useMemo(() => store, [store]);

  return (
    <RouteContext.Provider value={value}>
      {props.children}
    </RouteContext.Provider>
  );
};
