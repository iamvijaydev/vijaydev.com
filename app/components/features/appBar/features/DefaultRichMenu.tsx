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
    if (buttonRef.current && infoRef.current) {
      computePosition(buttonRef.current, infoRef.current, {
        placement: "bottom",
        middleware: [offset(20), flip(), shift({ padding: 0 })],
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
    buttonRef.current && buttonRef.current.focus();
  };

  const toggle = () => {
    if(isOpen && buttonRef.current) buttonRef.current.focus();
    setIsOpen(value => !value);
    update();
  };

  useIsomorphicEffect(() => {
    const controller = new AbortController();
    const signal = {
      signal: controller.signal,
    };

    buttonRef.current?.addEventListener("click", toggle, signal);

    if (isOpen) {
      const allButtons = infoRef.current!.querySelectorAll("button");
      const firstButton = allButtons[0];
      const lastButton = allButtons[allButtons.length - 1];

      firstButton.focus();

      window.addEventListener("resize", close, signal);
      window.addEventListener("scroll", close, signal);
      window.addEventListener(
        "keydown",
        (event) => {
          if (event.key === "Escape") {
            close();
            return;
          }

          if (event.key === "Tab") {
            if (event.shiftKey) {
              if (document.activeElement === firstButton) {
                lastButton.focus();
                event.preventDefault();
              }
            } else {
              if (document.activeElement === lastButton) {
                firstButton.focus();
                event.preventDefault();
              }
            }
          }
        },
        signal
      );
      window.addEventListener(
        "click",
        (event) => {
          if (
            !buttonRef.current?.contains(event.target as Node) &&
            !infoRef.current?.contains(event.target as Node)
          ) {
            close();
          }
        },
        signal
      );
    }

    return () => {
      controller.abort();
    };
  }, [buttonRef.current, isOpen]);

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
      />
      {createPortal(
        <div
          ref={infoRef}
          style={{ display: isOpen ? "block" : "none" }}
          className="theming surface-container"
        >
          <Theming />
        </div>,
        document.body
      )}
    </nav>
  );
};
