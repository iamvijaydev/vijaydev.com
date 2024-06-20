import { setLearn } from "../store/store.dataMap";
import { getRoutes } from "../store/store.resourceMap";
import {
  ChapterItem,
  TopicItemFeatured,
  TopicItem,
  TopicList,
} from "../types";
import { sortByOrder } from "../utils/sortByOrder";

export const transformLearn = () => {
  const learnData = getRoutes<TopicItem>();

  const learnTopicList = learnData.get("/learn")?.route.childPathnames;

  if (learnTopicList) {
    const featured: TopicItemFeatured[] = [];
    const topicList = new Map<string, TopicList>();

    Array.from(learnTopicList).forEach((pathname) => {
      const topic = learnData.get(pathname)!;
      const matter = topic.matter as TopicItem;

      const chapters = Array.from(topic.route.childPathnames!)
        .map((childPathname) => {
          const chapterMatter = learnData.get(childPathname)!
            .matter as ChapterItem;

          chapterMatter.topic = {
            pathname,
            title: matter.title,
            isRetired: matter.isRetired,
          };
          return chapterMatter;
        })
        .sort(sortByOrder);

      chapters.forEach((chapter, index, arr) => {
        const next = arr[index + 1];
        const prev = arr[index - 1];

        if (next) {
          chapter.next = {
            title: next.title,
            pathname: next.pathname,
          };
        }

        if (prev) {
          chapter.prev = {
            title: prev.title,
            pathname: prev.pathname,
          };
        }
      });

      topicList.set(pathname, {
        matter,
        chapters,
      });

      if (matter.isFeatured) {
        featured.push({
          ...matter,
          chapterCount: chapters.length - 3,
          chapters: chapters.slice(0, 3),
        });
      }
    });

    setLearn({
      featured,
      list: topicList,
    });
  }
}