import { hydrateRoot } from "react-dom/client";
import { type AppProps, App } from "~App";

export const makeHydrate = (data: AppProps) => async () => {
  try {
    const pathname = window.location.pathname;
    const scriptPath = pathname === "/" ? "/home" : pathname;

    const { RouteComponent, links, meta, layoutType } = await import(
      scriptPath
    );

    const props: AppProps = {
      imports: data.imports,
      technical: data.technical,
      fiction: data.fiction,
      pathname
    };

    if (links) props.links = links;
    if (meta) props.meta = meta;
    if (layoutType) props.layoutType = layoutType;
    if (RouteComponent) props.Outlet = RouteComponent;

    hydrateRoot(document, <App {...props} />);
  } catch (error) {
    console.log("hydration failed", error);
  }
};
