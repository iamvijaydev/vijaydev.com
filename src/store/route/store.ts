import { useRef } from 'react';

import type { RouteStateType } from './state';
import { getDefaultRouteState } from './state';

export type SubscribeCallbackType = (value: RouteStateType) => void;

export type RouteStoreType = {
  get: () => Readonly<RouteStateType>;
  set: (update: (value: RouteStateType) => Partial<RouteStateType>) => void;
  subscribe: (callback: SubscribeCallbackType) => () => void;
}

export const useRouteStore = () => {
  const state = useRef<RouteStateType>(getDefaultRouteState());
  const listerns = useRef<Set<SubscribeCallbackType>>(new Set());

  return {
    get: () => state.current,
    set: (update: (value: RouteStateType) => Partial<RouteStateType>) => {
      state.current = {
        ...state.current,
        ...update(state.current)
      };
      for (const value of listerns.current.values()) {
        value(state.current);
      }
    },
    subscribe: (callback: SubscribeCallbackType) => {
      listerns.current.add(callback);
      return () => { listerns.current.delete(callback) }
    }
  }
}