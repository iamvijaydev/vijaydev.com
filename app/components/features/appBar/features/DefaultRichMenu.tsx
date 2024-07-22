import { Button } from "~components/core/button/Button";
import { Theming } from "../Theming";
import { useState } from "react";
import { MenuItems } from "./MenuItems";

export const DefaultRichMenu = () => {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <nav className="app-bar__height flex flex-end align-center gap-m">
      <MenuItems />
      <span className="text label dim">|</span>
      <Button
        label="Theme"
        icon="palette"
        isActive={isToggle}
        postIcon={isToggle ? "arrow_drop_up" : "arrow_drop_down"}
        onClick={() => setIsToggle((value) => !value)}
      />
      <div style={{ display: isToggle ? "block" : "none" }}>
        <Theming />
      </div>
    </nav>
  );
};
