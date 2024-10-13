import { PropsWithChildren, useState } from "react";
import { MDXProvider } from "@mdx-js/react";
import type { TocEntry } from "@stefanprobst/rehype-extract-toc";
import { useIsomorphicEffect } from "~hooks/useIsomorphicEffect";
// import { AsideToc } from "~components/core/toc/features/AsideToc";
import { RelatedItemCard } from "~components/core/RelatedItemCard";
import { Masthead } from "~components/core/masthead/Masthead";
import { Grid, Cell, SizeType } from "~components/core/grid/Grid";
import type { BreadcrumbNode } from "~components/core/Breadcrumb";
import { getLocaleDateString } from "~utils/getLocalDateString";
import { ContentItemDetailed } from "~types";
import { mdxComponents } from "~components/core/mdxComponents";

export type Props = {
  matter: ContentItemDetailed;
  toc: TocEntry[];
  breadcrumbNodes: BreadcrumbNode[];
  isFiction?: boolean;
};

export const PostWrapper = ({
  matter,
  toc,
  breadcrumbNodes,
  isFiction = false,
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

  const cellSize: SizeType = [
    { size: 12 },
    { position: "start", screen: "xl", size: 3 },
    { position: "end", screen: "xl", size: 11 },
  ];

  return (
    <div className={isFiction ? 'fiction-font' : ''}>
      <Grid as="div" layoutClassName="theme-hue">
        <Cell size={cellSize}>
          <Masthead
            breadcrumbNodes={breadcrumbNodes}
            title={matter.title}
            description={matter.description}
            published={date.published}
            updated={date.updated}
            readTime={matter.readTime}
          />
        </Cell>
      </Grid>
      <Grid as="div">
        <Cell as="article" size={cellSize} id="article-content">
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
        {/* <Cell
          as="aside"
          size={[
            { screen: "md", size: 9, position: "start" },
            { screen: "md", size: 13, position: "end" },
          ]}
          className="none md:inline-block"
        >
          <AsideToc
            title={matter.title}
            toc={toc}
            contentSiblingId="#article-content"
          />
        </Cell> */}
        {/* <Toc
        title={matter.title}
        toc={toc}
        contentSiblingId="#article-content"
        className="col-12 xl:col-start-9 xl:col-end-13 xl:a-self-start"
      /> */}
      </Grid>
    </div>

    // #container>.a {
    //   grid-column: 1;
    // }

    // #container>.b {
    //   grid-column: 2;
    //   grid-row: 1; /* NEW */
    // }

    // #container.reverse>.a {
    //   grid-column: 2;
    // }

    // #container.reverse>.b {
    //   grid-row: 1;
    //   grid-column: 1;
    // }
  );
};
