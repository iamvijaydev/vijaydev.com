import type { TocEntry } from "@stefanprobst/rehype-extract-toc";
import { TocItem } from "../features/TocItem";

export const makeTocNodes = (
  data: TocEntry[],
  index = 0,
  result: JSX.Element[] = []
): JSX.Element[] => {
  const item = data[index];

  if (!item) return result;

  result.push(<TocItem key={item.id} entry={item} url="" className="" />);

  if (item.children) {
    result = result.concat(makeTocNodes(item.children));
  }

  return makeTocNodes(data, index + 1, result);
};
