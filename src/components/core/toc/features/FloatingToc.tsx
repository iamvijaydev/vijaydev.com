import { useMemo } from "react";
import type { TocEntry } from "@stefanprobst/rehype-extract-toc";
import { Separator } from '~components/core/Separator';
import { Logo } from '~components/core/Logo';
import { Menu } from "~components/core/Menu";
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
        <span className="text-body ellipsis">{props.title}</span>
      </div>
      <Menu trigger="click" label="On this page" optionList={list} />
    </div>
  );
};
