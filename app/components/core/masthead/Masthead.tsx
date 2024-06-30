import { type BreadcrumbNode, Breadcrumb } from "~components/core/Breadcrumb";
import { Label } from "~components/core/label/Label";
import { Text } from "~components/core/text/Text";

export interface Props {
  breadcrumbNodes?: BreadcrumbNode[];
  title: string;
  description: string;
  branding?: "primary" | "secondary";
  published?: string;
  updated?: string;
  readTime?: string;
}

export const Masthead = ({
  breadcrumbNodes,
  title,
  description,
  branding,
  published,
  updated,
  readTime,
}: Props) => {
  const center = branding !== undefined;
  let styles = branding ? "py-2xl" : "py-3xl";
  const descStyles = branding ? "w-40ch" : "";

  if (branding === "primary") {
    styles += " align-center";
  }

  if (branding === "secondary") {
    styles += " align-center";
  }

  return (
    <div className={`flex flex-column ${styles}`}>
      {breadcrumbNodes?.length ? <Breadcrumb nodes={breadcrumbNodes} /> : null}
      <Text
        as="h1"
        balance
        gradient
        branding={branding}
        center={center}
        className="mb-3xs"
      >
        {title}
      </Text>
      <Text
        as="div"
        variant="description"
        balance
        gradient
        branding={branding}
        center={center}
        className={descStyles}
      >
        {description}
      </Text>
      {published && readTime ? (
        <div className="flex flex-wrap gap-xs mt-2xs">
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
    </div>
  );
};
