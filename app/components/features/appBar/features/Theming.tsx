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
      <label className="text label tight theming__label">Change color scheme</label>
      <div className="theming__scheme">
        <ButtonGroup
          buttons={[
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
          ]}
        />
      </div>
      <label className="text label tight theming__label">Change color hue</label>
      <div className="theming__hues">
        {[
          "red",
          "pink",
          "purple",
          "violet",
          "indigo",
          "blue",
          "cyan",
          "teal",
          "green",
          "lime",
          "yellow",
          "orange",
        ].map((color) => (
          <button
            key={color}
            className={`focus-visible ${color}`}
            onClick={onHueChange(color)}
            disabled={hue === color}
            aria-label={`Change to ${color} hue`}
            title={`Change to ${color} hue`}
          >
            <span className="material-symbols-outlined">check</span>
          </button>
        ))}
      </div>
    </div>
  );
};
