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
  `import RouteContentComponent, { matter, tableOfContents as toc } from '${source}';
import { RouteComponent as BaseRouteComponent } from '${template}';

export { links } from '${template}';

export const meta = ([
  { title: matter.title },
  {
    name: "description",
    content: matter.description,
  },
]);

export const RouteComponent = () => {
  return (
    <BaseRouteComponent pathname="${pathname}" parentPathname="${parentPathname}" toc={toc}>
      <RouteContentComponent />
    </BaseRouteComponent>
  );
};

RouteComponent.displayName = "${getComponentName(title)}Route";
`;
