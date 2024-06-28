import { type BreadcrumbNode, Breadcrumb } from "~components/core/Breadcrumb";
import { Label } from "~components/core/Label";
import { Text } from "~components/core/text/Text";
import { Grid } from "~components/core/grid/Grid";

export interface Props {
  breadcrumbNodes?: BreadcrumbNode[];
  title: string;
  description: string;
  branding?: "primary" | "secondary" | "none";
  published?: string;
  updated?: string;
  readTime?: string;
}

export const Masthead = ({
  breadcrumbNodes,
  title,
  description,
  branding = "none",
  published,
  updated,
  readTime,
}: Props) => {
  const padding = branding === "none" ? "py-2xl" : "py-3xl";
  const center = branding !== "none";
  const gradient = branding === "primary" || branding === "secondary";
  const gridAs = branding === "none" ? "header" : "div";

  let titleGrad = " grad-title";
  let labelGrad = "grad-label";

  if (gradient) {
    if (branding === "primary") {
      titleGrad = " grad-primary-title";
      labelGrad = "grad-primary-label";
    }

    if (branding === "secondary") {
      titleGrad = " grad-secondary-title";
      labelGrad = "grad-secondary-label";
    }
  }

  return (
    <Grid as={gridAs} size={12} className={padding}>
      {breadcrumbNodes?.length ? <Breadcrumb nodes={breadcrumbNodes} /> : null}
      <Text
        as="h1"
        gradient
        center={center}
        className={`mb-3xs${titleGrad}`}
      >
        {title}
      </Text>
      <Text
        as="div"
        variant="description"
        gradient
        center={center}
        className={labelGrad}
      >
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
