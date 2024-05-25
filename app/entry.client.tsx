/**
 * By default, Remix will handle hydrating your app on the client for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://remix.run/file-conventions/entry.client
 */

import { RemixBrowser } from "@remix-run/react";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <RemixBrowser />
    </StrictMode>,
    {
      // @todo - bind the following to google analytics
      // @ts-expect-error Canary testing
      onCaughtError: (error, errorInfo) => {
        console.error(
          'Caught error',
          error,
          errorInfo.componentStack
        );
      },
      onRecoverableError: (error, errorInfo) => {
        console.error(
          'Recoverable error',
          error,
          // @ts-expect-error Canary testing
          error.cause,
          errorInfo.componentStack
        );
      }
    }
  );
});
