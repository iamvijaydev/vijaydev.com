import { useState } from "react";
import { Layout as DefaultLayout } from "~components/Layout";
import {
  type RouteState,
  type RouteLayoutType,
  type RouteOutLet,
  getRouteState,
} from "./state";

export interface RouteStore {
  state: RouteState;
  setLoading: (loading: boolean) => void;
  setLayout: (layoutType: RouteLayoutType) => void;
  replaceOutlet: (outlet: RouteOutLet) => void;
}

export const useRouteStore = (): RouteStore => {
  const [state, setState] = useState<RouteState>(
    getRouteState()
  );

  const setLayout = (layoutType: RouteLayoutType) => {
    setState((prev) => ({
      ...prev,
      layout: layoutType === "DEFAULT_LAYOUT" ? DefaultLayout : DefaultLayout,
    }));
  };

  const replaceOutlet = (outlet: RouteOutLet) => {
    setState((prev) => ({ ...prev, outlet, loading: false }));
  };

  const setLoading = (loading: boolean) => {
    setState((prev) => ({ ...prev, loading }));
  };

  return {
    state,
    setLoading,
    setLayout,
    replaceOutlet,
  };
};
