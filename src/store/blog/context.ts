import { createContext } from "react";
import { type BlogStore } from "./store";
import { useValidContext } from "~hooks/useValidContent";

export const BlogContext = createContext<BlogStore | undefined>(undefined);

export const useBlogContext = (): BlogStore => useValidContext(BlogContext);