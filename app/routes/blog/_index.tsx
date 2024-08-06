import { useBlogContext, LinkCard, Text, Masthead } from "main";
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
    content: "Blog posts",
  },
  {
    name: "description",
    content: "Blog posts",
  },
]

export const RouteComponent = () => {
  const store = useBlogContext();

  return (
    <div className="bg-linear-grad theme-hue">
      <Masthead
        title="Blogs"
        description="I build world class web apps for enterprise products and services"
        branding="secondary"
      />
      <h3>List</h3>
      {
        store.state.list.map((item) => (
          <LinkCard key={item.pathname} href={item.pathname}>
            <Text as="h3">{item.title}</Text>
            <p>{item.description}</p>
          </LinkCard>
        ))
      }
    </div>
  );
}

RouteComponent.displayName = "BlogRoute";
