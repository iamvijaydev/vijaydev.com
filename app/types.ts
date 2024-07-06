export type MetaLink = {
  href: string;
  rel: string;
  crossOrigin?: boolean
};

export type Meta = {
  name: string;
  content: string;
  pageContent?: string;
};

export type { Imports } from './store/htmlHead/state';

/* */

export interface RelatedContent {
  title: string;
  pathname: string;
  isRetired?: boolean;
}

export interface ContentItem {
  pathname: string;
  title: string;
  description: string;
  image?: string;
}

export interface ContentItemDetailed extends ContentItem {
  excerpt: string;
  published: number[];
  updated?: number[];
  categories?: string[];
  isDraft?: boolean;
  isFeatured?: boolean;
  isArchived?: boolean;
  readTime: string;
  next?: RelatedContent;
  prev?: RelatedContent;
}

export type { BlogState as BlogData } from './store/blog/state';

/* */

export interface ChapterItem extends ContentItemDetailed {
  order: number;
  topic: RelatedContent;
}

export interface TopicItem {
  pathname: string;
  title: string;
  description: string;
  image?: string;
  isFeatured?: boolean;
  isRetired?: boolean;
}

export interface TopicItemFeatured extends TopicItem {
  chapterCount: number;
  chapters: ChapterItem[];
}

export type TopicList = {
  matter: TopicItem;
  chapters: ChapterItem[];
}

export type { LearnState as LearnData } from './store/learn/state';

/* */

export type { AppProps } from './App';