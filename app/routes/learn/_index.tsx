import { MetaLink, Meta } from "~types";
import { Link, LinkCard, useLearnContext, Masthead, Text } from "main";

export const links: MetaLink[] = [
  {
    rel: "prefetch",
    href: "/home",
  }
];

export const meta: Meta[] = [
  {
    name: "title",
    content: "Learn des",
  },
  {
    name: "description",
    content: "Learn des",
  },
];

export const RouteComponent = () => {
  const store = useLearnContext();

  return (
    <div className="bg-linear-grad theme-hue">
      <Masthead
        title="Learn Fe"
        description="I build world class web apps for enterprise products and services"
        branding="secondary"
      />
      <Text as="h3">Featured</Text>
      {
        store.state.featured.map((topic) => (
          <LinkCard key={topic.pathname} href={topic.pathname}>
            <Text as="h3">{topic.title}</Text>
            <p>{topic.description}</p>
            {
              topic.chapters.map((chapter) => (
                <div key={chapter.pathname}>
                  <Text as="h4">{chapter.title}</Text>
                  <p>{chapter.description}</p>
                </div>
              ))
            }
            <span>{topic.chapterCount} more chapters</span>
          </LinkCard>
        ))
      }
      <Text as="h3">Topics</Text>
      {
        Array.from(store.state.list.entries()).map(([id, topic]) => (
          <div key={id}>
            <Text as="h4">{topic.matter.title} <Link href={topic.matter.pathname}>View chapters</Link></Text>
            {
              topic.chapters.map((chapter) => (
                <LinkCard key={chapter.pathname} href={chapter.pathname}>
                  <Text as="h3">{chapter.title}</Text>
                  <p>{chapter.description}</p>
                </LinkCard>
              ))
            }
          </div>
        ))
      }
    </div>
  );
}

RouteComponent.displayName = "LearnRoute";