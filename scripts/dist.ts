import { parseRoutes } from './parse/parse';
import { transformData } from './transform/transform';
import { buildClientFiles } from './build/build.client';
import { buildServerFiles } from './build/build.server';

await parseRoutes();

transformData();

await buildClientFiles();

await buildServerFiles();
