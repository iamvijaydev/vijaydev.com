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
    content: "Frivolous fiction",
  },
  {
    name: "description",
    content: "Frivolous fiction posts",
  },
]

export const RouteComponent = () => {
  const store = usePostContext();

  return (
    <div className="bg-linear-grad1 theme-hue">
      <Masthead
        title="Frivolous Fiction"
        description="Some something"
        isTopLevel
      />
      <h3>List</h3>
      {
        store.fiction.state.list.map((item) => (
          <LinkCard key={item.pathname} href={item.pathname}>
            <Text as="h3">{item.title}</Text>
            <p>{item.description}</p>
          </LinkCard>
        ))
      }
    </div>
  );
}

RouteComponent.displayName = "FictionRoute";