import type { PropsWithChildren } from "react";
import { Layout as DefaultLayout } from "~components/core/Layout";

export type RouteLayoutType = "DEFAULT_LAYOUT" | "HOME_LAYOUT";

export type RouteLayout = {
  (prop: PropsWithChildren): JSX.Element;
};
export type RouteOutLet = {
  (prop?: PropsWithChildren): JSX.Element;
};

export interface RouteState {
  pathname: string;
  layout: RouteLayout;
  outlet: RouteOutLet;
  loading: boolean;
}

export const getRouteState = (
  pathname: string,
  layoutType?: RouteLayoutType,
  Outlet?: RouteOutLet
): RouteState => ({
  pathname,
  layout: layoutType === "DEFAULT_LAYOUT" ? DefaultLayout : DefaultLayout,
  outlet: Outlet || (() => <div />),
  loading: false,
});
