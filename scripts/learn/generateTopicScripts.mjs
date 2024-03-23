import * as esbuild from 'esbuild';

import { getTopics } from './store.learn.mjs';
import { addImport } from '../store.importmap.mjs';
import { pushHtmlScript } from '../store.buildHtml.mjs';
import { baseClientBuildConfig, baseServerBuildConfig } from '../config.esbuild.mjs';

export const generateTopicScripts = async () => {
  for await (const topic of getTopics()) {
    const {
      slug,
      title,
      description,
      meta,
      image,
      lastUpdated,
      chapters
    } = topic;

    if (!chapters.length) {
      continue;
    }

    if (!meta) {
      throw new Error(`Topic "${slug}" is missing introduction.yml file`);
    }

    const pathname = `/learn/${slug}`;
    const permalink = `${pathname}.html`;

    addImport(pathname, `/assets/mjs/${slug}.mjs`);

    const allProps = {
      metaProps: {
        pathname,
        permalink,
        title: meta.title,
        description: meta.description,
        image,
      },
      topicData: {
        slug,
        title,
        description,
        image,
        chapters,
        lastUpdated
      }
    };

    await esbuild.build({
      ...baseClientBuildConfig,
      stdin: {
        contents: `import { PageComponent as BaseComponent } from './islands/pages/learn/[topic]/client.tsx';

        const parsed = JSON.parse('${JSON.stringify(allProps)}');

        export const metaProps = {
          ...parsed.metaProps,
        };

        export const PageComponent = () => {
          return <BaseComponent topicData={parsed.topicData} />
        };
        `,
        resolveDir: './src',
        sourcefile: `${slug}.mjs`,
        loader: 'tsx',
      },
      outfile: `dist/assets/mjs/${topic.slug}.mjs`,
    });

    await esbuild.build({
      ...baseServerBuildConfig,
      stdin: {
        contents: `import { makeServerPage } from './islands/pages/learn/[topic]/server.tsx';
  
        const parsed = JSON.parse('${JSON.stringify(allProps)}');
  
        makeServerPage({ metaProps: parsed.metaProps, topicData: parsed.topicData });
        `,
        resolveDir: './src',
        sourcefile: `${slug}.mjs`,
        loader: 'tsx',
      },
      outfile: `.tmp/learn/${slug}.cjs`,
    });

    pushHtmlScript(`learn/${slug}.cjs`);
  }
}