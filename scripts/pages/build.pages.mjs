import { Glob } from 'glob';
import * as esbuild from 'esbuild';
import { addImport } from '../store.importmap.mjs';
import { pushHtmlScript } from '../store.buildHtml.mjs';
import { camelCaseToSlug } from '../utils.mjs';
import { baseClientBuildConfig, baseServerBuildConfig } from '../config.esbuild.mjs';

export const buildPages = async () => {
  const clientEntryPoints = [];
  const serverEntryPoints = [];

  const entries = new Glob('src/islands/pages/**/**.tsx', {
    ignore: ['**/features/**', '**/learn/**'],
    nodir: true
  });

  for await (const file of entries) {
    const clean = file.replace('src/islands/pages/', '').replace('.tsx', '');
    const paths = clean.split('/');
    const fileName = paths.pop();
    let pathname = camelCaseToSlug(paths.pop());

    if (fileName === 'client') {
      clientEntryPoints.push({
        in: file,
        out: pathname
      });
      addImport(`/${pathname}`, `/assets/mjs/${pathname}.mjs`);
    }

    if (fileName === 'server') {
      serverEntryPoints.push({
        in: file,
        out: pathname
      });
      pushHtmlScript(`${pathname}.cjs`);
    }
  }

  await esbuild.build({
    ...baseClientBuildConfig,
    entryPoints: clientEntryPoints,
    outdir: 'dist/assets/mjs',
  });

  addImport('main', '/assets/mjs/main.mjs');
  await esbuild.build({
    ...baseClientBuildConfig,
    entryPoints: ['src/main.tsx'],
    entryNames: '[name]',
    outdir: 'dist/assets/mjs',
  });

  await esbuild.build({
    ...baseServerBuildConfig,
    entryPoints: serverEntryPoints,
    outdir: '.tmp',
  })
}