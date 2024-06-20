import { PropsWithChildren, useMemo } from "react";
import { useLearnStore } from "./store";
import { LearnContext } from "./context";

export const LearnContextProvider = (props: PropsWithChildren) => {
  const store = useLearnStore();
  const value = useMemo(() => store, [store]);

  return (
    <LearnContext.Provider value={value}>
      {props.children}
    </LearnContext.Provider>
  );
};
