import { useState } from "react";
import { useIsomorphicEffect } from "~hooks/useIsomorphicEffect";

export const Theming = () => {
  const schemeLsKey = "__vj_theme_scheme";
  const schemeAttrKey = "color-scheme";

  const hueLsKey = "__vj_theme_hue";
  const hueAttrKey = "color-hue";

  const [scheme, setScheme] = useState("auto");
  const [hue, setHue] = useState("green");

  useIsomorphicEffect(() => {
    const scheme = localStorage.getItem(schemeLsKey);
    if (scheme) {
      setScheme(scheme);
      if (scheme === "auto") {
        document.documentElement.removeAttribute(schemeAttrKey);
        return;
      }
      document.documentElement.setAttribute(schemeAttrKey, scheme);
    }
    const hue = localStorage.getItem(hueLsKey);
    if (hue) {
      setHue(hue);
      document.documentElement.setAttribute(hueAttrKey, hue);
    }
  }, []);

  const onSchemeChange = (value: string) => () => {
    setScheme(value);
    if (value === "auto") {
      document.documentElement.removeAttribute(schemeAttrKey);
      localStorage.removeItem(schemeLsKey);
      return;
    }
    document.documentElement.setAttribute(schemeAttrKey, value);
    localStorage.setItem(schemeLsKey, value);
  };
  const onHueChange = (value: string) => () => {
    setHue(value);
    document.documentElement.setAttribute(hueAttrKey, value);
    localStorage.setItem(hueLsKey, value);
  };

  return (
    <div>
      <div>
        <button onClick={onSchemeChange("auto")} disabled={scheme === "auto"}>
          auto
        </button>
        <button onClick={onSchemeChange("light")} disabled={scheme === "light"}>
          light
        </button>
        <button onClick={onSchemeChange("dark")} disabled={scheme === "dark"}>
          dark
        </button>
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
