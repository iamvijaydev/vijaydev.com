import { useState } from "react";
import { useIsomorphicEffect } from "~hooks/useIsomorphicEffect";
import { Button } from "~components/core/button/Button";

export const Theming = () => {
  const schemeLsKey = "__vj_theme_scheme";
  const hueLsKey = "__vj_theme_hue";

  const [scheme, setScheme] = useState("auto");
  const [hue, setHue] = useState("green");

  useIsomorphicEffect(() => {
    setScheme(localStorage.getItem(schemeLsKey) ?? "auto");
    setHue(localStorage.getItem(schemeLsKey) ?? "green");
  }, []);

  const onSchemeChange = (value: string) => () => {
    setScheme(value);
    document.documentElement.setAttribute("color-scheme", value);
    localStorage.setItem(schemeLsKey, value);
  };
  const onHueChange = (value: string) => () => {
    setHue(value);
    document.documentElement.setAttribute("color-hue", value);
    localStorage.setItem(hueLsKey, value);
  };

  return (
    <div>
      <div className="flex gap-s mb-s">
        <Button
          onClick={onSchemeChange("auto")}
          isActive={scheme === "auto"}
          label="Auto"
          icon="routine"
        />
        <Button
          onClick={onSchemeChange("light")}
          isActive={scheme === "light"}
          label="Light"
          icon="light_mode"
        />
        <Button
          onClick={onSchemeChange("dark")}
          isActive={scheme === "dark"}
          label="Dark"
          icon="dark_mode"
        />
      </div>
      <div>
        <button onClick={onHueChange("red")} disabled={hue === "red"}>
          red
        </button>
        <button onClick={onHueChange("pink")} disabled={hue === "pink"}>
          pink
        </button>
        <button onClick={onHueChange("purple")} disabled={hue === "purple"}>
          purple
        </button>
        <button onClick={onHueChange("violet")} disabled={hue === "violet"}>
          violet
        </button>
        <button onClick={onHueChange("indigo")} disabled={hue === "indigo"}>
          indigo
        </button>
        <button onClick={onHueChange("blue")} disabled={hue === "blue"}>
          blue
        </button>
        <button onClick={onHueChange("cyan")} disabled={hue === "cyan"}>
          cyan
        </button>
        <button onClick={onHueChange("teal")} disabled={hue === "teal"}>
          teal
        </button>
        <button onClick={onHueChange("green")} disabled={hue === "green"}>
          green
        </button>
        <button onClick={onHueChange("lime")} disabled={hue === "lime"}>
          lime
        </button>
        <button onClick={onHueChange("yellow")} disabled={hue === "yellow"}>
          yellow
        </button>
        <button onClick={onHueChange("orange")} disabled={hue === "orange"}>
          orange
        </button>
      </div>
    </div>
  );
};
