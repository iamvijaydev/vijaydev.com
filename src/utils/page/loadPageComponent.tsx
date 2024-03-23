import type { Root } from 'react-dom/client';
import {
  hydrateRoot,
  CONST,
} from 'main';
import {
  dispatchHistoryChange,
  dispatchMetaPropsChange,
  dispatchFetchingStart,
  dispatchFetchingEnd,
  dispatchFetchingFailed,
  dispatchShowPageMask,
  dispatchHidePageMask
} from './fireCustomEvents';

import { updateHeadMeta } from './updateHeadMeta';

let appRoot: Root | undefined = undefined;
let isPageHydratePending = appRoot === undefined;
let prevScriptPath: string | undefined = undefined;

export const loadPageComponent = async (path: string, isPush: boolean = true) => {
  const scriptPath = path === '/' ? '/home' : path;
  const historyPath = path === '/home' ? '/' : path;

  if (prevScriptPath === scriptPath) {
    return;
  }
  prevScriptPath = scriptPath;

  try {
    dispatchFetchingStart();
    dispatchShowPageMask();

    const { metaProps, PageComponent } = await import(scriptPath);

    if (isPageHydratePending) {
      appRoot = hydrateRoot(
        document.getElementById('page-island')!,
        <PageComponent />
      );
      isPageHydratePending = false;
    } else {
      if (isPush) {
        const pathname = window.location.pathname;
        const search = window.location.search;

        history.pushState({}, "", historyPath);
        dispatchHistoryChange(pathname, search);
      }

      updateHeadMeta(metaProps);
      dispatchMetaPropsChange(metaProps);
      window.scrollTo(0, 0);

      /** @todo: implement document.startViewTransition */
      appRoot!.render(<PageComponent />);
    }

    dispatchFetchingEnd();
    dispatchHidePageMask();
  } catch (error) {
    if (isPageHydratePending) {
      console.warn('Page hydration failed!')
      console.warn(scriptPath);
      console.warn(error);
      /** @todo: hydration failure can cause broken UI */
    } else {
      console.warn('Script page load failed! Trigger full page navigation.')
      console.warn(scriptPath);
      console.warn(error);

      dispatchFetchingFailed();
      dispatchHidePageMask();

      /**
       * @todo: if user tried to load a page script that doesn't exist
       * dont do the not catch and reload page, manage the 404 page on FE
       */
      setTimeout(() => window.location.href = historyPath, CONST.uxInducedMinDelay);
    }
  }
}