import { PropsWithChildren, useMemo } from "react";
import { useLearnContext, Masthead, LinkCard, H3 } from "main";
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
  pathname: string;
};

// @todo - the pathname can be taken from the browser location
// also the meta title and description can be taken from the matter object
// so you can use the same template for all the topic routes
export const RouteComponent = ({ pathname }: PropsWithChildren<Props>) => {
  const learnStore = useLearnContext();

  const { matter, chapters } = useMemo(
    () => learnStore.state.list.get(pathname)!,
    [pathname, learnStore.state.list]
  );

  // @todo - add the meta tags
  // const store = useHtmlHeadContext();
  // store.replaceMetaLinks([matter.title, matter.description])

  return (
    <div>
      <Masthead
        breadcrumbNodes={[{ href: "/learn", label: "Learn" }]}
        title={matter.title}
        description={matter.description}
      />
      <ul>
        {chapters.map((chapter) => (
          <LinkCard key={chapter.pathname} to={chapter.pathname}>
            <H3>{chapter.title}</H3>
            <p>{chapter.description}</p>
          </LinkCard>
        ))}
      </ul>
    </div>
  );
};

RouteComponent.displayName = "LearnTopicRoute";