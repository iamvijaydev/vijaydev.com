import { useBlogContext, useLearnContext } from "main";
import { MetaLink, Meta } from "~types";

export const links: MetaLink[] = [
  {
    rel: "prefetch",
    href: "/featured",
  },
  {
    rel: "prefetch",
    href: "/blog",
  },
  {
    rel: "prefetch",
    href: "/learn",
  },
];

export const meta: Meta[] = [
  { title: "Vijay Dev" },
  {
    name: "description",
    content: "Welcome to the personal website of Vijay Dev.",
  },
];

export const RouteComponent = () => {
  const blogStore = useBlogContext();
  const learnStore = useLearnContext();

  return (
    <div>
      <h1>Home</h1>
      <p>Blog count: {blogStore.state.list.length}</p>
      <p>Learn count: {learnStore.state.list.size}</p>
    </div>
  );
}

RouteComponent.displayName = "HomeRoute";
