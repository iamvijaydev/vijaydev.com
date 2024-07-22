import { useHtmlHeadContext } from "~store/htmlHead/context";
import { useRouteContext } from "~store/route/context";


export type LoadRouteCommand = (pathname: string, isPush?: boolean) => Promise<void>;

export const useLoadRouteCommand = (): LoadRouteCommand => {
  let prevScriptPath: string | undefined = undefined;

  const htmlHeadStore = useHtmlHeadContext();
  const routerStore = useRouteContext();

  return async function loadRoute(pathname: string, isPush: boolean = true) {
    const scriptPath = pathname === "/" ? "/home" : pathname;
    const historyPath = pathname === "/home" ? "/" : pathname;

    if (prevScriptPath === scriptPath) {
      return;
    }
    prevScriptPath = scriptPath;

    try {
      routerStore.setLoading(true);

      const { RouteComponent, links, meta, layoutType } = await import(scriptPath);

      if (isPush) {
        history.pushState({}, "", historyPath);
      }

      htmlHeadStore.replaceMetaLinks(links ?? []);
      htmlHeadStore.replaceMeta(meta ?? []);

      if (layoutType) {
        routerStore.setLayout(layoutType);
      }
      routerStore.replaceOutlet(historyPath, RouteComponent);

    } catch (error) {
      routerStore.setLoading(false);

      console.warn(`Script page load failed for "${pathname}"! Switching to full page navigation.`);
      console.warn(error);

      setTimeout(() => (window.location.href = pathname), 250);
    }
  };
};
