import { useState } from "react";
import { type LearnState, getLearnState } from "./state";
import type { TopicList } from "~types";

export interface LearnStore {
  state: LearnState;
  update: (data: Partial<LearnState>) => void;
  getTopic: (pathname: string) => TopicList | undefined;
}

export const useLearnStore = (data: Partial<LearnState>): LearnStore => {
  const [state, setState] = useState<LearnState>(getLearnState(data));

  const update = (data: Partial<LearnState>) => {
    setState((prev) => ({ ...prev, ...data }));
  };

  const getTopic = (pathname: string) => {
    return state.list.get(pathname);
  };

  return {
    state,
    update,
    getTopic,
  };
};
