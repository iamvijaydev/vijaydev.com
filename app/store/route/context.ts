import { createContext } from "react";
import { type RouteStore } from "./store";
import { useValidContext } from "~hooks/useValidContent";

export const RouteContext = createContext<RouteStore | undefined>(undefined);

export const useRouteContext = (): RouteStore => useValidContext(RouteContext);

