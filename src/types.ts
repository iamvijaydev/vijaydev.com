import type { MDXProps } from 'mdx/types';
import type { TocEntry } from '@stefanprobst/rehype-extract-toc'

export type TOC = {
  label: string;
  link: string;
  isActive: boolean;
}

export interface MetaProps {
  pathname: string;
  permalink: string;
  title: string;
  description: string;
  image?: string;
  robots?: string;
  canonical?: {
    slug: string;
    title: string;
    permalink: string;
  };
}

export interface BaseChapterData {
  slug: string;
  year: number;
  month: number;
  title: string;
  description: string;
  image?: string;
  topic: {
    slug: string;
    title: string;
  },
}

export interface ChapterData extends BaseChapterData {
  toc?: TOC[];
  canonical?: {
    slug: string;
    title: string;
  };
  prev?: {
    slug: string;
    title: string;
  };
  next?: {
    slug: string;
    title: string;
  };
}

export interface BaseTopicData {
  slug: string;
  title: string;
  description: string;
  image?: string;
  lastUpdated: string;
}

export interface TopicData extends BaseTopicData {
  chapters: {
    slug: string;
    title: string;
    description: string;
    image?: string;
    order: number;
  }[];
}

export type PostComponent = (props: MDXProps) => JSX.Element

export interface TopicPageProps {
  metaProps: MetaProps;
  topicData: TopicData;
  Component: (props: MDXProps) => JSX.Element;
}

export interface ChapterPageProps {
  metaProps: MetaProps;
  chapterData: ChapterData;
  tableOfContents?: TocEntry[];
  Component: (props: MDXProps) => JSX.Element;
}

export interface MakeServerInitProps {
  metaProps: MetaProps;
  PageComponent: PostComponent;
  tableOfContents?: TocEntry[];
}

export interface BuildHtmlWrapperProps {
  metaProps: MetaProps;
  tableOfContents?: TocEntry[];
  body: string;
  header: string;
  footer: string;
}

export interface HydrateHeaderFooterProps {
  pathname: string;
  title: string;
  tableOfContents?: TocEntry[];
}

export interface LearnPageProps {
  topicData: BaseTopicData[];
  featuredData: BaseChapterData[];
}

type HistoryChangeData = {
  pathname: string;
  search: string;
}
export type HistoryChangeEventData = {
  from: HistoryChangeData;
  to: HistoryChangeData;
}

export type PageChangeEventData = {
  type: string;
}

export type MetaPropsAndTocEventData = {
  metaProps: MetaProps;
  tableOfContents?: TocEntry[];
}

export type ThemeType = 'light' | 'dark';

export type ThemeChangeEventData = {
  current: ThemeType;
}

export type PageMaskEventData = {
  isVisible: boolean;
}
