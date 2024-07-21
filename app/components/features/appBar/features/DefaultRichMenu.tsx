import { Link } from "~components/core/link/Link";
import { Button } from "~components/core/button/Button";
import { Theming } from "../Theming";
import { useState } from "react";

export const DefaultRichMenu = () => {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <nav className="app-bar__height flex flex-end align-center gap-m">
      <Link href="/about" textProps={{ variant: "label" }}>
        About
      </Link>
      <Link href="/featured" textProps={{ variant: "label" }}>
        Featured
      </Link>
      <Link href="/blog" textProps={{ variant: "label" }}>
        Blog
      </Link>
      <Link href="/learn" textProps={{ variant: "label" }}>
        Learn
      </Link>
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
