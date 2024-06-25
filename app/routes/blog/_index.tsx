import { useBlogContext, LinkCard, H3 } from "main";
import { MetaLink, Meta } from "~types";

export const links: MetaLink[] = [
  {
    rel: "prefetch",
    href: "/home",
  },
];

export const meta: Meta[] = [
  { title: "Blog | Vijay Dev" },
  {
    name: "description",
    content: "Blog posts",
  },
]

export const RouteComponent = () => {
  const store = useBlogContext();

  return (
    <div>
      {
        store.state.list.map((item) => (
          <LinkCard key={item.pathname} href={item.pathname}>
            <H3>{item.title}</H3>
            <p>{item.description}</p>
          </LinkCard>
        ))
      }
    </div>
  );
}

RouteComponent.displayName = "BlogRoute";
