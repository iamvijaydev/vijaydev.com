import type { ContentItem, ContentItemDetailed } from '~types';

export interface BlogState {
  featured: ContentItem[];
  list: ContentItemDetailed[];
}

export const getBlogState = (): BlogState => ({
  featured: [],
  list: [],
});
