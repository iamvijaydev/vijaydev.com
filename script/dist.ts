import { parseRoutes } from './parse/parse';
import { getBlogData, getLearnData } from './store/store.dataMap';
import { getRoutes } from './store/store.resourceMap';
import { transformData } from './transform/transform';

await parseRoutes();

transformData();

console.log('route: \n', getRoutes());
console.log('blogs: \m', getBlogData());
console.log('learn: \n', getLearnData());