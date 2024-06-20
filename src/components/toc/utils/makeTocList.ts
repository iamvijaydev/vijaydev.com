import type { TocEntry } from "@stefanprobst/rehype-extract-toc";

export const marginSpace = ["ml-0", "ml-0", "ml-2xs", "ml-xs", "ml-s", "ml-m"];

export type TocList = {
  id: string;
  label: string;
  href?: string;
  className: string;
};

export const makeTocList = (
  data: TocEntry[],
  index = 0,
  result: TocList[] = []
): TocList[] => {
  const item = data[index];

  if (!item) return result;

  const each: TocList = {
    id: item.value,
    label: item.value,
    className: "",
  };

  if (item.id) {
    each.id = item.id;
    each.href = "#" + item.id;
    each.className = marginSpace[item.depth];
  }

  result.push(each);

  if (item.children) {
    result = result.concat(makeTocList(item.children));
  }

  return makeTocList(data, index + 1, result);
};
