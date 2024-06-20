import { PropsWithChildren, useMemo } from "react";
import type { BlogState } from "./state";
import { useBlogStore } from "./store";
import { BlogContext } from "./context";

export type Props = {
  blogs: Partial<BlogState>;
};

export const BlogContextProvider = (props: PropsWithChildren<Props>) => {
  const store = useBlogStore(props.blogs);
  const value = useMemo(() => store, [store]);

  return (
    <BlogContext.Provider value={value}>
      {props.children}
    </BlogContext.Provider>
  );
};
