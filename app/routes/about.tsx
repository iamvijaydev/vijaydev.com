import { MetaLink, Meta } from "~types";

export const links: MetaLink[] = [
  {
    rel: "prefetch",
    href: "/home",
  }
];

export const meta: Meta[] = [
  { title: "About | vijaydev.com" },
  {
    name: "description",
    content: "About Vijay Dev",
  },
];


export const RouteComponent = () => {
  return <div>About</div>
}

RouteComponent.displayName = "AboutRoute";