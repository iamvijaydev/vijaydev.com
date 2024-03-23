import { PropsWithChildren } from 'react';

import { HeaderPageTitleContext } from './context';
import { useStore } from './store';

export const HeaderPageTitleContextProvider = (
  props: PropsWithChildren
): JSX.Element => {
  const store = useStore();

  return (
    <HeaderPageTitleContext.Provider value={store}>
      {props.children}
    </HeaderPageTitleContext.Provider>
  );
};