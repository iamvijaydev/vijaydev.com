import * as esbuild from "esbuild";
import mdx from "@mdx-js/esbuild";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import withSlugs from "rehype-slug";
import withToc from "@stefanprobst/rehype-extract-toc";
import withTocExport from "@stefanprobst/rehype-extract-toc/mdx";
import { remarkCodeHike } from "@code-hike/mdx";
import shelljs from 'shelljs';

import {
  getRoutes,
  getImports,
  getBlogData,
  getLearnData,
} from "../store/store";
import { baseServerBuildConfig } from "./build.config";
import { getServerAppTemplate } from '../templates/getServerAppTemplate';

export const buildServerFiles = async () => {
  console.time(`server cjs files built`);

  for await (const route of getRoutes().values()) {
    await esbuild.build({
      ...baseServerBuildConfig,
      stdin: {
        contents: getServerAppTemplate({
          clientInputMjs: route.output.mjs,
          imports: getImports(),
          blogs: getBlogData(),
          learn: getLearnData(),
          outputHtml: route.output.html,
        }),
        resolveDir: ".",
        loader: "tsx",
      },
      outfile: route.output.cjs,
      plugins: [
        mdx({
          remarkPlugins: [
            remarkFrontmatter,
            [remarkMdxFrontmatter, { name: "matter" }],
            [
              remarkCodeHike,
              {
                theme: "material-from-css",
                showCopyButton: true,
                autoLink: true,
                lineNumbers: true,
              },
            ],
          ],
          rehypePlugins: [withSlugs, withToc, withTocExport],
        }),
      ],
      logLevel: 'silent'
    });
  }

  console.timeEnd(`server cjs files built`);

  console.time(`server html files built`);

  for await (const route of getRoutes().values()) {
    shelljs.exec(
      `node ./${route.output.cjs}`
    )
  }

  console.timeEnd(`server html files built`);
}