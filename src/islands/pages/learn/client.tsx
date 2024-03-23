import type { MetaProps, LearnPageProps } from "types";
import { Layout, Masthead, LinkCard, H3, H4 } from "main";

export const metaProps: MetaProps = {
  pathname: "/learn",
  permalink: "/learn.html",
  title: "Learn",
  description: "Place the learn meta description text here",
};

export const PageComponent = ({ topicData, featuredData }: LearnPageProps) => {
  return (
    <Layout>
      <Masthead
        title="Become a world class Web Frontend Engineer!"
        description="Your journey begins here"
        nodes={[{ href: "/", label: "Home" }, { label: "Learn" }]}
      />
      <H3 className="col-12 mb-m">Featured</H3>
      {featuredData.map((item) => (
        <LinkCard
          key={item.slug}
          href={`/learn/${item.topic.slug}/${item.slug}`}
          className="block mb-gutter col-12 lg:col-6"
        >
          <H4 className="mb-3xs">{item.title}</H4>
          <p className="text-dim-color hover:text-link-color">{item.description}</p>
        </LinkCard>
      ))}
      <H3 className="col-12 mb-m">Topics</H3>
      {topicData.map((item) => (
        <LinkCard
          key={item.slug}
          href={`/learn/${item.slug}`}
          className="block mb-gutter col-12 lg:col-6"
        >
          <H4 className="mb-3xs">{item.title}</H4>
          <p className="text-dim-color hover:text-link-color">{item.description}</p>
        </LinkCard>
      ))}
    </Layout>
  );
};
