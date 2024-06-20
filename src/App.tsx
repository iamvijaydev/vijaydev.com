import React from "react";
import { Importmap } from "~components/Importmap";
import { Links } from "~components/Links";
import { Meta } from "~components/Meta";
import { GlobalLoader } from "~components/GlobalLoader";
import { Outlet } from "~components/Outlet";
import { PopState } from "~components/PopState";
import { BlogContextProvider } from "~store/blog/Provider";
import { HtmlHeadContextProvider } from "~store/htmlHead/Provider";
import { LearnContextProvider } from "~store/learn/Provider";
import { RouteContextProvider } from "~store/route/Provider";

export const App = () => {
  return (
    <React.StrictMode>
      <html>
        <HtmlHeadContextProvider>
          <head>
            <Importmap />
            <Links />
            <Meta />
          </head>
          <body>
            <BlogContextProvider>
              <LearnContextProvider>
                <RouteContextProvider>
                  <GlobalLoader />
                  <Outlet />
                  <PopState />
                </RouteContextProvider>
              </LearnContextProvider>
            </BlogContextProvider>
          </body>
        </HtmlHeadContextProvider>
      </html>
    </React.StrictMode>
  );
};
