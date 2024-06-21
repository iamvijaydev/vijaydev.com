import { useRouteContext } from "~store/route/context";
import { ErrorBoundary } from "~components/core/ErrorBoundary";

export const Outlet = () => {
  const store = useRouteContext();

  return (
    <store.state.layout>
      <ErrorBoundary>
        <store.state.outlet />
      </ErrorBoundary>
    </store.state.layout>
  );
};
