export interface HeaderPageTitleState {
  title: string;
  isTitleVisible: boolean;
}

export const getDefaultState = (): HeaderPageTitleState => ({
  title: '',
  isTitleVisible: false,
});