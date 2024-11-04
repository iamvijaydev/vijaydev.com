import { Glob } from "glob";

import { processRouteFile } from "./processRouteFile";
import { addRoute, addChildPath, getRoutes } from "../store/store";

export const parseRoutes = async () => {
  const files = new Glob("app/routes/**/*", {
    nodir: true,
    ignore: ["**/learn/**", "**/components/**"],
  });

  for await (const fullPath of files) {
    if (fullPath.indexOf("_.") > -1) {
      continue;
    }

    
    const result = await processRouteFile(fullPath);
    
    if (!result) {
      continue;
    }
    
    
    const [parentPathname, data] = result;

    if (parentPathname.length) {
      console.log('parentPathname', parentPathname)

      addChildPath(parentPathname, data.route.pathname);
    }
    addRoute(data.route.pathname, data);

    // const inner = fullPath.replace("app/routes/", "");

    // const split = inner.split("/");

    // const [fileOrFolder, innerFileOrFolder /*file*/] = split;

    // // third level routes
    // // if (file) {
    // //   await parseGroupedDynamicLevel(split);
    // //   continue;
    // // }

    // // 1) top level routes with _index inside folder
    // // 2) second level or artificial multi level routes inside folder
    // if (innerFileOrFolder) {
    //   await parseDynamicLevel(split);
    //   continue;
    // }

    // // top level routes with direct files
    // if (fileOrFolder) {
    //   parseTopLevel(split);
    //   continue;
    // }
  }
};
