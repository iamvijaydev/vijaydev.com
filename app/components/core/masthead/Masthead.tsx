import { type BreadcrumbNode, Breadcrumb } from "~components/core/Breadcrumb";
import { Label } from "~components/core/label/Label";
import { Text } from "~components/core/text/Text";

export interface Props {
  breadcrumbNodes?: BreadcrumbNode[];
  title: string;
  description: string;
  published?: string;
  updated?: string;
  readTime?: string;
  isTopLevel?: boolean;
}

export const Masthead = ({
  breadcrumbNodes,
  title,
  description,
  published,
  updated,
  readTime,
  isTopLevel = false,
}: Props) => {
  let styles = "py-3xl";
  const gradient = isTopLevel;
  const headStyles = isTopLevel ? "pt-s mb-3xs" : "mb-3xs";
  const descStyles = isTopLevel ? "w-40ch pb-s" : "";

  if (isTopLevel) {
    styles += " align-center";
  }

  return (
    <div className={`flex flex-column ${styles}`}>
      {breadcrumbNodes?.length ? <Breadcrumb nodes={breadcrumbNodes} /> : null}
      <Text
        as="h1"
        balance
        gradient={gradient}
        branding="vertical"
        center={isTopLevel}
        className={headStyles}
      >
        {title}
      </Text>
      <Text
        as="div"
        variant="description"
        balance
        gradient={gradient}
        branding="slant"
        center={isTopLevel}
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
