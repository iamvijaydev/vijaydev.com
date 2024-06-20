import type {
  DetailedHTMLProps,
  AnchorHTMLAttributes,
  MouseEvent as ReactMouseEvent,
  TouchEvent as ReactTouchEvent,
} from "react";
import { useLoadRouteCommand } from "~commands/useLoadRoute";

export type ClickEvent =
  | ReactMouseEvent<HTMLAnchorElement, MouseEvent>
  | ReactTouchEvent<HTMLAnchorElement>;

export interface AnchorAttributes
  extends Omit<
    DetailedHTMLProps<
      AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >,
    "href"
  > {
  to: string;
  onClick?: (e: ClickEvent) => void;
  isActive?: boolean;
}

export const Link = (props: AnchorAttributes) => {
  const loadRoute = useLoadRouteCommand();

  const {
    isActive,
    onClick: propOnClick,
    to,
    children,
    className: propClassName,
    ...anchorProps
  } = props;

  const className = `${propClassName}${isActive ? " active" : ""}`;

  const onClick = (
    e:
      | ReactMouseEvent<HTMLAnchorElement, MouseEvent>
      | ReactTouchEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();

    propOnClick && propOnClick(e);

    if (to.indexOf(window.location.pathname) > -1 && to.indexOf("#") > -1) {
      const element = document.querySelector(to)!;

      element && element.scrollIntoView({ behavior: "smooth" });
      return;
    }

    if (to) {
      void loadRoute(to);
    }
  };

  return (
    <a
      className={className}
      tabIndex={0}
      href={to}
      onClick={onClick}
      {...anchorProps}
    >
      {children}
    </a>
  );
};
