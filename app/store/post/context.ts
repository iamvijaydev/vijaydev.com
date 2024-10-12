import { createContext } from "react";
import { type PostStore } from "./store";
import { useValidContext } from "~hooks/useValidContent";

export type PostContextType = {
  technical: PostStore;
  fiction: PostStore;
}

export const PostContext = createContext<PostContextType | undefined>(undefined);

export const usePostContext = (): PostContextType => useValidContext(PostContext);