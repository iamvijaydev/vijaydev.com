import type { LearnPageProps } from "types";
import { metaProps, PageComponent as BaseComponent } from "./client";
import { makeServerInit } from "utils/makeServerInit";

export const makeServerPage = async (props: LearnPageProps) => {
  const PageComponent = () => <BaseComponent {...props} />;

  await makeServerInit({
    metaProps,
    PageComponent,
  });
};
