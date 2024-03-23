import type { MetaProps } from "types";
import { Breadcrumb, ContentGrid, Button } from "main";

export const metaProps: MetaProps = {
  pathname: "/about",
  permalink: "/about.html",
  title: "About",
  description: "Place the about meta description text here",
};

export const PageComponent = () => {
  return (
    <main className="content-grid pt-s">
      <div className="col-12">
        <Breadcrumb
          className="mb-l"
          nodes={[
            { href: "/", label: "Home" },
            { href: "/learn", label: "Learn" },
            {
              href: `/learn/404`,
              label: "This is a topic",
            },
            { label: "This is a chapter" },
          ]}
        />

        <p className="text-display mt-xl">
          Data structures for Frontend Engineering
        </p>
        <p className="text-display-desc pb-xl">
          Learn how different data structures works
        </p>

        <p className="text-title mt-xl pb-s">Implement without arrays</p>
        <p className="text-body pb-s">
          Site config is where you can define the global settings of the site.
          App config options define settings that apply to every VitePress site,
          regardless of what theme it is using. For example, the base directory
          or the title of the site.
        </p>
        <p className="text-body pb-s">
          The quick fox jumped over the lazy dog.
        </p>

        <p className="text-title mt-xl pb-s">Implement without arrays</p>
        <p className="text-body pb-s">
          Site config is where you can define the global settings of the site.
          App config options define settings that apply to every VitePress site,
          regardless of what theme it is using. For example, the base directory
          or the title of the site.
        </p>
        <p className="text-body pb-s">
          The quick fox jumped over the lazy dog.
        </p>

        <div className="flex justify-center mt-xl gapx-s">
          <Button as="Filled" label="Take action" />
          <Button disabled as="Filled" label="Take action" />
          <Button as="Tonal" label="Take action" />
          <Button as="Text" label="Take action" />
        </div>
      </div>
    </main>
  );
};
