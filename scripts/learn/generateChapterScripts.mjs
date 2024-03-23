import * as esbuild from "esbuild";
import mdx from "@mdx-js/esbuild";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import withSlugs from "rehype-slug";
import withToc from "@stefanprobst/rehype-extract-toc";
import withTocExport from "@stefanprobst/rehype-extract-toc/mdx";
// import rehypeHighlight from 'rehype-highlight'
import { remarkCodeHike } from '@code-hike/mdx';

import { getChapters } from "./store.learn.mjs";
import { addImport } from "../store.importmap.mjs";
import { pushHtmlScript } from "../store.buildHtml.mjs";
import {
  baseClientBuildConfig,
  baseServerBuildConfig,
} from "../config.esbuild.mjs";

export const generateChapterScripts = async () => {
  for await (const chapter of getChapters()) {
    const {
      fullPath,
      title,
      description,
      image,
      robots,
      canonical,
      slug,
      year,
      month,
      toc,
      topic,
      prev,
      next,
    } = chapter;

    const pathname = `/learn/${topic.slug}/${slug}`;
    const permalink = `${pathname}.html`;

    addImport(pathname, `/assets/mjs/${slug}.mjs`);

    const allProps = {
      metaProps: {
        pathname,
        permalink,
        title,
        description,
        image,
        robots,
        canonical,
      },
      chapterData: {
        slug,
        year,
        month,
        title,
        description,
        image,
        toc,
        topic,
        canonical,
        prev,
        next,
      },
    };

    await esbuild.build({
      ...baseClientBuildConfig,
      stdin: {
        contents: `import ChapterComponent, { tableOfContents as toc } from '${fullPath.replace(
          "src/",
          "./"
        )}';
        import { PageComponent as BaseComponent } from './islands/pages/learn/[topic]/[chapter].client.tsx';

        const parsed = JSON.parse('${JSON.stringify(allProps)}');

        export const metaProps = {
          ...parsed.metaProps,
        };

        export const PageComponent = () => {
          return <BaseComponent chapterData={parsed.chapterData} Component={ChapterComponent} tableOfContents={toc} />
        };

        export const tableOfContents = toc;
        `,
        resolveDir: "./src",
        sourcefile: `${slug}.mjs`,
        loader: "tsx",
      },
      outfile: `dist/assets/mjs/${slug}.mjs`,
      plugins: [
        mdx({
          remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter, remarkCodeHike],
          rehypePlugins: [withSlugs, withToc, withTocExport],
        }),
      ],
    });

    await esbuild.build({
      ...baseServerBuildConfig,
      stdin: {
        contents: `import Component, { tableOfContents } from '${fullPath.replace("src/", "./")}';
      import { makeServerPage } from './islands/pages/learn/[topic]/[chapter].server.tsx';

      const parsed = JSON.parse('${JSON.stringify(allProps)}');

      makeServerPage({ metaProps: parsed.metaProps, chapterData: parsed.chapterData, tableOfContents, Component });
      `,
        resolveDir: "./src",
        sourcefile: `${slug}.mjs`,
        loader: "tsx",
      },
      outfile: `.tmp/learn/${slug}.cjs`,
      plugins: [
        mdx({
          remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter, remarkCodeHike],
          rehypePlugins: [withSlugs, withToc, withTocExport],
        }),
      ],
    });

    pushHtmlScript(`learn/${slug}.cjs`);
  }
};
