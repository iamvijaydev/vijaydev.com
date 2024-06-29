import { PropsWithChildren, useState } from "react";
import { MDXProvider } from "@mdx-js/react";
import type { TocEntry } from "@stefanprobst/rehype-extract-toc";
import { useIsomorphicEffect } from "~hooks/useIsomorphicEffect";
import { Toc } from "~components/core/toc/Toc";
import { RelatedItemCard } from "~components/core/RelatedItemCard";
import { Masthead } from "~components/core/masthead/Masthead";
import { Grid, Cell } from "~components/core/grid/Grid";
import type { BreadcrumbNode } from "~components/core/Breadcrumb";
import { getLocaleDateString } from "~utils/getLocalDateString";
import { ContentItemDetailed } from "~types";
import { mdxComponents } from "~components/core/mdxComponents";

export type Props = {
  matter: ContentItemDetailed;
  toc: TocEntry[];
  breadcrumbNodes: BreadcrumbNode[];
};

export const PostWrapper = ({
  matter,
  toc,
  breadcrumbNodes,
  children,
}: PropsWithChildren<Props>) => {
  const [date, setDate] = useState({
    published: getLocaleDateString(matter.published),
    updated: getLocaleDateString(matter.updated),
  });

  useIsomorphicEffect(() => {
    setDate({
      published: getLocaleDateString(matter.published, navigator.language),
      updated: getLocaleDateString(matter.updated, navigator.language),
    });
  }, [matter.published, matter.updated]);

  return (
    <Grid as="div">
      <Cell as="article" size={[{ size: 12 }, { screen: "md", size: 7 }]}>
        <Masthead
          breadcrumbNodes={breadcrumbNodes}
          title={matter.title}
          description={matter.description}
          published={date.published}
          updated={date.updated}
          readTime={matter.readTime}
        />

        <MDXProvider components={mdxComponents}>{children}</MDXProvider>

        <footer className="mt-7">
          <nav className="flex f-column lg:f-row j-between gap-m">
            {matter.prev ? (
              <RelatedItemCard
                type="⟵ Previous"
                href={matter.prev.pathname}
                label={matter.prev.title}
              />
            ) : null}
            {matter.next ? (
              <RelatedItemCard
                type="Up Next ⟶"
                href={matter.next.pathname}
                label={matter.next.title}
                rightAlign
              />
            ) : null}
          </nav>
        </footer>
      </Cell>
      <Toc
        title={matter.title}
        toc={toc}
        contentSiblingId="#article-content"
        className="col-12 xl:col-start-9 xl:col-end-13 xl:a-self-start"
      />
    </Grid>
  );
};
