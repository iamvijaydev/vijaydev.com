import { parseDynamicDir } from './parseDynamicDir.mjs';
import { generateChapterScripts } from './generateChapterScripts.mjs';
import { generateTopicScripts } from './generateTopicScripts.mjs';
import { generateLearnScripts } from './generateLearnScripts.mjs';

export const buildLearn = async () => {
  await parseDynamicDir();

  await generateChapterScripts();
  await generateTopicScripts();

  await generateLearnScripts();
}
