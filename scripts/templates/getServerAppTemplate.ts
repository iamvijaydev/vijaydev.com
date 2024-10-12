import { Imports, PostData } from "../types";

export type ServerAppTemplateProps = {
  clientInputMjs: string;
  imports: Imports;
  technical: PostData;
  fiction: PostData;
  outputHtml: string;
  pathname: string;
};

export const getServerAppTemplate = ({
  clientInputMjs,
  imports,
  technical,
  fiction,
  outputHtml,
  pathname,
}: ServerAppTemplateProps) => {
  function replacer(key: string, value: unknown) {
    if (value instanceof Map) {
      return {
        dataType: "Map",
        value: Array.from(value.entries()),
      };
    } else {
      return value;
    }
  }
  const importsStr = JSON.stringify(imports, replacer);
  const technicalStr = JSON.stringify(technical, replacer);
  const fictionStr = JSON.stringify(fiction, replacer);

  return `import { outputFile } from 'fs-extra';
import { resolve } from 'node:path';

import * as route from './${clientInputMjs}';
import { Layout } from './app/components/Layout.tsx';
import { render } from './app/entry.server.tsx';

function reviver(key: string, value) {
  if(typeof value === 'object' && value !== null) {
    if (value.dataType === 'Map') {
      return new Map(value.value);
    }
  }
  return value;
}

const appData = {
  imports: JSON.parse('${importsStr}', reviver),
  technical: JSON.parse('${technicalStr}', reviver),
  fiction: JSON.parse('${fictionStr}', reviver),
  meta: route.meta || [],
  links: route.links || [],
  Outlet: route.RouteComponent,
  pathname: '${pathname}',
};

if (route.layoutType) appData.layoutType = route.layoutType;

const html = render(appData);

outputFile(resolve(process.cwd(), './${outputHtml}'), html);
`;
};
