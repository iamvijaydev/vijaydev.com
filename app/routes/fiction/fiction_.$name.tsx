import { PropsWithChildren, useMemo } from "react";
import type { TocEntry } from "@stefanprobst/rehype-extract-toc";
import { usePostContext, PostWrapper } from "main";
import { MetaLink } from "~types";

export const links: MetaLink[] = [
  {
    rel: "prefetch",
    href: "/fiction",
  },
];

export type Props = {
  pathname: string;
  toc: TocEntry[];
};

export const RouteComponent = (props: PropsWithChildren<Props>) => {
  const {
    fiction: {
      state: { list },
    },
  } = usePostContext();

  const matter = useMemo(
    () =>
      list.find((post) => post.pathname === props.pathname)!,
    [props.pathname, list]
  );

  return (
    <PostWrapper
      matter={matter}
      toc={props.toc}
      breadcrumbNodes={[{ href: "/", label: "Home" }, { href: "/fiction", label: "Fiction" }]}
      isFiction={true}
    >
      {props.children}
    </PostWrapper>
  );
}

RouteComponent.displayName = "FictionItemRoute";