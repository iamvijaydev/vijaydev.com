import { PostState } from "../../app/store/post/state";
import { addImports, setTechnical, setFiction, getTechnicalData } from "../store/store.dataMap";
import { getRoutes } from "../store/store.resourceMap";
import { ContentItem, ContentItemDetailed, InternalRouteData } from "../types";
import { sortByPublished } from "../utils/sortByPublished";

export const transformPostData = () => {
  const postData = getRoutes<ContentItemDetailed>();

  for (const { route } of postData.values()) {
    addImports(route.pathname, route.chunkPath);
  }

  const technicalChildList = postData.get("/technical")?.route.childPathnames;

  if (technicalChildList) {
    setTechnical(processAndSet(technicalChildList, postData));
  }

  const fictionChildList = postData.get("/fiction")?.route.childPathnames;

  if (fictionChildList) {
    setFiction(processAndSet(fictionChildList, postData));
  }
};

function processAndSet(
  childList: Set<string>,
  postData: Map<string, InternalRouteData<ContentItemDetailed>>
): PostState {
  const technicalFeatured: ContentItem[] = [];

  const technicalList: ContentItemDetailed[] = Array.from(childList)
    .map((pathname) => {
      const { matter } = postData.get(pathname)!;

      if (matter?.isFeatured) {
        const { pathname, title, description, image } = matter;
        technicalFeatured.push({ pathname, title, description, image });
      }

      return matter!;
    })
    .sort(sortByPublished);

  technicalList.forEach((matter, index, arr) => {
    const next = arr[index + 1];
    const prev = arr[index - 1];

    if (next) {
      matter.next = {
        title: next.title,
        pathname: next.pathname,
      };
    }

    if (prev) {
      matter.prev = {
        title: prev.title,
        pathname: prev.pathname,
      };
    }
  });

  return {
    featured: technicalFeatured,
    list: technicalList,
  };
}
