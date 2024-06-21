import type { TocEntry } from "@stefanprobst/rehype-extract-toc";
import { useMediaQuery } from "~hooks/useMediaQuery";
import { useHeadingObserver } from "~hooks/useHeadingObserver";
import { useIsomorphicEffect } from "~hooks/useIsomorphicEffect";
import { useMemo, useRef, useState } from "react";
import { makeTocNodes } from "../utils/makeTocNodes";

export type Props = {
  title?: string;
  toc: TocEntry[];
  contentSiblingId: string;
};

const defaultStyle = {
  opacity: 1,
  left: "0px",
  top: "0px",
  height: "0px",
};

export const AsideToc = (props: Props) => {
  const matches = useMediaQuery("(min-width: 1200px)");
  const activeId = useHeadingObserver({
    enabled: matches,
    nodeId: props.contentSiblingId,
  });

  const navRef = useRef<HTMLElement>(null);
  const asideRef = useRef<HTMLDivElement>(null);

  const [styles, setStyles] = useState(defaultStyle);

  const elements = useMemo(() => {
    return makeTocNodes(activeId, props.toc ?? [], 0, []);
  }, [activeId, props.toc]);

  useIsomorphicEffect(() => {
    const setIndicatorStyles = () => {
      if (!asideRef.current) {
        setStyles(defaultStyle);
        return;
      }

      if (!activeId || !activeId.length) {
        setStyles(defaultStyle);
        return;
      }

      const found = asideRef.current.querySelector(
        '[href="#' + activeId + '"]'
      );

      if (!found) {
        setStyles(defaultStyle);
        return;
      }

      setStyles({
        opacity: 1,
        left: asideRef.current.getBoundingClientRect().left - 1 + "px",
        top: found.getBoundingClientRect().top + "px",
        height: found.getBoundingClientRect().height + "px",
      });
    };

    const controller = new AbortController();

    setIndicatorStyles();
    window.addEventListener("resize", setIndicatorStyles, { signal: controller.signal });
    window.addEventListener("scroll", setIndicatorStyles, { signal: controller.signal });

    return () => {
      controller.abort();
    };
  }, [activeId, asideRef.current, navRef.current]);

  return (
    <div
      ref={asideRef}
      className="none xl:inline-grid pl-m py-m relative"
    >
      <span className="text-label text-dim-color mb-2xs relative level-2">On this page</span>
      <h3 className="text-title4 mb-m relative level-2">{props.title}</h3>
      <nav className="toc-links flex f-column a-start gapy-s text-body height-normal relative level-2">
        {elements}
      </nav>
      <div className="toc-indicator" style={styles} />
    </div>
  );
};
