import { useRouteContext } from "main";
import { Link } from "~components/core/link/Link";

export const MenuItems = () => {
  const {
    state: { pathname },
  } = useRouteContext();
  const isActive = (name: string) => pathname.startsWith(name);

  return (
    <>
      {[
        { path: "/about", text: "About" },
        {
          path: "/featured",
          text: "Featured",
        },
        {
          path: "/blog",
          text: "Blog",
        },
        {
          path: "/learn",
          text: "Learn",
        },
      ].map(({ path, text }) => (
        <Link
          href={path}
          textProps={{ variant: "label" }}
          isActive={isActive(path)}
        >
          {text}
        </Link>
      ))}
    </>
  );
};
