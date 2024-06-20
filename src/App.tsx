import React from "react";

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
            <Script />
          </body>
        </HtmlHeadContextProvider>
      </html>
    </React.StrictMode>
  );
};
