import {
  PropsWithChildren,
  ReactNode,
  DetailedHTMLProps,
  HTMLAttributes,
} from "react";
import { Link } from "~components/core/link/Link";
import { Text } from "~components/core/text/Text";

export interface BreadcrumbNode {
  label: string;
  href: string;
}

export interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  nodes: BreadcrumbNode[];
}

export const Breadcrumb = (props: PropsWithChildren<Props>) => {
  const { nodes, className, ...rest } = props;

  return (
    <div
      className="none xl:flex align-center gap-3xs mb-2xs"
      title="Breadcrumb"
      aria-label="Breadcrumb"
      {...rest}
    >
      {nodes.reduce<ReactNode[]>((acc, item, index) => {
        const node = (
          <Link
            href={item.href}
            key={index + "-b"}
            textProps={{ variant: "label" }}
          >
            {item.label}
          </Link>
        );

        return index === 0
          ? acc.concat(node)
          : acc.concat(
              <svg
                key={index + "-a"}
                role="img"
                aria-hidden="true"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                className="dim-fill"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.22 4.22a.75.75 0 000 1.06L8.94 8l-2.72 2.72a.75.75 0 101.06 1.06l3.25-3.25a.75.75 0 000-1.06L7.28 4.22a.75.75 0 00-1.06 0z"
                ></path>
              </svg>,
              node
            );
      }, [])}
    </div>
  );
};
