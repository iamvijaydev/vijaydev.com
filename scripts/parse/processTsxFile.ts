import { InternalRouteData } from "../types";

export const processTsxFile = (
  ext: string,
  fileName: string,
  parts: string[],
  base: string
): InternalRouteData | undefined => {
  if (ext !== ".tsx" || fileName.endsWith('_.$name.tsx')) {
    return;
  }

  const onlyFileName = fileName.replace(ext, "");

  const parentPathname = parts.length ? parts.join("/") : "";
  const routePathname =
    (parentPathname.length ? "" : parentPathname + "/") +
    onlyFileName.replaceAll(".", "/");

  return {
    route: {
      pathname: `/${routePathname}`,
      chunkPath: `/assets/${onlyFileName}.mjs`,
    },
    input: {
      source: `./${base}${parentPathname}${fileName}`,
    },
    output: {
      cjs: `dist/server/${onlyFileName}.cjs`,
      mjs: `dist/client/assets/${onlyFileName}.mjs`,
      html: `dist/client/${routePathname}.html`,
    },
  };
};
