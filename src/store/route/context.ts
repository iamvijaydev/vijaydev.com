import { createContext } from "react";
import { useDefinedContext } from '../../utils/useDefinedContext';
import type { RouteStoreType } from './store';

export type MetaPropsContextType = {
  store: RouteStoreType
}

export const MetaPropsContext = createContext<MetaPropsContextType | undefined>(undefined);

export const useMetaPropsContext = (): MetaPropsContextType => useDefinedContext(MetaPropsContext);