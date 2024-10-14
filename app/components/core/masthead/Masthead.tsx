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
  let styles = "py-3xl";
  const gradient = branding === "primary" || branding === "secondary";
  const headStyles = branding ? "pt-s mb-3xs" : "mb-3xs";
  const descStyles = branding ? "w-40ch pb-s" : "";

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
        gradient={gradient}
        branding={branding}
        center={center}
        className={headStyles}
      >
        {title}
      </Text>
      <Text
        as="div"
        variant="description"
        balance
        gradient={gradient}
        branding={branding}
        center={center}
        className={descStyles}
      >
        {description}
      </Text>
      {published && readTime ? (
        <div className="flex flex-wrap gap-m mt-s">
          <Label title={`Last update on: ${published}`}>
            Published: {published}
          </Label>
          <Label aria-hidden="true">•</Label>
          {updated ? (
            <>
              <Label title={`Last update on: ${updated}`}>
                Updated: {updated}
              </Label>
              <Label aria-hidden="true">•</Label>
            </>
          ) : null}
          <Label title={`${readTime}ing time`}>{readTime}</Label>
        </div>
      ) : null}
    </div>
  );
};
