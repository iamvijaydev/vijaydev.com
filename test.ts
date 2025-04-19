import { useRef, MutableRefObject, useState, useEffect } from "react";

export type FilterState = {
  query: string;
  date: string;
};

export const getDefaultFilterState = () => ({
  query: "",
  date: "",
});

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

export type UseMutableState<Type> = [
  MutableRefObject<Type>,
  () => Readonly<Type>
];

const useMutableState = <State extends object>(
  defaultState: State
): UseMutableState<State> => {
  const state = useRef<State>(defaultState);

  const getState = (): Readonly<State> => getProxyState(state.current);

  return [state, getState];
};

type OnUpdate<State> = (state: State) => void;
type Unsubscribe = () => void;
type UseMutableStateSubscription<State> = [
  (onUpdate: OnUpdate<State>) => Unsubscribe,
  (nextState: State) => void
];

const useMutableStateSubscription = <
  State extends object
>(): UseMutableStateSubscription<State> => {
  const listeners = useRef<Set<OnUpdate<State>>>(new Set());

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

export const useFilterStore = () => {
  const [state, getState] = useMutableState<FilterState>(
    getDefaultFilterState()
  );
  const [subscribe, triggerListeners] =
    useMutableStateSubscription<FilterState>();

  const updateQuery = (value: string) => {
    state.current.query = value;
    triggerListeners(state.current);
  };

  const updateDate = (value: string) => {
    state.current.date = value;
    triggerListeners(state.current);
  };

  return {
    getState,
    subscribe,
    updateQuery,
    updateDate,
  };
};

export type UseFilterStore = ReturnType<typeof useFilterStore>;

/**/

type StoreLike<State> = {
  getState: () => Readonly<State>;
  subscribe: (onUpdate: OnUpdate<State>) => Unsubscribe;
};

const useReactiveState = <State>(
  store: StoreLike<State>,
  getter?: <Type>(next: State) => Type,
  differ?: (next: State, current: State) => boolean
) => {
  const get = getter ?? ((next: State) => next);
  const diff =
    differ ?? ((next: State, current: State) => !Object.is(next, current));

  const [state, setState] = useState<State>(get(store.getState()));

  useEffect(() => {
    const onUpdate = (value: State) => {
      const next = get(value);

      if (diff(next, state)) {
        setState(next);
      }
    };

    const unsubscribe = store.subscribe(onUpdate);

    return () => {
      unsubscribe();
    };
  }, [state]);

  return state;
};
