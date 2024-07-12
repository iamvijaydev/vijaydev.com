const scripts = [
  'import {hydrate} from "main"',
  'hydrate()',
  'const scheme = localStorage.getItem("__vj_theme_scheme")',
  'const hue = localStorage.getItem("__vj_theme_hue")',
  'if (scheme !== "auto") document.documentElement.setAttribute("color-scheme", scheme)',
  'document.documentElement.setAttribute("color-hue", hue ?? "green")',
];

export const Script = () => {
  return (
    <script
      type="module"
      dangerouslySetInnerHTML={{
        __html: scripts.join(';'),
      }}
    />
  );
};
