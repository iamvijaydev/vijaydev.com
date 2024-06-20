import type { ContentItem, ContentItemDetailed } from '~types';

export interface BlogState {
  featured: ContentItem[];
  list: ContentItemDetailed[];
}

export const getBlogState = ({
  featured,
  list,
}: Partial<BlogState>): BlogState => ({
  featured: featured || [],
  list: list || [],
});
