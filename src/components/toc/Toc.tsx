import type { TocEntry } from "@stefanprobst/rehype-extract-toc";
import { FloatingToc } from "./features/FloatingToc";
import { AsideToc } from "./features/AsideToc";

interface TocProps {
  title: string;
  toc?: TocEntry[];
  contentSiblingId: string;
  className?: string;
}

export const Toc = ({ title, toc, contentSiblingId, className }: TocProps) => {
  return toc && toc.length ? (
    <aside className={`${className || ''} max-xl:article-rows-aside max-xl:toc xl:toc`}>
      <FloatingToc title={title} toc={toc} />
      <AsideToc title={title} toc={toc} contentSiblingId={contentSiblingId} />
    </aside>
  ) : null;
};
