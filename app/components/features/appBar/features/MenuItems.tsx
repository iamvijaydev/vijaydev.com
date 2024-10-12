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
        {
          path: "/featured",
          text: "Featured",
        },
        {
          path: "/technical",
          text: "Technical",
        },
        {
          path: "/fiction",
          text: "Fiction",
        },
      ].map(({ path, text }) => (
        <Link
          key={path}
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
