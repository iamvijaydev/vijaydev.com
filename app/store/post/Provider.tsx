import { PropsWithChildren, useMemo } from "react";
import type { PostState } from "./state";
import { usePostStore } from "./store";
import { PostContext } from "./context";

export type Props = {
  technical: Partial<PostState>;
  fiction: Partial<PostState>;
};

export const PostContextProvider = (props: PropsWithChildren<Props>) => {
  const store = {
    technical: usePostStore(props.technical),
    fiction: usePostStore(props.fiction),
  }
  const value = useMemo(() => store, [store]);

  return (
    <PostContext.Provider value={value}>
      {props.children}
    </PostContext.Provider>
  );
};
