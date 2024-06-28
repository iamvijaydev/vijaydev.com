import { MetaLink, Meta } from "~types";
import { Link, Button, Masthead } from "main";

export const links: MetaLink[] = [
  {
    rel: "prefetch",
    href: "/home",
  },
];

export const meta: Meta[] = [
  {
    name: "title",
    content: "About | vijaydev.com",
  },
  {
    name: "description",
    content: "About Vijay Dev",
  },
];

export const RouteComponent = () => {
  return (
    <div>
      <Masthead
        title="About me"
        description="I build world class web apps for enterprise products and services"
        branding="secondary"
      />
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
