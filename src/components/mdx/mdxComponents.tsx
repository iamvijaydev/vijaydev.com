import type { DetailedHTMLProps, HTMLAttributes } from "react";
import { Link } from "main";

export interface HeadingProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
}

const heading = (As: "h1" | "h2" | "h3" | "h4") => {
  const asClassNames = new Map([
    ["h1", "text-heading"],
    ["h2", "bt b-variant text-title mt-l pt-s pb-s"],
    ["h3", "text-title3 mt-m pb-s"],
    ["h4", "text-title4 mt-s pb-s"],
  ]);

  const Heading = (props: HeadingProps) => {
    const { children, ...rest } = props;

    return (
      <As
        {...rest}
        className={`group relative break-words ${asClassNames.get(As)} ${
          props.className ?? ""
        }`}
      >
        {children}
        {As === 'h1' ? null : (
          <Link
            tabIndex={-1}
            href={`#${props.id}`}
            aria-label={`Permalink to "${children}"`}
            className="height-tight heading-permalink"
          >#</Link>
        )}
      </As>
    );
  };

  Heading.displayName = As;

  return Heading;
};

const Paragraph = (
  props: DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  >
) => (
  <p className={`text-body pb-s break-words ${props.className}`}>
    {props.children}
  </p>
);

const Description = (
  props: DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  >
) => (
  <p className={`text-heading-desc ${props.className}`}>
    {props.children}
  </p>
);

export const mdxComponents = {
  a: Link,
  p: Paragraph,
  description: Description,
  h1: heading("h1"),
  h2: heading("h2"),
  h3: heading("h3"),
  h4: heading("h4"),
};
