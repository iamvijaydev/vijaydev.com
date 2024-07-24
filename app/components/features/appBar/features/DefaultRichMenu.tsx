import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import { computePosition, flip, shift, offset } from "@floating-ui/dom";

import { Button } from "~components/core/button/Button";
import { Theming } from "./Theming";
import { MenuItems } from "./MenuItems";
import { useIsomorphicEffect } from "~hooks/useIsomorphicEffect";

export const DefaultRichMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  const update = () => {
    console.log(buttonRef.current, infoRef.current);

    if (buttonRef.current && infoRef.current) {
      computePosition(buttonRef.current, infoRef.current, {
        placement: "bottom",
        middleware: [offset(10), flip(), shift({ padding: 0 })],
      }).then(({ x, y }) => {
        if (infoRef.current) {
          Object.assign(infoRef.current.style, {
            left: `${x}px`,
            top: `${y}px`,
          });
        }
      });
    }
  };

  const close = () => {
    setIsOpen(false);
  };

  const toggle = () => {
    setIsOpen((value) => !value);
    infoRef.current && infoRef.current.focus();
    update();
  };

  useIsomorphicEffect(() => {
    const controller = new AbortController();

    window.addEventListener("resize", update, {
      signal: controller.signal,
    });
    window.addEventListener(
      "scroll",
      () => {
        console.log("scroll");
        close();
      },
      {
        signal: controller.signal,
      }
    );
    window.addEventListener(
      "keydown",
      (event) => {
        if (event.key === "Escape") {
          close();
        }
      },
      {
        signal: controller.signal,
      }
    );
    window.addEventListener(
      "click",
      (event) => {
        if (
          buttonRef.current &&
          infoRef.current &&
          !buttonRef.current.contains(event.target as Node) &&
          !infoRef.current.contains(event.target as Node)
        ) {
          close();
        }
      },
      {
        signal: controller.signal,
      }
    );

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <nav className="app-bar__height flex flex-end align-center gap-m">
      <MenuItems />
      <span className="text label dim">|</span>
      <Button
        label="Theme"
        icon="palette"
        isActive={isOpen}
        postIcon={isOpen ? "arrow_drop_up" : "arrow_drop_down"}
        ref={buttonRef}
        onClick={toggle}
      />
      {createPortal(
        <div
          ref={infoRef}
          style={{ display: isOpen ? "block" : "none" }}
          className="theme-options surface-container"
        >
          <Theming />
        </div>,
        document.body
      )}
    </nav>
  );
};
