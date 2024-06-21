import { useRouteContext } from "main"

export const GlobalLoader = () => {
  const store = useRouteContext();

  if (store.state.loading) {
    return <div>Loading...</div>;
  }

  return null;
}