import { MetaLink, Meta } from "~types";
import { Link, Button } from "main";

export const links: MetaLink[] = [
  {
    rel: "prefetch",
    href: "/home",
  },
];

export const meta: Meta[] = [
  { title: "About | vijaydev.com" },
  {
    name: "description",
    content: "About Vijay Dev",
  },
];

export const RouteComponent = () => {
  return (
    <div>
      <div>About</div>
      <div className="my-l">
        <Link href="/home">Home</Link>
      </div>
      <div className="my-l">
        <Button label="Filled" as="Filled" />
        <Button label="Filled" as="Filled" disabled />
        <Button label="Tonal" as="Tonal" />
        <Button label="Text" as="Text" />
        <Button label="Icon" as="Icon" />
        <Button label="Menu" as="Menu" />

      </div>
    </div>
  );
};

RouteComponent.displayName = "AboutRoute";
