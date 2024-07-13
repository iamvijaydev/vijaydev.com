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
  isFocusVisible?: boolean;
  isActive?: boolean;
}

export const getButtonClassName = (props: Pick<Props, "as" | "icon" | "postIcon" | "isActive">) => {
  const { as, icon, postIcon, isActive } = props;
  let className = "button secondary-container focus-visible flex align-center gap-2xs";

  if (isActive) {
    className += " active";
  }

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
    isActive,
    ...rest
  } = props;
  const className = baseClassName + " " + getButtonClassName(props);

  return (
    <button type={type} {...rest} className={className}>
      {icon ? <span className="icon text label material-symbols-outlined">{icon}</span> : null}
      <span className={`text label${ellipsis ? ' ellipsis' : ''}`}>{label}</span>
      {postIcon ? <span className="icon text label material-symbols-outlined">{postIcon}</span> : null}
    </button>
  );
};
