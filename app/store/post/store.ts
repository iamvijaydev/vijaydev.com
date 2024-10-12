import { useState } from "react";
import { type PostState, getPostState } from "./state";

export interface PostStore {
  state: PostState;
  update: (data: Partial<PostState>) => void;
}

export const usePostStore = (data: Partial<PostState>): PostStore => {
  const [state, setState] = useState<PostState>(getPostState(data));

  const update = (data: Partial<PostState>) => {
    setState((prev) => ({ ...prev, ...data }));
  };

  return {
    state,
    update,
  };
};
