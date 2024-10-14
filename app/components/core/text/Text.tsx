import { PropsWithChildren } from "react";

export type BaseTextProps =
  React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLParagraphElement>,
      HTMLParagraphElement
    > &
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    > &
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLSpanElement>,
      HTMLSpanElement
    > &
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >;

export interface TextProps extends BaseTextProps {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "span" | "div";
  variant?:
    | "display"
    | "description"
    | "heading"
    | "title"
    | "title-4"
    | "title-5"
    | "body"
    | "label";
  className?: string;
  center?: boolean;
  right?: boolean;
  height?: "tight" | "compact" | "normal" | "relaxed";
  balance?: boolean;
  ellipsis?: boolean;
  smaller?: boolean;
  dim?: boolean;
  gradient?: boolean;
  branding?: "vertical" | "slant" | "slant-flip";
}

const classSet = new Map<string, string>([
  ["h1", "display"],
  ["h2", "heading"],
  ["h3", "title"],
  ["h4", "title-4"],
  ["h5", "title-5"],
  ["p", "body"],
  ["span", "label"],
]);

const height = new Map<TextProps["height"], string>([
  ["tight", "tight"],
  ["compact", "compact"],
  ["normal", "normal"],
  ["relaxed", "relaxed"],
]);

export const getTextClassName = (props: Partial<TextProps>) => {
  let className = "";

  if (props.className) className += props.className + " ";
  className += `text ${props.variant ?? classSet.get(props.as!)!}`;
  if (props.height) className += ` ${height.get(props.height)}`;
  if (props.gradient) className += " gradient";
  if (props.gradient && props.branding)
    className += ` ${String(props.branding)}`;
  if (props.ellipsis) className += " ellipsis";
  if (props.balance) className += " balance";
  if (props.dim) className += " dim";
  if (props.smaller) className += " smaller";
  if (props.right) className += " right";
  if (props.center) className += " center";

  return className;
};

export const Text = (props: PropsWithChildren<TextProps>) => {
  const {
    as: Component = "p",
    variant,
    className: base,
    gradient,
    branding,
    ellipsis,
    balance,
    dim,
    smaller,
    right,
    center,
    height,
    children,
    ...rest
  } = props;

  const className = getTextClassName({
    variant,
    gradient,
    branding,
    ellipsis,
    balance,
    dim,
    smaller,
    right,
    center,
    height,
    as: Component,
    className: base,
  });

  return (
    <Component className={className} {...rest}>
      {children}
    </Component>
  );
};
