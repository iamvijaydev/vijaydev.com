import path from "node:path";
import { read } from "to-vfile";
import { matter as getMatter } from "vfile-matter";
import readingTime from "reading-time";

import { addRoute, addChildPath } from "../store/store";
import { MatterContentItem } from "../types";
import { getExcerpt } from '../utils/getExcerpt';

export const parseDynamicLevel = async (split: string[]) => {
  const [folder, file] = split;

  if (file.startsWith("_")) {
    const routePathname = `/${folder}`;
    const routeChunkPath = `${folder}`;

    const route = {
      pathname: routePathname,
      chunkPath: `/assets/${routeChunkPath}.mjs`,
    };
    const input = {
      source: `./app/routes/${folder}/${file}`,
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
    return;
  }

  const fileExt = path.extname(file);
  const fileWithout = file.replace(fileExt, "");
  const fileAsPath = fileWithout.replaceAll(".", "/");

  if (fileExt === ".mdx") {
    const content = await read(path.resolve(`app/routes/${folder}/${file}`));

    getMatter(content, { strip: true });

    const {
      data: { matter },
    } = content as unknown as MatterContentItem;

    if (!matter.isDraft) {
      const parentPathname = `/${folder}`;
      const routePathname = `/${folder}/${fileAsPath}`;
      const routeChunkPath = `${folder}.${fileWithout}`;

      addChildPath(parentPathname, routePathname);

      const route = {
        pathname: routePathname,
        chunkPath: `/assets/${routeChunkPath}.mjs`,
        parentPathname,
      };
      const input = {
        source: `./routes/${folder}/${file}`,
        template: `./routes/${folder}/${folder}_.$name.tsx`,
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
      return;
    }
  }

  const routePathname = `/${folder}/${fileAsPath}`;
  const routeChunkPath = `${folder}.${fileWithout}`;

  const route = {
    pathname: routePathname,
    chunkPath: `/assets/${routeChunkPath}.mjs`,
  };
  const input = {
    source: `./app/routes/${folder}/${file}`,
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
