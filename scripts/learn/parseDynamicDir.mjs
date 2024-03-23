import { readFile } from "node:fs/promises";
import { Glob } from "glob";
import { read } from "to-vfile";
import { matter } from "vfile-matter";
import { parse } from "yaml";

import { toInt, camelCaseToNames } from "../utils.mjs";
import { addTopic, addTopicDetails, addTopicChapter } from "./store.learn.mjs";

export const parseDynamicDir = async () => {
  const dirPath = "src/islands/pages/learn/_topic/";

  const files = new Glob("src/islands/pages/learn/_topic/**/*", {
    ignore: ["**/components/**"],
    nodir: true,
  });

  for await (const fullPath of files) {
    const inner = fullPath.replace(dirPath, "");
    const parts = inner.split("/");
    const name = parts.pop();
    const topic = parts.pop();

    const [topicSlug, topicTitle] = camelCaseToNames(topic);
    let [order, year, month, ...rawName] = name.replace(".mdx", "").split("-");
    const slug = rawName.join("-");
    const title = rawName
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    year = toInt(year);
    month = toInt(month);

    addTopic(topicSlug, topicTitle);

    if (order === "introduction.yml") {
      const file = await readFile(fullPath, "utf8");

      addTopicDetails(topicSlug, parse(file));
    } else {
      const file = await read(fullPath);

      matter(file);

      if (!file.data.matter.draft) {
        addTopicChapter(topicSlug, slug, {
          fullPath,
          topicSlug,
          slug,
          title,
          order: order === "a" ? -1 : toInt(order),
          year,
          month,
          ...file.data.matter,
        });
      }
    }
  }
};
