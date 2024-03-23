import { resolve } from "node:path";
import { outputFile } from "fs-extra";
import { renderToString } from "react-dom/server";
import type { MakeServerInitProps } from "types";
import { Header } from "islands/header/Header";
import { Footer } from "islands/footer/Footer";

import { buildHtmlWrapper } from "./buildHtmlWrapper";

export const makeServerInit = async ({
  metaProps,
  PageComponent,
}: MakeServerInitProps) => {
  console.time(`Built - ${metaProps.permalink}`);

  const header = renderToString(
    <Header
      pathname={metaProps.pathname}
      pageTitle={metaProps.title}
    />
  );
  const footer = renderToString(<Footer />);
  const body = renderToString(<PageComponent />);
  const html = buildHtmlWrapper({
    metaProps,
    body,
    header,
    footer,
  });

  await outputFile(resolve(process.cwd(), `dist${metaProps.permalink}`), html);

  console.timeEnd(`Built - ${metaProps.permalink}`);
};
