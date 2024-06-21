import { useIsomorphicEffect } from "~hooks/useIsomorphicEffect";
import { useLoadRouteCommand } from "~commands/useLoadRoute";

export const PopState = () => {
  const loadRoute = useLoadRouteCommand();

  useIsomorphicEffect(() => {
    const onPopState = () => {
      loadRoute(window.location.pathname, false);
    };

    window.addEventListener("popstate", onPopState, false);

    return () => {
      window.removeEventListener("popstate", onPopState);
    };
  });

  return null;
};
