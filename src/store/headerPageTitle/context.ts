import { createContext } from 'react';

import { useDefinedContext } from 'main';

import { HeaderPageTitleStore } from './store';

export const HeaderPageTitleContext = createContext<
  HeaderPageTitleStore | undefined
>(undefined);

export const useHeaderPageTitleContext = (): HeaderPageTitleStore =>
  useDefinedContext(HeaderPageTitleContext);