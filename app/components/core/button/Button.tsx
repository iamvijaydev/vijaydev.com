import type { DetailedHTMLProps, ButtonHTMLAttributes, ReactNode } from "react";

export interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  label: string;
  icon?: ReactNode | undefined;
  postIcon?: ReactNode | undefined;
  as?: "Filled" | "Tonal" | "Text" | "Icon" | "Menu";
  ellipsis?: boolean;
}

export const getButtonClassName = (props: Pick<Props, "as" | "icon" | "postIcon">) => {
  const { as, icon, postIcon } = props;
  let className = "height-tight button ";

  if (as === "Filled") {
    className += "as-filled";
  }
  if (as === "Tonal") {
    className += "as-tonal";
  }
  if (as === "Text") {
    className += "as-text";
  }
  if (as === "Icon") {
    className += "as-icon";
  }
  if (as === "Menu") {
    className += "as-menu";
  }

  if (icon || postIcon) {
    className += " with-icon";
  }

  return className;
};

export const Button = (props: Props) => {
  const {
    label,
    icon,
    postIcon,
    className: baseClassName = "",
    type = "button",
    ellipsis = false,
    ...rest
  } = props;
  const className = baseClassName + " " + getButtonClassName(props);

  return (
    <button type={type} {...rest} className={className}>
      {icon ? <span className="icon">{icon}</span> : null}
      <span className={`txt${ellipsis ? ' ellipsis' : ''}`}>{label}</span>
      {postIcon ? <span className="icon post-icon">{postIcon}</span> : null}
    </button>
  );
};
