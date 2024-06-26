import { type BreadcrumbNode, Breadcrumb } from "~components/core/Breadcrumb";
import { Label } from "~components/core/Label";
import { Text } from "~components/core/text/Text";
import { Cell, Grid } from "~components/core/grid/Grid";

export interface Props {
  breadcrumbNodes?: BreadcrumbNode[];
  title: string;
  description: string;
  center?: boolean;
  published?: string;
  updated?: string;
  readTime?: string;
}

export const Masthead = ({
  breadcrumbNodes,
  title,
  description,
  center,
  published,
  updated,
  readTime,
}: Props) => {
  return (
    <Grid as="header" size={12} className="py-3xl">
      {breadcrumbNodes?.length ? <Breadcrumb nodes={breadcrumbNodes} /> : null}
      <Text as="h1" gradient center={center} className="mb-3xs grad-1">{title}</Text>
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
