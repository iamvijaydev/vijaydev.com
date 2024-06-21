import type { TopicItemFeatured, TopicList } from '~types';

export interface LearnState {
  featured: TopicItemFeatured[];
  list: Map<string, TopicList>;
}

export const getLearnState = ({
  featured,
  list,
}: Partial<LearnState>): LearnState => ({
  featured: featured || [],
  list: list || new Map(),
});
