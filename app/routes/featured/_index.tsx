import { MetaLink, Meta } from "~types";

export const links: MetaLink[] = [
  {
    rel: "prefetch",
    href: "/home",
  }
];

export const meta: Meta[] = [
  { title: "Featured projects" },
  {
    name: "description",
    content: "All the featured projects that I have worked on.",
  },
];

export const RouteComponent = () => {
  return <div>Featured</div>
}

RouteComponent.displayName = "FeaturedRoute";