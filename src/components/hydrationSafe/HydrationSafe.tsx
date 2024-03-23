import { useRef } from "react";
import { useIsomorphicLayoutEffect, ErrorBoundary } from "main";

export interface Props {
  ServerComponent: JSX.Element;
  ClientComponent: JSX.Element;
}

export const HydrationSafe = (props: Props) => {
  const ready = useRef(false);

  useIsomorphicLayoutEffect(() => {
    try {
      if (
        // isBrowser
        typeof window !== "undefined" &&
        typeof window.document !== "undefined" &&
        // client not rendered
        !ready.current
      ) {
        ready.current = true;
      }
    } catch (error) {
      // no op
    }
  });

  return (
    <ErrorBoundary>
      {ready.current ? props.ClientComponent : props.ServerComponent}
    </ErrorBoundary>
  );
};
