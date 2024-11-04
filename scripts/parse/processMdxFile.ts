import path from "node:path";
import { read } from "to-vfile";
import { matter as getMatter } from "vfile-matter";
import readingTime from "reading-time";

import { MatterContentItem, ContentItemDetailed, InternalRouteData } from "../types";
import { getExcerpt } from "../utils/getExcerpt";

export const processMdxFile = async (
  ext: string,
  fileName: string,
  parts: string[],
  base: string
): Promise<[string, InternalRouteData<ContentItemDetailed>] | undefined> => {
  if (ext !== ".mdx") {
    return;
  }

  const onlyFileName = fileName.replace(ext, "");

  const parentPathname = parts.join("/");

  const filePathname = `${parentPathname}/${fileName}`;
  const routePathname = `${parentPathname}/${onlyFileName.replaceAll('.', '/')}`;
  const parent = parts.pop();

  const content = await read(path.resolve(base + filePathname));

  getMatter(content, { strip: true });

  const {
    data: { matter },
  } = content as unknown as MatterContentItem;

  if (matter.isDraft) {
    return;
  }

  matter.pathname = `/${routePathname}`;
  matter.readTime = readingTime(String(content)).text;
  matter.excerpt = getExcerpt(String(content));

  return [`/${parentPathname}`, {
    route: {
      pathname: `/${routePathname}`,
      chunkPath: `/assets/${onlyFileName}.mjs`,
    },
    input: {
      source: `./${base}${filePathname}`,
      template: `./${base}${parentPathname}/${parent}_.$name.tsx`,
    },
    output: {
      cjs: `dist/server/${onlyFileName}.cjs`,
      mjs: `dist/client/assets/${onlyFileName}.mjs`,
      html: `dist/client/${routePathname}.html`,
    },
    matter,
  }];
};
