import { Glob } from "glob";
import path from "node:path";

import { parseTopLevel } from './parse.topLevel';
import { parseDynamicLevel } from './parse.dynamicLevel';
import { parseGroupedDynamicLevel } from './parse.groupedDynamicLevel';
import { addRoute } from "../store/store";

export const parseRoutes = async () => {
  const files = new Glob("app/routes/**/*", {
    nodir: true,
    ignore: ['**/learn/**', '**/components/**']
  });

  for await (const fullPath of files) {
    if (fullPath.indexOf("_.") > -1) {
      continue;
    }

    const inner = fullPath.replace("app/routes/", "");

    const split = inner.split("/");

    let source = '';
    let pathname = '';
    let chunkPath = '';
    split.forEach((fragment) => {
      source += '/' + fragment;
      chunkPath = fragment.replace(path.extname(fragment), "");
      pathname += '/' + chunkPath.replaceAll(".", "/");
    });

    if (pathname === '_index') {
    }

    addRoute(pathname, {
      route: {
        pathname: `/${pathname}`,
        chunkPath: `/assets/${chunkPath}.mjs`
      },
      input: {
        source: `./app/routes/${source}`
      },
      output: {
        cjs: `dist/server/${pathname}.cjs`,
        mjs: `dist/client/assets/${chunkPath}.mjs`,
        html: `dist/client/${pathname}.html`,
      }
    });

    const [fileOrFolder, innerFileOrFolder, /*file*/] = split;

    // third level routes
    // if (file) {
    //   await parseGroupedDynamicLevel(split);
    //   continue;
    // }

    // 1) top level routes with _index inside folder
    // 2) second level or artificial multi level routes inside folder
    if (innerFileOrFolder) {
      await parseDynamicLevel(split);
      continue;
    }

    // top level routes with direct files
    if (fileOrFolder) {
      parseTopLevel(split);
      continue;
    }
  }
};
