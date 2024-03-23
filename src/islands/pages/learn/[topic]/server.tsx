import type { TopicPageProps } from "types";
import { PageComponent as BaseComponent } from "./client";
import { makeServerInit } from "utils/page/makeServerInit";

export const makeServerPage = async (topicProps: TopicPageProps) => {
  const PageComponent = () => <BaseComponent {...topicProps} />;

  await makeServerInit({
    metaProps: topicProps.metaProps,
    PageComponent,
  });
};
