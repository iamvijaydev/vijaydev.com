import { useState } from "react";
import { useIsomorphicEffect } from "~hooks/useIsomorphicEffect";
import { ButtonGroup } from "~components/core/button/ButtonGroup";

export const Theming = () => {
  const schemeLsKey = "__vj_theme_scheme";
  const hueLsKey = "__vj_theme_hue";

  const [scheme, setScheme] = useState("auto");
  const [hue, setHue] = useState("green");

  useIsomorphicEffect(() => {
    const savedScheme = localStorage.getItem(schemeLsKey);
    const savedHue = localStorage.getItem(hueLsKey);

    if (savedScheme !== null) {
      setScheme(savedScheme);
    }
    if (savedHue !== null) {
      setHue(savedHue);
    }
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
    <div className="flex flex-column">
      <div className="flex gap-s mb-s">
        <ButtonGroup buttons={[
          {
            label: "Auto",
            icon: "routine",
            isActive: scheme === "auto",
            onClick: onSchemeChange("auto"),
          },
          {
            label: "Light",
            icon: "light_mode",
            isActive: scheme === "light",
            onClick: onSchemeChange("light"),
          },
          {
            label: "Dark",
            icon: "dark_mode",
            isActive: scheme === "dark",
            onClick: onSchemeChange("dark"),
          },
        ]} />
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
