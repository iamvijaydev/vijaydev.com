import { ChapterItem } from "../types";

export const sortByOrder = (a: ChapterItem, b: ChapterItem) => {
  return a.order - b.order;
};