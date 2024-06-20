import React from "react";
import { Importmap } from "~components/Importmap";
import { Links } from "~components/Links";
import { Meta } from "~components/Meta";
import { Outlet } from "~components/Outlet";
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
                  <Outlet />
                </RouteContextProvider>
              </LearnContextProvider>
            </BlogContextProvider>
          </body>
        </HtmlHeadContextProvider>
      </html>
    </React.StrictMode>
  );
};
