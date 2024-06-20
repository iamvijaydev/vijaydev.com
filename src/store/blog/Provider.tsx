import { PropsWithChildren, useMemo } from "react";
import { useBlogStore } from "./store";
import { BlogContext } from "./context";

export const BlogContextProvider = (props: PropsWithChildren) => {
  const store = useBlogStore();
  const value = useMemo(() => store, [store]);

  return (
    <BlogContext.Provider value={value}>
      {props.children}
    </BlogContext.Provider>
  );
};
