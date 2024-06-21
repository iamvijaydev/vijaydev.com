import path from "node:path";
import { addRoute } from "../store/store";

export const parseTopLevel = (split: string[]) => {
  const [file] = split;

  if (file.startsWith("_")) {
    const routePathname = "/home";
    const routeChunkPath = "home";

    const route = {
      pathname: routePathname,
      chunkPath: `/assets/${routeChunkPath}.mjs`,
    };
    const input = {
      source: `./app/routes/${file}`,
    };
    const output = {
      cjs: `dist/server/${routeChunkPath}.cjs`,
      mjs: `dist/client/assets/${routeChunkPath}.mjs`,
      html: `dist/client/index.html`,
    };

    addRoute(route.pathname, {
      route,
      input,
      output,
    });
    return;
  }

  const fileWithout = file.replace(path.extname(file), "");
  const fileAsPath = fileWithout.replaceAll(".", "/");
  const routePathname = `/${fileAsPath}`;
  const routeChunkPath = fileWithout;

  const route = {
    pathname: routePathname,
    chunkPath: `/assets/${routeChunkPath}.mjs`,
  };
  const input = {
    source: `./app/routes/${file}`,
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
