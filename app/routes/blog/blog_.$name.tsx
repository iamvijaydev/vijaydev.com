import { PropsWithChildren, useMemo } from "react";
import type { TocEntry } from "@stefanprobst/rehype-extract-toc";
import { useBlogContext, PostWrapper } from "main";
import { MetaLink } from "~types";

export const links: MetaLink[] = [
  {
    rel: "prefetch",
    href: "/blog",
  },
];

export type Props = {
  pathname: string;
  toc: TocEntry[];
};

export const RouteComponent = (props: PropsWithChildren<Props>) => {
  const blogStore = useBlogContext();

  const matter = useMemo(
    () =>
      blogStore.state.list.find((post) => post.pathname === props.pathname)!,
    [props.pathname, blogStore.state.list]
  );

  return (
    <PostWrapper
      matter={matter}
      toc={props.toc}
      breadcrumbNodes={[{ href: "/", label: "Home" }, { href: "/blog", label: "Blog" }]}
    >
      {props.children}
    </PostWrapper>
  );
}

RouteComponent.displayName = "BlogItemRoute";