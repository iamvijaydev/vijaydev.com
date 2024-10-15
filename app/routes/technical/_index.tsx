import { usePostContext, LinkCard, Text, Masthead } from "main";
import { MetaLink, Meta } from "~types";

export const links: MetaLink[] = [
  {
    rel: "prefetch",
    href: "/home",
  },
];

export const meta: Meta[] = [
  {
    name: "title",
    content: "Technical posts",
  },
  {
    name: "description",
    content: "Technical posts",
  },
]

export const RouteComponent = () => {
  const store = usePostContext();

  console.log(store);

  return (
    <div className="bg-linear-grad1 theme-hue">
      <Masthead
        title="Succinctly Technical"
        description="I build world class web apps for enterprise products and services"
        isTopLevel
      />
      <h3>List</h3>
      {
        store.technical.state.list.map((item) => (
          <LinkCard key={item.pathname} href={item.pathname}>
            <Text as="h3">{item.title}</Text>
            <p>{item.description}</p>
          </LinkCard>
        ))
      }
    </div>
  );
}

RouteComponent.displayName = "TechnicalRoute";
