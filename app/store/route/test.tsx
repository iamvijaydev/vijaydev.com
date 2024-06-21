import { createContext, useContext } from "react";

export interface RouteContextObject {
  outlet: React.ReactElement | null;
  matches: any[];
  isDataRoute: boolean;
}
export const RouteContext = createContext<RouteContextObject>({
  outlet: null,
  matches: [],
  isDataRoute: false,
});
function useRouteContext(hookName: DataRouterStateHook) {
  let route = React.useContext(RouteContext);
  invariant(route, getDataRouterConsoleError(hookName));
  return route;
}

/** */

const OutletContext = createContext<unknown>(null);
export function useOutlet(context?: unknown): React.ReactElement | null {
  const outlet = useContext(RouteContext).outlet;

  if (outlet) {
    return (
      <OutletContext.Provider value={context}>{outlet}</OutletContext.Provider>
    );
  }
  return outlet;
}
// export function useOutletContext<Context = unknown>(): Context {
//   return useContext(OutletContext) as Context;
// }
// -
export interface OutletProps {
  context?: unknown;
}
export function Outlet(props: OutletProps): React.ReactElement | null {
  return useOutlet(props.context);
}
