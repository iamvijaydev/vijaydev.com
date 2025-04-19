import React from 'react';

export const useFilterStore = () => {
  const state = useRef...state;
  const getState = () => state.current;
  const listeners = useRef<Set...;
  const subscribe = (onUpdate...
  ...
}

export const useFilterStore = () => {
  const [state, getState] = useMutableState<FilterState>(getDefaultFilterState());
  const [subscribe, triggerListeners] = useMutableStateSubscription<FilterState>();
  ...
}

const getProxyState = <State extends object>(state: State): Readonly<State> =>
  new Proxy(state, {
    set(_, key) {
      console.warn(
        `Trying to update "${String(
          key
        )}" directly.\nDirectly updating the state value is not allowed.\nPlease use a store method instead.`
      );
      return false;
    },
  });

export type UseMutableState = ReturnType<typeof useMutableState<{name: string}>>

export const useMutableState = <State extends object>(
  defaultState: State
) => {
  const state = React.useRef<State>(defaultState);

  const getState = () => getProxyState<State>(state.current);

  return [state, getState];
};



export type OnUpdate<State> = (state: Readonly<State>) => void;
export type Unsubscribe = () => void;
export type UseMutableStateSubscription<State> = [
  (onUpdate: OnUpdate<State>) => Unsubscribe,
  (nextState: State) => void
];

export const useMutableStateSubscription = <
  State extends object
>(): UseMutableStateSubscription<State> => {
  const listeners = React.useRef<Set<OnUpdate<State>>>(new Set());

  const subscribe = (onUpdate: OnUpdate<State>): Unsubscribe => {
    listeners.current.add(onUpdate);

    return () => {
      listeners.current.delete(onUpdate);
    };
  };

  const triggerListeners = (state: State): void => {
    listeners.current.forEach((onUpdate) => onUpdate(getProxyState(state)));
  };

  return [subscribe, triggerListeners];
};