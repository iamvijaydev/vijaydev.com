import { addImports, setBlogs } from "../store/store.dataMap";
import { getRoutes } from "../store/store.resourceMap";
import {
  ContentItem,
  ContentItemDetailed,
} from "../types";
import { sortByPublished } from "../utils/sortByPublished";

export const transformBlogData = () => {
  const blogData = getRoutes<ContentItemDetailed>();

  for (const { route } of blogData.values()) {
    addImports(route.pathname, route.chunkPath);
  }

  const blogChildList = blogData.get("/blog")?.route.childPathnames;

  if (blogChildList) {
    const blogFeatured: ContentItem[] = [];

    const blogList: ContentItemDetailed[] = Array.from(blogChildList)
      .map((pathname) => {
        const { matter } = blogData.get(pathname)!;

        if (matter?.isFeatured) {
          const { pathname, title, description, image } = matter;
          blogFeatured.push({ pathname, title, description, image });
        }

        return matter!;
      })
      .sort(sortByPublished);

    blogList.forEach((matter, index, arr) => {
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

    setBlogs({
      featured: blogFeatured,
      list: blogList,
    });
  }
}