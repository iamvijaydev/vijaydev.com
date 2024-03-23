import { useEffect, useState } from "react";
import type { PageMaskEventData } from "types";
import { CONST } from "main";

export const PageMask = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const onChange = (e: CustomEvent<PageMaskEventData>) => {
      setIsVisible(e.detail.isVisible);
    };
    const controller = new AbortController();

    window.addEventListener(
      CONST.onPageMaskEvent,
      onChange as EventListener,
      {
        signal: controller.signal,
      }
    );

    return () => {
      controller.abort();
    };
  }, [setIsVisible]);

  return isVisible ? <div className="backdrop-blur-sm fixed inset-0 z-10 animate-pulse" /> : null;
}