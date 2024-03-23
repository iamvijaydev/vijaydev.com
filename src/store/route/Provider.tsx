import type { PropsWithChildren } from "react";
import { useEffect, useMemo } from "react";
import { useRouteStore } from "./store";
import { RouteContext } from "./context";
import { CONST } from 'main';
import type { OnMetaPropsChangeEvent } from 'types';

export const MetaPropsContextProvider = (
  props: PropsWithChildren
): JSX.Element => {
  const store = useRouteStore();
  const contextValue = useMemo(
    () => ({ store }),
    [store]
  )

  useEffect(() => {
    const onMetaPropsAndTocChange = (e: CustomEvent<OnMetaPropsChangeEvent>) => {
      store.set(e.detail.metaProps);
    }
    const controller = new AbortController();

    window.addEventListener(CONST.onMetaPropsAndTocChange, (onMetaPropsAndTocChange as EventListener), {
      signal: controller.signal
    });

    return () => {
      controller.abort();
    }
  }, []);

  return (
    <RouteContext.Provider value={contextValue}>
      {props.children}
    </RouteContext.Provider>
  )
}