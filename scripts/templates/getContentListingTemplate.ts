import { getComponentName } from '../utils/getComponentName.ts';

export type ContentListingTemplateProps = {
  template: string;
  title: string;
  description: string;
  pathname: string;
}

export const getContentListingTemplate = ({
  template,
  title,
  description,
  pathname,
}: ContentListingTemplateProps) =>
`import { RouteComponent as BaseRouteTemplateComponent } from '${template}';

export { links } from '${template}';

export const meta = ([
  { title: '${title}' },
  {
    name: "description",
    content: '${description}',
  },
]);

export const RouteComponent = () => {
  return (
    <BaseRouteTemplateComponent pathname="${pathname}" />
  );
};

RouteComponent.displayName = "${getComponentName(title)}Route";
`;
