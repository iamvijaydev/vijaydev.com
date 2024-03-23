import type { ChapterPageProps } from "types";
import { PageComponent as BaseComponent } from "./[chapter].client";
import { makeServerInit } from "utils/makeServerInit";

export const makeServerPage = async (chapterProps: ChapterPageProps) => {
  const PageComponent = () => <BaseComponent {...chapterProps} />;

  await makeServerInit({
    metaProps: chapterProps.metaProps,
    PageComponent,
    tableOfContents: chapterProps.tableOfContents,
  });
};
