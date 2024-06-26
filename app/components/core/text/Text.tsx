import { PropsWithChildren } from "react";

export type TextProps = {
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
  gradient?: boolean;
  ellipsis?: boolean;
  balance?: boolean;
  dim?: boolean;
  smaller?: boolean;
  right?: boolean;
  center?: boolean;
};

const classSet = new Map<string, string>([
  ["h1", "display"],
  ["h2", "heading"],
  ["h3", "title"],
  ["h4", "title-4"],
  ["h5", "title-5"],
  ["p", "body"],
  ["span", "label"],
]);

export const getTextClassName = (props: Partial<TextProps>) => {
  let className = "";

  if (props.className) className += props.className + " ";
  className += `text ${props.variant ?? classSet.get(props.as!)!}`;
  if (props.gradient) className += " gradient";
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
    ellipsis,
    balance,
    dim,
    smaller,
    right,
    center,
    children,
    ...rest
  } = props;

  const className = getTextClassName({
    variant,
    gradient,
    ellipsis,
    balance,
    dim,
    smaller,
    right,
    center,
    as: Component,
    className: base,
  });

  return (
    <Component className={className} {...rest}>
      {children}
    </Component>
  );
};
