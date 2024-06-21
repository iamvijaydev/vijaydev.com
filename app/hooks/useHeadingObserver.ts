import { useEffect, useState, useRef } from "react";

type Options = {
  enabled: boolean;
  nodeId: string;
};

export function useHeadingObserver({ enabled, nodeId }: Options) {
  const [activeId, setActiveId] = useState("");
  const observer = useRef<IntersectionObserver>();

  useEffect(() => {
    if (!enabled) return;

    const node = document.querySelector(nodeId);

    if (!node) return;

    const handleObserver: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry?.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    observer.current = new IntersectionObserver(handleObserver, {
      rootMargin: "-30% 0px -50% 0px",
      threshold: 0.5,
    });

    const elements = node.querySelectorAll("h2, h3, h4, h5");

    elements.forEach((elem) => observer.current?.observe(elem));

    return () => observer.current?.disconnect();
  }, [enabled, nodeId]);

  return activeId;
}
