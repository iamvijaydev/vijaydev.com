import type {
  DetailedHTMLProps,
  AnchorHTMLAttributes,
  MouseEvent as ReactMouseEvent,
  TouchEvent as ReactTouchEvent,
} from "react";
import { useLoadRouteCommand } from "~commands/useLoadRoute";
import { type TextProps, getTextClassName, Text } from "~components/core/text/Text";

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
  href: string;
  onClick?: (e: ClickEvent) => void;
  isActive?: boolean;
  textProps?: Partial<TextProps>;
  isAux?: boolean;
}

export const Link = (props: AnchorAttributes) => {
  const loadRoute = useLoadRouteCommand();

  const {
    isActive,
    onClick: propOnClick,
    href,
    children,
    className: propClassName,
    textProps,
    isAux,
    ...anchorProps
  } = props;

  const className = [];

  if (propClassName) {
    className.push(propClassName);
  }
  if (textProps) {
    className.push(getTextClassName(textProps));
  }
  className.push('link');
  if (isActive) {
    className.push('active');
  }
  if (isAux) {
    className.push('aux');
  }

  const onClick = (
    e:
      | ReactMouseEvent<HTMLAnchorElement, MouseEvent>
      | ReactTouchEvent<HTMLAnchorElement>
  ) => {
    if (anchorProps.target === '_blank') {
      propOnClick && propOnClick(e);
      return;
    }

    e.preventDefault();

    propOnClick && propOnClick(e);

    if (href.indexOf(window.location.pathname) > -1 && href.indexOf("#") > -1) {
      const element = document.querySelector(href)!;

      element && element.scrollIntoView({ behavior: "smooth" });
      return;
    }

    if (href) {
      void loadRoute(href);
    }
  };

  return (
    <a
      className={className.join(' ')}
      tabIndex={0}
      href={href}
      onClick={onClick}
      {...anchorProps}
    >
      {children}
    </a>
  );
};
