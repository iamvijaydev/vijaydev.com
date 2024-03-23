import { Logo, Link, Separator } from "main";
import { List } from "./features/List";

export const Footer = (): JSX.Element => {
  return (
    <footer className="full-width app-bar bt b-surface py-xl text-label body-line-height">
      <div className="content-grid">
        <div className="col-12 lg:col-3 mb-m lg:mb-l">
          <Logo className="md:col-4 mb-2xs" />
          <p className="md:col-8">
            Vijay Dev is a web architect with over 14 years of industry
            experience. He works with world class enterprise clients to
            architect and implement apps for the web.
          </p>
        </div>

        <List
          title="Case study"
          readMoreLink="/"
          list={[
            {
              id: "1",
              href: "/",
              children: "Three layer engine",
            },
            {
              id: "2",
              href: "/",
              children: "Canvas editor",
            },
            {
              id: "3",
              href: "/",
              children: "Night diary",
            },
          ]}
        />

        <List
          title="Learn"
          readMoreLink="/"
          list={[
            {
              id: "1",
              href: "/",
              children: "Three layer engine",
            },
            {
              id: "2",
              href: "/",
              children: "Canvas editor",
            },
            {
              id: "3",
              href: "/",
              children: "Night diary",
            },
          ]}
        />
        <List
          title="Blog"
          readMoreLink="/"
          list={[
            {
              id: "1",
              href: "/",
              children: "Three layer engine",
            },
            {
              id: "2",
              href: "/",
              children: "Canvas editor",
            },
            {
              id: "3",
              href: "/",
              children: "Night diary",
            },
          ]}
        />

        <Separator
          type="Horizontal"
          color="Surface"
          className="col-12 mb-m md:mb-l"
        />

        <p className="col-12 md:col-4 pb-2xs">© 2023. All rights reserved.</p>

        <p className="lg:text-right col-12 md:col-8">
          Built with a custom framework. Hosted on{" "}
          <Link
            href="https://github.com/iamvijaydev"
            target="_blank"
            rel="external"
          >
            GitHub ↗
          </Link>
          . Deployed on{" "}
          <Link
            href="https://pages.cloudflare.com"
            target="_blank"
            rel="external"
          >
            Cloudflare ↗
          </Link>
          .
        </p>

        {/* <FlowField<HTMLDivElement>
        className='absolute position-fill z-level-1'
        colorVar='--md-sys-color-surface-variant'
      /> */}
      </div>
    </footer>
  );
};
