import {
  DetailedHTMLProps,
  AnchorHTMLAttributes,
  PropsWithChildren,
} from "react";
import { Layout } from "main";

export interface Props
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
}

export const ArticleLayout = (props: PropsWithChildren<Props>) => {
  const { className, children, ...rest } = props;

  return <Layout {...rest} className={`${className || ''} max-xl:article-rows`}>{children}</Layout>;
};
