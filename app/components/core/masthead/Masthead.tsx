import { type BreadcrumbNode, Breadcrumb } from "~components/core/Breadcrumb";
import { Label } from "~components/core/Label";
import { Text } from "~components/core/text/Text";
import { Grid } from "~components/core/grid/Grid";

export interface Props {
  breadcrumbNodes?: BreadcrumbNode[];
  title: string;
  description: string;
  branding?: 'primary' | 'secondary' | 'none';
  published?: string;
  updated?: string;
  readTime?: string;
}

export const Masthead = ({
  breadcrumbNodes,
  title,
  description,
  branding = 'none',
  published,
  updated,
  readTime,
}: Props) => {
  const padding = branding === 'none' ? 'py-2xl' : 'py-3xl';
  const center = branding !== 'none';
  const gradient = branding === 'primary';
  const gridAs = branding === 'none' ? 'header' : 'div';

  return (
    <Grid as={gridAs} size={12} className={padding}>
      {breadcrumbNodes?.length ? <Breadcrumb nodes={breadcrumbNodes} /> : null}
      <Text as="h1" gradient={gradient} center={center} className={`mb-3xs${gradient ? ' grad-1' : ''}`}>{title}</Text>
      <Text as="div" variant="description" center={center}>
        {description}
      </Text>
      {published && readTime ? (
        <div className="flex flex-wrap gap-xs mt-xl">
          <Label title={`Last update on: ${published}`}>
            Published: {published}
          </Label>
          {updated ? (
            <Label title={`Last update on: ${updated}`}>
              Updated: {updated}
            </Label>
          ) : null}
          <Label title={`${readTime}ing time`}>{readTime}</Label>
        </div>
      ) : null}
    </Grid>
  );
};
