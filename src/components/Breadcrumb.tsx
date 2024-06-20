import {
  PropsWithChildren,
  ReactNode,
  DetailedHTMLProps,
  HTMLAttributes,
} from "react";
import { Link } from "~components/Link";

export interface BreadcrumbNode {
  label: string;
  href?: string;
}

export interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  nodes: BreadcrumbNode[];
}

export const Breadcrumb = (props: PropsWithChildren<Props>) => {
  const { nodes, className, ...rest } = props;

  return (
    <div
      {...rest}
      title="Breadcrumb"
      aria-label="Breadcrumb"
      className={`${
        className ?? ""
      } none height-tight xl:flex a-center gapx-3xs text-label text-dim-color mb-2xs`}
    >
      {nodes.reduce<ReactNode[]>((acc, item, index) => {
        const node = item.href ? (
          <Link to={item.href} key={index + "-b"}>
            {item.label}
          </Link>
        ) : (
          <span key={index + "-b"}>{item.label}</span>
        );

        return index === 0
          ? acc.concat(node)
          : acc.concat(
              <svg
                className="text-dim-color"
                key={index + "-a"}
                role="img"
                aria-hidden="true"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
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
