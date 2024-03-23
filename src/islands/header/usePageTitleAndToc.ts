import { useEffect, useState } from "react";
import type { MetaPropsAndTocEventData } from "types";
import { CONST } from "main";
import { TocEntry } from "@stefanprobst/rehype-extract-toc";

export interface PageTitleAndTocResult {
  pageTitle: string;
  tableOfContents?: TocEntry[];
}

export const usePageTitleAndToc = (
  initialValue: PageTitleAndTocResult
): PageTitleAndTocResult => {
  const [data, setData] = useState<PageTitleAndTocResult>(initialValue);

  useEffect(() => {
    const onChange = (e: CustomEvent<MetaPropsAndTocEventData>) => {
      setData({
        pageTitle: e.detail.metaProps.title,
        tableOfContents: e.detail.tableOfContents,
      });
    };
    const controller = new AbortController();

    window.addEventListener(
      CONST.onMetaPropsAndTocChange,
      onChange as EventListener,
      {
        signal: controller.signal,
      }
    );

    return () => {
      controller.abort();
    };
  }, [setData]);

  return data;
};
