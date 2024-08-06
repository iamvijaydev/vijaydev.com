import { useIsomorphicEffect } from "~hooks/useIsomorphicEffect";
import { useRouteContext } from "~store/route/context";
import { debounce } from "~utils/debounce";

export const ScrollManager = () => {
  const routerStore = useRouteContext();

  useIsomorphicEffect(() => {
    const onScroll = () => {
      document.documentElement.dataset.scroll = window.scrollY.toString();
    };
  
    document.addEventListener("scroll", debounce(onScroll), { passive: true });
    onScroll();
  });

  useIsomorphicEffect(() => {
    if (!routerStore.state.loading) {
      document.body.scrollTop = 0;
    }
  }, [routerStore.state.loading]);

  return null;
}