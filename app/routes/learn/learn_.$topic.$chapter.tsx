import { PropsWithChildren, useMemo } from "react";
import type { TocEntry } from "@stefanprobst/rehype-extract-toc";
// import { useLearnContext, PostWrapper } from "main";
// import { ContentItemDetailed } from "~types";

import { MetaLink } from "~types";

export const links: MetaLink[] = [
  {
    rel: "prefetch",
    href: "/home",
  },
  {
    rel: "prefetch",
    href: "/learn",
  },
];

export type Props = {
  parentPathname: string;
  pathname: string;
  toc: TocEntry[];
};

export const RouteComponent = ({
  parentPathname,
  pathname,
  toc,
  children,
}: PropsWithChildren<Props>) => {
  return <p>Chapter</p>
  // const learnStore = useLearnContext();

  // const matter = useMemo(() => {
  //   const { chapters } = learnStore.state.list.get(parentPathname)!;

  //   return chapters.find((chapter) => chapter.pathname === pathname)!;
  // }, [parentPathname, pathname, learnStore.state.list]);

  // return (
  //   <PostWrapper
  //     matter={matter as ContentItemDetailed}
  //     toc={toc}
  //     breadcrumbNodes={[
  //       { href: "/learn", label: "Learn" },
  //       { label: matter.topic.title, href: matter.topic.pathname },
  //     ]}
  //   >
  //     {children}
  //   </PostWrapper>
  // );
}

RouteComponent.displayName = "LearnTopicContentRoute";
