import type { ContentItem, ContentItemDetailed } from '~types';

export interface PostState {
  featured: ContentItem[];
  list: ContentItemDetailed[];
}

export const getPostState = ({
  featured,
  list,
}: Partial<PostState>): PostState => ({
  featured: featured || [],
  list: list || [],
});
