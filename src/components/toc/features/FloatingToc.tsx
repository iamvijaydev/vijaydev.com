import type { TocEntry } from "@stefanprobst/rehype-extract-toc";
import { Separator, Logo, Menu } from "main";
import { useMemo } from "react";
import { makeTocList } from "../utils/makeTocList";

export type Props = {
  title?: string;
  toc: TocEntry[];
};

export const FloatingToc = (props: Props) => {
  const list = useMemo(() => {
    return [
      { id: "top", label: "Top", href: "#top", className: "" },
      ...makeTocList(props.toc, 0, []),
    ];
  }, [props.toc]);

  return (
    <div className="xl:none flex a-center j-between py-2xs max-xl:toc-item">
      <div className="flex a-center gapx-2xs">
        <Logo size="small" className="with-logo" />
        <Separator half className="with-logo" />
        <span className="text-body">{props.title}</span>
      </div>
      <Menu trigger="click" label="On this page" optionList={list} />
    </div>
  );
};
