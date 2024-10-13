import { PropsWithChildren, useMemo } from "react";
import type { TocEntry } from "@stefanprobst/rehype-extract-toc";
import { usePostContext, PostWrapper } from "main";
import { MetaLink } from "~types";

export const links: MetaLink[] = [
  {
    rel: "prefetch",
    href: "/technical",
  },
];

export type Props = {
  pathname: string;
  toc: TocEntry[];
};

export const RouteComponent = (props: PropsWithChildren<Props>) => {
  const {
    technical: {
      state: { list },
    },
  } = usePostContext();

  const matter = useMemo(
    () => list.find((post) => post.pathname === props.pathname)!,
    [props.pathname, list]
  );

  return (
    <PostWrapper
      matter={matter}
      toc={props.toc}
      breadcrumbNodes={[
        { href: "/", label: "Home" },
        { href: "/technical", label: "Technical" },
      ]}
    >
      {props.children}
    </PostWrapper>
  );
};

RouteComponent.displayName = "TechnicalItemRoute";
