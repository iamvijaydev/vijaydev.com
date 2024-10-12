import React from "react";
import { Importmap } from "~components/internal/Importmap";
import { Links } from "~components/internal/Links";
import { Meta } from "~components/internal/Meta";
import { GlobalLoader } from "~components/internal/GlobalLoader";
import { Outlet } from "~components/internal/Outlet";
import { PopState } from "~components/internal/PopState";
import { Script } from "~components/internal/Script";
import { ScrollManager } from "~components/internal/ScrollManager";
import { PostContextProvider } from "~store/post/Provider";
import { HtmlHeadContextProvider } from "~store/htmlHead/Provider";
import { LearnContextProvider } from "~store/learn/Provider";
import { RouteContextProvider } from "~store/route/Provider";
import { Imports, MetaLink, Meta as MetaType } from "~types";
import type { PostState } from "~store/post/state";
import type { RouteLayoutType, RouteOutLet } from "~store/route/state";

export type AppProps = {
  imports?: Imports;
  links?: MetaLink[];
  meta?: MetaType[];
  technical?: Partial<PostState>;
  fiction?: Partial<PostState>;
  pathname?: string;
  layoutType?: RouteLayoutType;
  Outlet?: RouteOutLet;
};

export const App = (props: AppProps = {}) => {
  return (
    <React.StrictMode>
      <html lang="en-US" data-scroll="0" color-scheme="auto" color-hue="">
        <HtmlHeadContextProvider
          imports={props.imports}
          links={props.links}
          meta={props.meta}
        >
          <head>
            <Importmap />
            <Links />
            <Meta />
          </head>
          <body className="surface">
            <PostContextProvider technical={props.technical || {}} fiction={props.fiction || {}}>
                <RouteContextProvider
                  pathname={props.pathname || "/"}
                  layoutType={props.layoutType}
                  Outlet={props.Outlet}
                >
                  <GlobalLoader />
                  <Outlet />
                  <PopState />
                  <ScrollManager />
                </RouteContextProvider>
            </PostContextProvider>
            <Script />
          </body>
        </HtmlHeadContextProvider>
      </html>
    </React.StrictMode>
  );
};
