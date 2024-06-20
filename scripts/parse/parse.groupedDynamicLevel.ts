import { readFile } from "node:fs/promises";
import path from "node:path";
import { read } from "to-vfile";
import { matter as getMatter } from "vfile-matter";
import { parse } from "yaml";
import readingTime from "reading-time";

import { addRoute, addChildPath } from "../store/store";
import { MatterContentItem, TopicItem } from "../types";
import { getExcerpt } from "../utils/getExcerpt";

export const parseGroupedDynamicLevel = async (split: string[]) => {
  const [folder, innerFolder, file] = split;

  if (file.startsWith("_")) {
    const routePathname = `/${folder}/${innerFolder}`;
    const routeChunkPath = `${folder}.${innerFolder}`;

    const content = await readFile(
      path.resolve("src", `./routes/${folder}/${innerFolder}/${file}`),
      "utf8"
    );

    const matter = parse(content) as TopicItem;

    matter.pathname = routePathname;

    const route = {
      pathname: routePathname,
      chunkPath: `/assets/${routeChunkPath}.mjs`,
    };
    const input = {
      source: "",
      template: `./routes/${folder}/${folder}_.$topic.tsx`,
    };
    const output = {
      cjs: `dist/server/${routeChunkPath}.cjs`,
      mjs: `dist/client/assets/${routeChunkPath}.mjs`,
      html: `dist/client${routePathname}.html`,
    };

    addRoute(route.pathname, {
      route,
      input,
      output,
      matter,
    });
    return;
  }

  const fileExt = path.extname(file);
  const fileWithout = file.replace(fileExt, "");
  const fileAsPath = fileWithout.replaceAll(".", "/");

  if (fileExt === ".mdx") {
    const content = await read(
      path.resolve(`src/routes/${folder}/${innerFolder}/${file}`)
    );

    getMatter(content, { strip: true });

    const {
      data: { matter },
    } = content as unknown as MatterContentItem;

    if (!matter.isDraft) {
      const parentPathname = `/${folder}/${innerFolder}`;
      const routePathname = `/${folder}/${innerFolder}/${fileAsPath}`;
      const routeChunkPath = `${folder}.${innerFolder}.${fileWithout}`;

      addChildPath(`/${folder}`, parentPathname);
      addChildPath(parentPathname, routePathname);

      const route = {
        pathname: routePathname,
        chunkPath: `/assets/${routeChunkPath}.mjs`,
        parentPathname,
      };
      const input = {
        source: `./routes/${folder}/${innerFolder}/${file}`,
        template: `./routes/${folder}/${folder}_.$topic.$chapter.tsx`,
      };
      const output = {
        cjs: `dist/server/${routeChunkPath}.cjs`,
        mjs: `dist/client/assets/${routeChunkPath}.mjs`,
        html: `dist/client${routePathname}.html`,
      };

      matter.pathname = route.pathname;
      matter.readTime = readingTime(String(content)).text;
      matter.excerpt = await getExcerpt(String(content));

      addRoute(route.pathname, {
        route,
        input,
        output,
        matter,
      });
    }
    return;
  }

  const routePathname = `/${folder}/${innerFolder}/${fileAsPath}`;
  const routeChunkPath = `${folder}.${innerFolder}.${fileWithout}`;

  const route = {
    pathname: routePathname,
    chunkPath: `/assets/${routeChunkPath}.mjs`,
  };
  const input = {
    source: `./routes/${folder}/${innerFolder}/${file}`,
    template: `./routes/${folder}/${folder}_.$topic.$chapter.tsx`,
  };
  const output = {
    cjs: `dist/server/${routeChunkPath}.cjs`,
    mjs: `dist/client/assets/${routeChunkPath}.mjs`,
    html: `dist/client${routePathname}.html`,
  };

  addRoute(route.pathname, {
    route,
    input,
    output,
  });
};
