import type { PropsWithChildren } from "react";
import { Layout as DefaultLayout } from "~components/Layout";

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

export const getRouteState = (): RouteState => ({
  layout: DefaultLayout,
  outlet: () => <div />,
  loading: false,
});
