import * as esbuild from "esbuild";
import mdx from "@mdx-js/esbuild";

import { AppProps, ContentItemDetailed } from "../types";
import { baseClientBuildConfig, mdxPlugins } from "./build.config";
import {
  getRoutes,
  getImports,
  getBlogData,
  getLearnData,
} from "../store/store";
import { getMainTemplate } from "../templates/getMainTemplate";
import { getContentItemTemplate } from "../templates/getContentItemTemplate";
import { getContentListingTemplate } from "../templates/getContentListingTemplate";

export const buildClientFiles = async () => {
  console.time("client mjs files built");

  const appData: AppProps = {
    imports: getImports(),
    blogs: getBlogData(),
    learn: getLearnData(),
  };
  function replacer(key: string, value: unknown) {
    if (value instanceof Map) {
      return {
        dataType: "Map",
        value: Array.from(value.entries()),
      };
    } else {
      return value;
    }
  }
  const asStr = JSON.stringify(appData, replacer);

  await esbuild.build({
    ...baseClientBuildConfig,
    stdin: {
      contents: getMainTemplate(asStr),
      resolveDir: "./src",
      loader: "tsx",
    },
    outfile: "dist/client/assets/main.mjs",
  });

  for await (const route of getRoutes<ContentItemDetailed>().values()) {
    if (!route.input.template) {
      await esbuild.build({
        ...baseClientBuildConfig,
        entryPoints: [route.input.source],
        entryNames: "[name]",
        outfile: route.output.mjs,
      });
      continue;
    }

    if (route.input.source === "" && route.input.template) {
      await esbuild.build({
        ...baseClientBuildConfig,
        stdin: {
          contents: getContentListingTemplate({
            template: route.input.template,
            title: route.matter!.title,
            description: route.matter!.description,
            pathname: route.route.pathname,
          }),
          resolveDir: "./src",
          loader: "tsx",
        },
        outfile: route.output.mjs,
      });
      continue;
    }

    await esbuild.build({
      ...baseClientBuildConfig,
      stdin: {
        contents: getContentItemTemplate({
          source: route.input.source,
          template: route.input.template,
          title: route.matter!.title,
          pathname: route.route.pathname,
          parentPathname: route.route.parentPathname!,
        }),
        resolveDir: "./src",
        loader: "tsx",
      },
      outfile: route.output.mjs,
      plugins: [mdx(mdxPlugins)],
    });
  }

  console.timeEnd("client mjs files built");
};
