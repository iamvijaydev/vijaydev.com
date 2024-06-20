import { ParsedStore, Imports, BlogData, LearnData } from "../types";

const devImports: Imports = {
  react: "https://esm.sh/react@18.2.0?dev",
  "react/jsx-runtime": "https://esm.sh/react@18.2.0/jsx-runtime?dev",
  "react-dom": "https://esm.sh/react-dom@18.2.0?dev",
  "react-dom/client": "https://esm.sh/react-dom@18.2.0/client?dev",
  "main": "/assets/main.mjs",
};

const prodImports: Imports = {
  react: "https://esm.sh/react@18.2.0",
  "react/jsx-runtime": "https://esm.sh/react@18.2.0/jsx-runtime",
  "react-dom": "https://esm.sh/react-dom@18.2.0",
  "react-dom/client": "https://esm.sh/react-dom@18.2.0/client",
  "main": "/assets/main.mjs",
};

const store: ParsedStore = {
  imports: {
    ...(process.env.NODE_ENV === "development" ? devImports : prodImports),
  },
  blogs: {
    featured: [],
    list: [],
  },
  learn: {
    featured: [],
    list: new Map(),
  },
};

export const addImports = (pathname: string, chunkPath: string) => {
  store.imports[pathname] = chunkPath;
};

export const setBlogs = (blogs: BlogData) => {
  store.blogs = blogs;
};

export const setLearn = (learn: LearnData) => {
  store.learn = learn;
};

export const getImports = () => store.imports;

export const getBlogData = () => store.blogs;

export const getLearnData = () => store.learn;