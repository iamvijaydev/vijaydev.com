import {
  Imports,
  BlogData,
  LearnData,
  ContentItemDetailed,
} from "../src/types";
export * from '../src/types';

export type MatterContentItem = {
  data: {
    matter: ContentItemDetailed;
  };
};

export type InternalRouteData<MatterType> = {
  route: {
    pathname: string;
    chunkPath: string;
    parentPathname?: string;
    childPathnames?: Set<string>;
  };
  input: {
    source: string;
    template?: string;
  };
  output: {
    cjs: string;
    mjs: string;
    html: string;
  };
  matter?: MatterType;
};

export type ParsedStore = {
  imports: Imports;
  blogs: BlogData;
  learn: LearnData;
};
