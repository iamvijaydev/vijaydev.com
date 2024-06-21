import { Glob } from "glob";

import { parseTopLevel } from './parse.topLevel';
import { parseDynamicLevel } from './parse.dynamicLevel';
import { parseGroupedDynamicLevel } from './parse.groupedDynamicLevel';

export const parseRoutes = async () => {
  const files = new Glob("app/routes/**/*", {
    nodir: true,
  });

  for await (const fullPath of files) {
    if (fullPath.indexOf("_.") > -1) {
      continue;
    }

    const inner = fullPath.replace("app/routes/", "");

    const split = inner.split("/");
    const [fileOrFolder, innerFileOrFolder, file] = split;

    // third level routes
    if (file) {
      await parseGroupedDynamicLevel(split);
      continue;
    }

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

  // console.log(getRoutes().get('/about'));
};
