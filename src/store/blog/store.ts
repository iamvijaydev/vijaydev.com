import { useState } from "react";
import { type BlogState, getBlogState } from "./state";

export interface BlogStore {
  state: BlogState;
  update: (data: Partial<BlogState>) => void;
}

export const useBlogStore = (): BlogStore => {
  const [state, setState] = useState<BlogState>(getBlogState());

  const update = (data: Partial<BlogState>) => {
    setState((prev) => ({ ...prev, ...data }));
  };

  return {
    state,
    update,
  };
};
