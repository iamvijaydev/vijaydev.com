import { type BreadcrumbNode, Breadcrumb } from "~components/core/Breadcrumb";
import { H1 } from "~components/core/Heading";
import { HeadingDescription } from "~components/core/HeadingDescription";
import { Label } from "~components/core/Label";
import { Text } from '~components/core/text/Text';

export interface Props {
  breadcrumbNodes?: BreadcrumbNode[];
  title: string;
  description: string;
  published?: string;
  updated?: string;
  readTime?: string;
}

export const Masthead = ({
  breadcrumbNodes,
  title,
  description,
  published,
  updated,
  readTime,
}: Props) => {
  return (
    <header className="col-12">
      {breadcrumbNodes?.length ? <Breadcrumb nodes={breadcrumbNodes} /> : null}
      <Text as="h1">{title}</Text>
      <HeadingDescription className="mb-2xs">{description}</HeadingDescription>
      {published && readTime ? (
        <div className="flex flex-wrap gap-xs mb-2xl">
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
    </header>
  );
};
