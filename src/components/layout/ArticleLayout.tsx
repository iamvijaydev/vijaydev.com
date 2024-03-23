import { PropsWithChildren } from "react";
import { Layout } from "main";

export type Props = {
  className?: string;
}

export const ArticleLayout = (props: PropsWithChildren<Props>) => {
  return (
    <Layout className='max-xl:article-rows'>{props.children}</Layout>
  )
}