import { BuildOptions } from 'esbuild';
import CompileOptions from '@mdx-js/esbuild';
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import withSlugs from "rehype-slug";
import withToc from "@stefanprobst/rehype-extract-toc";
import withTocExport from "@stefanprobst/rehype-extract-toc/mdx";
import { remarkCodeHike } from "@code-hike/mdx";

const commonConfig: BuildOptions = {
  bundle: true,
  write: true,
  jsx: 'automatic',
  loader: { '.tsx': 'tsx' },
  jsxSideEffects: true,
}

export const baseClientBuildConfig: BuildOptions = {
  ...commonConfig,
  format: 'esm',
  outExtension: { '.js': '.mjs' },
  external: ['main', 'react', 'react-dom', 'react-dom/client'],
}

export const baseServerBuildConfig: BuildOptions = {
  ...commonConfig,
  format: 'cjs',
  outExtension: { '.js': '.cjs' },
  allowOverwrite: true,
  external: ['react', 'react-dom'],
  platform: 'node',
  minify: true,
}

export const mdxPlugins: Readonly<typeof CompileOptions> = {
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
}