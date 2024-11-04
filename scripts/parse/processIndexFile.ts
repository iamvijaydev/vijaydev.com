import { InternalRouteData } from "../types";

export const processIndexFile = (
  base: string,
  parts: string[],
  fileName: string
): InternalRouteData | undefined => {
  if (fileName !== "_index.tsx") {
    return;
  }

  const joinedPath = parts.join("/");
  const parent = parts.pop();

  const routePathname = parent ? joinedPath : "home";
  const outputName = parent ?? "home";

  return {
    route: {
      pathname: `/${routePathname}`,
      chunkPath: `/assets/${outputName}.mjs`,
    },
    input: {
      source: `./${base}${parent ? routePathname + '/' + fileName : fileName}`,
    },
    output: {
      cjs: `dist/server/${outputName}.cjs`,
      mjs: `dist/client/assets/${outputName}.mjs`,
      html: `dist/client/${routePathname === 'home' ? 'index' : routePathname}.html`,
    },
  };
};