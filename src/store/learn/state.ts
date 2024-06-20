import type { TopicItemFeatured, TopicList } from '~types';

export interface LearnState {
  featured: TopicItemFeatured[];
  list: Map<string, TopicList>;
}

export const getLearnState = (): LearnState => ({
  featured: [],
  list: new Map(),
});
