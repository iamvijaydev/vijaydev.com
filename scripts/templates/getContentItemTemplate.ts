import { getComponentName } from "../utils/getComponentName.ts";

export type ContentItemTemplateProps = {
  source: string;
  template: string;
  title: string;
  pathname: string;
  parentPathname: string;
};

export const getContentItemTemplate = ({
  source,
  template,
  title,
  pathname,
  parentPathname,
}: ContentItemTemplateProps) =>
  `import { MDXProvider } from '@mdx-js/react';
import RouteContentComponent, { matter, tableOfContents as toc } from '${source}';
import { RouteComponent as BaseRouteComponent } from '${template}';
import { mdxComponents } from 'main';

export { links } from '${template}';

export const meta = ([
  {
    name: "title",
    content: matter.title,
  },
  {
    name: "description",
    content: matter.description,
  },
]);

export const RouteComponent = () => {
  return (
    <BaseRouteComponent pathname="${pathname}" parentPathname="${parentPathname}" toc={toc}>
      <RouteContentComponent components={mdxComponents} />
    </BaseRouteComponent>
  );
};

RouteComponent.displayName = "${getComponentName(title)}Route";
`;
