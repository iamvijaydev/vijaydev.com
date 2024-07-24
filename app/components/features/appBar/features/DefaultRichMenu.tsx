import { useState } from "react";
import {
  useFloating,
  useClick,
  useDismiss,
  useRole,
  useListNavigation,
  useInteractions,
  FloatingFocusManager,
  useTypeahead,
  offset,
  flip,
  size,
  autoUpdate,
  FloatingPortal,
} from "@floating-ui/react";

import { Button } from "~components/core/button/Button";
import { Theming } from "./Theming";
import { MenuItems } from "./MenuItems";

export const DefaultRichMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { refs, floatingStyles, context } = useFloating<HTMLElement>({
    placement: "bottom-start",
    open: isOpen,
    onOpenChange: setIsOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(5),
      flip({ padding: 10 }),
      size({
        apply({ rects, elements, availableHeight }) {
          Object.assign(elements.floating.style, {
            maxHeight: `${availableHeight}px`,
            minWidth: `${rects.reference.width}px`,
          });
        },
        padding: 10,
      }),
    ],
  });

  const click = useClick(context, { event: "mousedown" });
  const dismiss = useDismiss(context, { ancestorScroll: true});
  const role = useRole(context, { role: "dialog" });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    dismiss,
    role,
    click,
  ]);

  return (
    <nav className="app-bar__height flex flex-end align-center gap-m">
      <MenuItems />
      <span className="text label dim">|</span>
      <Button
        label="Theme"
        icon="palette"
        isActive={isOpen}
        postIcon={isOpen ? "arrow_drop_up" : "arrow_drop_down"}
        ref={refs.setReference}
        {...getReferenceProps()}
      />
      {isOpen && (
        <FloatingPortal>
          <FloatingFocusManager context={context} modal={false}>
            <div
              ref={refs.setFloating}
              style={{
                ...floatingStyles,
              }}
              className="theme-options surface-container"
              {...getFloatingProps()}
            >
              <Theming />
            </div>
          </FloatingFocusManager>
        </FloatingPortal>
      )}
    </nav>
  );
};
