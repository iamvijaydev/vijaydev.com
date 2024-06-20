export const Script = () => {
  return (
    <script
      type="module"
      dangerouslySetInnerHTML={{
        __html: `import { hydrate } from "main";hydrate();`,
      }}
    />
  );
};
