import { DetailedHTMLProps, HTMLAttributes } from "react";

export type HeadingAs = "h1" | "h2" | "h3" | "h4" | "h5";
export type PresentedAs = HeadingAs | "body"

export interface HeadingProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  presentAs?: PresentedAs;
}

export const heading = (As: HeadingAs) => {
  const asClassNames = new Map([
    ["h1", "text-display"],
    ["h2", "text-heading"],
    ["h3", "text-title"],
    ["h4", "text-title3"],
    ["h5", "text-title4"],
    ["body", "text-body"],
  ]);

  const Heading = (props: HeadingProps) => {
    const { presentAs, ...rest } = props;
    return (
      <As
        {...rest}
        className={`${asClassNames.get(presentAs ?? As)} ${
          props.className ?? ""
        }`}
      >
        {props.children}
      </As>
    );
  };

  Heading.displayName = As;

  return Heading;
};

export const H1 = heading("h1");
export const H2 = heading("h2");
export const H3 = heading("h3");
export const H4 = heading("h4");
export const H5 = heading("h5");
