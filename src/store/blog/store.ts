import { useState } from "react";
import { type BlogState, getBlogState } from "./state";

export interface BlogStore {
  state: BlogState;
  update: (data: Partial<BlogState>) => void;
}

export const useBlogStore = (data: Partial<BlogState>): BlogStore => {
  const [state, setState] = useState<BlogState>(getBlogState(data));

  const update = (data: Partial<BlogState>) => {
    setState((prev) => ({ ...prev, ...data }));
  };

  return {
    state,
    update,
  };
};
