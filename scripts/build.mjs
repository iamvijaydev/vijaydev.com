import { outputFile } from "fs-extra";
import { clearBeforeBuild, clearAfterBuild } from "./clear.dir.mjs";
import { buildLearn } from './learn/build.learn.mjs';
import { buildPages } from './pages/build.pages.mjs';
import { getString } from './store.importmap.mjs';
import { getAllHtmlScripts } from './store.buildHtml.mjs';
import shelljs from 'shelljs';

console.time('Build completed in');

await clearBeforeBuild();

await buildLearn();

await buildPages();

shelljs.env['importmap'] = getString();

getAllHtmlScripts().forEach(
  file => shelljs.exec(
    `node .tmp/${file}`
  )
);

await clearAfterBuild();

console.timeEnd('Build completed in');