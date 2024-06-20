import { parseRoutes } from './parse/parse';
import { transformData } from './transform/transform';
import { buildClientFiles } from './build/build.client';
import { buildServerFiles } from './build/build.server';
import { buildRssFeed } from './build/build.rss';
import { buildSitemap } from './build/build.sitemap';
import { buildRobotsTxt } from './build/build.robotsTxt';

await parseRoutes();

transformData();

await buildClientFiles();

await buildServerFiles();

await buildRssFeed();

await buildSitemap();

await buildRobotsTxt();
