import { MetaLink, Meta } from "~types";
import { Link, Button, Masthead, Cell, Grid } from "main";

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
      <Grid as="div">
        <Cell size={12}>
          <div className="my-l">
            <Link href="/home">Home</Link>
          </div>
          <a className="secondary-container" href="#">Menu</a>
          <div className="my-l">
            <Button label="Filled" as="Filled" />
            <Button label="Filled" as="Filled" disabled />
            <Button label="Tonal" as="Tonal" />
            <Button label="Text" as="Text" />
            <Button label="Icon" as="Icon" />
            <Button label="Menu" as="Menu" />
          </div>
        </Cell>
      </Grid>
    </div>
  );
};

RouteComponent.displayName = "AboutRoute";
