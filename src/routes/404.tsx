import { Meta } from "~types";

export const meta: Meta[] = [
  { title: "Not found" },
  {
    name: "description",
    content: "The page your were looking for doesn't exist.",
  },
];


export const RouteComponent = () => {
  return <p>Not found</p>
}

RouteComponent.displayName = "NotFoundRoute";