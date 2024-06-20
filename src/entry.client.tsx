import { hydrateRoot } from "react-dom/client";
import { App } from "~App";

export const hydrate = () => {
  hydrateRoot(document, <App />);
};
