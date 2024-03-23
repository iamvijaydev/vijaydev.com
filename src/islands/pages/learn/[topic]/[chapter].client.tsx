import type { ChapterPageProps } from "types";
import {
  ArticleLayout,
  Toc,
  mdxComponents,
  Breadcrumb,
  Label,
  NextPrevNav,
} from "main";
import { useState } from "react";
import { useIsomorphicLayoutEffect } from "main";

export const PageComponent = ({
  Component,
  chapterData,
  tableOfContents,
}: ChapterPageProps) => {
  const [date, setDate] = useState(
    `${chapterData.year}-${
      chapterData.month < 9 ? "0" + chapterData.month : chapterData.month
    }`
  );

  useIsomorphicLayoutEffect(() => {
    setDate(
      new Date(
        Date.UTC(chapterData.year, chapterData.month - 1)
      ).toLocaleDateString(navigator.language, {
        year: "numeric",
        month: "short",
      })
    );
  }, [chapterData]);

  return (
    <ArticleLayout className="with-row">
      <header className="col-12">
        <Breadcrumb
          nodes={[
            { href: "/", label: "Home" },
            { href: "/learn", label: "Learn" },
            {
              href: `/learn/${chapterData.topic.slug}`,
              label: chapterData.topic.title,
            },
            { label: chapterData.title },
          ]}
        />
        <mdxComponents.h1 className="pb-3xs xl:pt-2xl">
          {chapterData.title}
        </mdxComponents.h1>
        <mdxComponents.description className="pb-xs">
          {chapterData.description}
        </mdxComponents.description>
        <div className="flex flex-wrap gap-xs">
          <Label icon="📅" title="Last update on">
            {date}
          </Label>
          <Label icon="📛" title="Chapter level">
            Basic
          </Label>
          <Label icon="⏲" title="Reading time">
            2 mins
          </Label>
        </div>
      </header>

      <article className="col-12 xl:col-8" id="article-content">
        <Component components={mdxComponents} />

        <footer className="mt-7">
          <nav className="flex f-column lg:f-row j-between gap-m">
            {chapterData.prev ? (
              <NextPrevNav
                type="⟵ Previous"
                href={`/learn/${chapterData.topic.slug}/${chapterData.prev.slug}`}
                label={chapterData.prev.title}
              />
            ) : (
              <NextPrevNav
                type="⟵ Previous Topic"
                href={`/learn`}
                label="Another topic name"
              />
            )}
            {chapterData.next ? (
              <NextPrevNav
                type="Up Next ⟶"
                href={`/learn/${chapterData.topic.slug}/${chapterData.next.slug}`}
                label={chapterData.next.title}
                rightAlign
              />
            ) : (
              <NextPrevNav
                type="Next Topic ⟶"
                href={`/learn`}
                label="Another topic name"
                rightAlign
              />
            )}
          </nav>
        </footer>
      </article>
      <Toc
        title={chapterData.title}
        toc={tableOfContents}
        contentSiblingId="#article-content"
        className="col-12 xl:col-start-10 xl:col-end-13 xl:a-self-start"
      />
    </ArticleLayout>
  );
};
