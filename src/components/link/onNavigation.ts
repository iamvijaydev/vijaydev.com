import type {
  MouseEvent as ReactMouseEvent,
  TouchEvent as ReactTouchEvent,
} from "react";
import { loadPageComponent } from "main";

export const onNavigation =
  (href: string = "/", onClick?: (e: any) => void) =>
  (
    e:
      | ReactMouseEvent<HTMLAnchorElement, MouseEvent>
      | ReactTouchEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();

    onClick && onClick(e);

    if (href.indexOf("#") > -1) {
      const element = document.querySelector(href)!;

      element && element.scrollIntoView({ behavior: "smooth" });

      return;
    }

    if (href) {
      void loadPageComponent(href);
    }
  };
