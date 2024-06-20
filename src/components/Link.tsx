import type {
  DetailedHTMLProps,
  AnchorHTMLAttributes,
  MouseEvent as ReactMouseEvent,
  TouchEvent as ReactTouchEvent,
} from "react";

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
  const {
    isActive,
    onClick: propOnClick,
    to,
    children,
    className: propClassName,
    ...anchorProps
  } = props;

  return (
    <a
      tabIndex={0}
      href={to}
      {...anchorProps}
    >
      {children}
    </a>
  );
};
