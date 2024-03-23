import { useState } from "react";
import { HeaderPageTitleState, getDefaultState } from "./state";

export interface HeaderPageTitleStore {
  state: HeaderPageTitleState;
  updateTitle: (title: string) => void;
  updateIsTitleVisible: (isTitleVisible: boolean) => void;
}

export const useStore = (): HeaderPageTitleStore => {
  const [state, setState] = useState<HeaderPageTitleState>(getDefaultState());

  const updateTitle = (title: string) => {
    state.title = title;
  };

  const updateIsTitleVisible = (isTitleVisible: boolean) => {
    state.isTitleVisible = isTitleVisible;
  };

  return {
    state,
    updateTitle,
    updateIsTitleVisible,
  };
};