import * as esbuild from 'esbuild';

import { getTopics, getFeaturedChapters } from './store.learn.mjs';
import { addImport } from '../store.importmap.mjs';
import { pushHtmlScript } from '../store.buildHtml.mjs';
import { baseClientBuildConfig, baseServerBuildConfig } from '../config.esbuild.mjs';

export const generateLearnScripts = async () => {
  const allProps = {
    topicData: Array.from(getTopics()).map(({
      slug,
      title,
      description,
      image,
      lastUpdated,
    }) => ({
      slug,
      title,
      description,
      image,
      lastUpdated,
    })),
    featuredData: getFeaturedChapters()
  };

  addImport('/learn', '/assets/mjs/learn.mjs');

  await esbuild.build({
    ...baseClientBuildConfig,
    stdin: {
      contents: `import { PageComponent as BaseComponent } from './islands/pages/learn/client.tsx';
      export { metaProps } from './islands/pages/learn/client.tsx';

      const parsed = JSON.parse('${JSON.stringify(allProps)}');

      export const PageComponent = () => {
        return <BaseComponent topicData={parsed.topicData} featuredData={parsed.featuredData} />
      };
      `,
      resolveDir: './src',
      sourcefile: 'learn.mjs',
      loader: 'tsx',
    },
    outfile: 'dist/assets/mjs/learn.mjs',
  });

  await esbuild.build({
    ...baseServerBuildConfig,
    stdin: {
      contents: `import { makeServerPage } from './islands/pages/learn/server.tsx';

      const parsed = JSON.parse('${JSON.stringify(allProps)}');

      makeServerPage(parsed);
      `,
      resolveDir: './src',
      sourcefile: 'learn.mjs',
      loader: 'tsx',
    },
    outfile: '.tmp/learn.cjs',
  });

  pushHtmlScript('learn.cjs');
}