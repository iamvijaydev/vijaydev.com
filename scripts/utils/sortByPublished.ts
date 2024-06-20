import { ContentItemDetailed } from "../types";

export const sortByPublished = (
  a: ContentItemDetailed,
  b: ContentItemDetailed
) => {
  const [aYear, aMonth, aDate] = a.published;
  const [bYear, bMonth, bDate] = b.published;

  const aDateObj = new Date(aYear, aMonth - 1, aDate);
  const bDateObj = new Date(bYear, bMonth - 1, bDate);

  return aDateObj.getTime() - bDateObj.getTime();
};
