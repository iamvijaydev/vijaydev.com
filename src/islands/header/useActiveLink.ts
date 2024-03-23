import { useEffect, useState } from 'react';
import type { HistoryChangeEventData } from 'types';
import { CONST } from 'main';

export const useActiveLink = (initialPathname: string) => {
  const [route, setRoute] = useState<string>(initialPathname);

  useEffect(() => {
    const onRouteChange = (e: CustomEvent<HistoryChangeEventData>) => {
      setRoute(e.detail.to.pathname + e.detail.to.search);
    }
    const controller = new AbortController();

    window.addEventListener(CONST.onHistoryChanged, (onRouteChange as EventListener), {
      signal: controller.signal
    });

    return () => {
      controller.abort();
    }
  }, [setRoute]);

  return route;
}