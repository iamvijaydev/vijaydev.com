import type { TocEntry } from "@stefanprobst/rehype-extract-toc";
import {
  useMediaQuery,
  useHeadingObserver,
  useIsomorphicLayoutEffect,
} from "main";
import { useMemo, useRef, useState } from "react";
import { makeTocNodes } from "../utils/makeTocNodes";

export type Props = {
  title?: string;
  toc: TocEntry[];
  contentSiblingId: string;
};

const defaultStyle = {
  opacity: 1,
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
    return makeTocNodes(props.toc ?? [], 0, []);
  }, [props.toc]);

  useIsomorphicLayoutEffect(() => {
    let timer: NodeJS.Timeout;

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
        top: found.getBoundingClientRect().top - 19 + "px",
        height: found.getBoundingClientRect().height + "px",
      });
    };
    const optimizedSetStyles = () => {
      clearTimeout(timer);
      timer = setTimeout(setIndicatorStyles, 200);
    }

    const controller = new AbortController();

    optimizedSetStyles();
    window.addEventListener("resize", optimizedSetStyles, { signal: controller.signal });

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [activeId, asideRef.current, navRef.current]);

  return (
    <div
      ref={asideRef}
      className="none xl:inline-grid bl b-variant pl-m py-m relative"
    >
      <span className="text-label text-dim-color mb-2xs">On this page</span>
      <h3 className="text-title4 mb-m">{props.title}</h3>
      <nav className="flex f-column a-start gapy-s text-body height-normal">
        {elements}
      </nav>
      <div className="toc-indicator" style={styles} />
    </div>
  );
};
