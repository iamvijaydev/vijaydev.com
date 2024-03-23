import { metaProps, PageComponent as BaseComponent } from './client';
import { makeServerInit } from "utils/page/makeServerInit";

export const makeServerPage = async () => {
  const PageComponent = () => <BaseComponent />

  await makeServerInit({
    metaProps,
    PageComponent,
  });
}

makeServerPage();