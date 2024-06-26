import { useIsomorphicEffect } from "~hooks/useIsomorphicEffect";
import { debounce } from "~utils/debounce";

export const ScrollManager = () => {
  useIsomorphicEffect(() => {
    const onScroll = () => {
      document.documentElement.dataset.scroll = window.scrollY.toString();
    };
  
    document.addEventListener("scroll", debounce(onScroll), { passive: true });
    onScroll();
  });

  return null;
}