import { MetaLink, Meta } from "~types";
import { Link, LinkCard, H3, H4, useLearnContext, Masthead } from "main";

export const links: MetaLink[] = [
  {
    rel: "prefetch",
    href: "/home",
  }
];

export const meta: Meta[] = [
  { title: "Learn" },
  {
    name: "description",
    content: "Learn des",
  },
];

export const RouteComponent = () => {
  const store = useLearnContext();

  return (
    <div>
      <Masthead title="Learn" description="Learn FE" />
      <H3>Featured</H3>
      {
        store.state.featured.map((topic) => (
          <LinkCard key={topic.pathname} to={topic.pathname}>
            <H3>{topic.title}</H3>
            <p>{topic.description}</p>
            {
              topic.chapters.map((chapter) => (
                <div key={chapter.pathname}>
                  <H4>{chapter.title}</H4>
                  <p>{chapter.description}</p>
                </div>
              ))
            }
            <span>{topic.chapterCount} more chapters</span>
          </LinkCard>
        ))
      }
      <H3>Topics</H3>
      {
        Array.from(store.state.list.entries()).map(([id, topic]) => (
          <div key={id}>
            <H4>{topic.matter.title} <Link to={topic.matter.pathname}>View chapters</Link></H4>
            {
              topic.chapters.map((chapter) => (
                <LinkCard key={chapter.pathname} to={chapter.pathname}>
                  <H3>{chapter.title}</H3>
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