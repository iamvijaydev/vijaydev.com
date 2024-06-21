import type { TocEntry } from "@stefanprobst/rehype-extract-toc";
import { TocItem } from "../features/TocItem";

export const makeTocNodes = (
  activeId: string,
  data: TocEntry[],
  index = 0,
  result: JSX.Element[] = []
): JSX.Element[] => {
  const item = data[index];

  if (!item) return result;

  result.push(<TocItem key={item.id} entry={item} activeId={activeId} />);

  if (item.children) {
    result = result.concat(makeTocNodes(activeId, item.children));
  }

  return makeTocNodes(activeId, data, index + 1, result);
};
