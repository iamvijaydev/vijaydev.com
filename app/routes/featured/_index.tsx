import { MetaLink, Meta } from "~types";
import { Masthead } from "main";

export const links: MetaLink[] = [
  {
    rel: "prefetch",
    href: "/home",
  },
];

export const meta: Meta[] = [
  {
    name: "title",
    content: "Featured projects",
  },
  {
    name: "description",
    content: "All the featured projects that I have worked on.",
  },
];

export const RouteComponent = () => {
  return (
    <div>
      <Masthead
        title="Featured projects"
        description="I build world class web apps for enterprise products and services"
        branding="secondary"
      />
      <p>list</p>
    </div>
  );
};

RouteComponent.displayName = "FeaturedRoute";
