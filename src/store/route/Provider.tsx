import { PropsWithChildren, useMemo } from "react";
import { RouteContext } from "./context";
import { useRouteStore } from "./store";
import type { RouteLayoutType, RouteOutLet } from "./state";

export type Props = {
  layoutType?: RouteLayoutType;
  Outlet?: RouteOutLet;
};

export const RouteContextProvider = (props: PropsWithChildren<Props>) => {
  const store = useRouteStore();

  const value = useMemo(() => store, [store]);

  return (
    <RouteContext.Provider value={value}>
      {props.children}
    </RouteContext.Provider>
  );
};
