import type { DetailedHTMLProps, AnchorHTMLAttributes } from "react";
import { onNavigation } from "./onNavigation";

export interface AnchorAttributes
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  as?: "a" | "button";
  isActive?: boolean;
}

export const Link = (props: AnchorAttributes) => {
  const {
    as,
    isActive,
    onClick: propOnClick,
    href,
    children,
    className: propClassName,
    ...anchorProps
  } = props;

  let className = "link link-focus-visible p-1";

  if (isActive) {
    className += " active";
  }

  if (as === "button") {
    className = "button as-text as-text-compact";
  }

  className += " " + (propClassName || "");

  const onClick = onNavigation(href, propOnClick);

  return (
    <a
      className={className}
      tabIndex={0}
      href={href}
      onClick={onClick}
      {...anchorProps}
    >
      {as === "button" ? <span className="text">{children}</span> : children}
    </a>
  );
};
