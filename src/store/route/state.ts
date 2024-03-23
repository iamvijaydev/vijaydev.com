import type { MetaProps } from "types";

export type RouteType = {
  pathname: string;
  search?: string;
  routes?: [];
}

export type RouteStateType = {
  active: RouteType,
  routes: RouteType[];
}

export const getDefaultRouteState = (active: RouteType = { pathname: '/' }) => ({
  active,
  routes: []
})