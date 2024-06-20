export const getMainTemplate = (appDataStr: string) =>
`export * from './main.ts';
import { makeHydrate } from './main.ts';

function reviver(key: string, value) {
  if(typeof value === 'object' && value !== null) {
    if (value.dataType === 'Map') {
      return new Map(value.value);
    }
  }
  return value;
}

const appData = JSON.parse('${appDataStr}', reviver);

export const hydrate = makeHydrate(appData);
`;
