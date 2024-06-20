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
  layout: RouteLayout;
  outlet: RouteOutLet;
  loading: boolean;
}

export const getRouteState = (
  layoutType?: RouteLayoutType,
  Outlet?: RouteOutLet
): RouteState => ({
  layout: layoutType === "DEFAULT_LAYOUT" ? DefaultLayout : DefaultLayout,
  outlet: Outlet || (() => <div />),
  loading: false,
});
