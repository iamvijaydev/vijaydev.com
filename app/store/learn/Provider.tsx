import { PropsWithChildren, useMemo } from "react";
import type { LearnState } from "./state";
import { useLearnStore } from "./store";
import { LearnContext } from "./context";

export type Props = {
  learn: Partial<LearnState>;
};

export const LearnContextProvider = (props: PropsWithChildren<Props>) => {
  const store = useLearnStore(props.learn);
  const value = useMemo(() => store, [store]);

  return (
    <LearnContext.Provider value={value}>
      {props.children}
    </LearnContext.Provider>
  );
};
