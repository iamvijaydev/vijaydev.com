const scripts = [
  'const scheme = localStorage.getItem("__vj_theme_scheme")',
  'const hue = localStorage.getItem("__vj_theme_hue")',
  'if (scheme !== null) document.documentElement.setAttribute("color-scheme", scheme)',
  'if (hue !== null) document.documentElement.setAttribute("color-hue", hue)',
  'import {hydrate} from "main"',
  'hydrate()',
];

export const Script = () => {
  return (
    <script
      defer
      type="module"
      dangerouslySetInnerHTML={{
        __html: scripts.join(';'),
      }}
    />
  );
};
