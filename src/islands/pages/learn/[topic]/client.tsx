import type { TopicPageProps } from "types";
import { LinkCard, Layout, H3, H4, Masthead } from "main";

export const PageComponent = ({ topicData }: TopicPageProps) => {
  return (
    <Layout>
      <Masthead
        title={topicData.title}
        description={topicData.description}
        nodes={[
          { href: "/", label: "Home" },
          { href: "/learn", label: "Learn" },
          { label: topicData.title },
        ]}
      />

      <H3 className="col-12 mb-m">Chapters</H3>

      {topicData.chapters?.map((chapter) => {
        return (
          <LinkCard
            key={chapter.slug}
            href={`/learn/${topicData.slug}/${chapter.slug}`}
            className="mb-gutter col-12 lg:col-6"
          >
            {/* <img src="" /> */}
            <H4 presentAs="h5" className="pb-3xs">
              {chapter.order}. {chapter.title}
            </H4>
            <p className="text-dim-color hover:text-link-color">
              {chapter.description}
            </p>
          </LinkCard>
        );
      })}
    </Layout>
  );
};
