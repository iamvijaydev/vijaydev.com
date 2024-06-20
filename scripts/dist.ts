import { parseRoutes } from './parse/parse';
import { transformData } from './transform/transform';
import { buildClientFiles } from './build/build.client';

await parseRoutes();

transformData();

await buildClientFiles();
