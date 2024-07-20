import React from "react";
import { Importmap } from "~components/internal/Importmap";
import { Links } from "~components/internal/Links";
import { Meta } from "~components/internal/Meta";
import { GlobalLoader } from "~components/internal/GlobalLoader";
import { Outlet } from "~components/internal/Outlet";
import { PopState } from "~components/internal/PopState";
import { Script } from "~components/internal/Script";
import { ScrollManager } from "~components/internal/ScrollManager";
import { BlogContextProvider } from "~store/blog/Provider";
import { HtmlHeadContextProvider } from "~store/htmlHead/Provider";
import { LearnContextProvider } from "~store/learn/Provider";
import { RouteContextProvider } from "~store/route/Provider";
import { Imports, MetaLink, Meta as MetaType } from "~types";
import type { BlogState } from "~store/blog/state";
import type { LearnState } from "~store/learn/state";
import type { RouteLayoutType, RouteOutLet } from "~store/route/state";

export type AppProps = {
  imports?: Imports;
  links?: MetaLink[];
  meta?: MetaType[];
  blogs?: Partial<BlogState>;
  learn?: Partial<LearnState>;
  layoutType?: RouteLayoutType;
  Outlet?: RouteOutLet;
};

export const App = (props: AppProps = {}) => {
  return (
    <React.StrictMode>
      <html lang="en-US" data-scroll="0" color-scheme="auto" color-hue="green">
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
            <BlogContextProvider blogs={props.blogs || {}}>
              <LearnContextProvider learn={props.learn || {}}>
                <RouteContextProvider
                  layoutType={props.layoutType}
                  Outlet={props.Outlet}
                >
                  <GlobalLoader />
                  <Outlet />
                  <PopState />
                </RouteContextProvider>
              </LearnContextProvider>
            </BlogContextProvider>
            <Script />
            <ScrollManager />
          </body>
        </HtmlHeadContextProvider>
      </html>
    </React.StrictMode>
  );
};
