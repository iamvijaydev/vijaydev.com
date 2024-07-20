import { useHtmlHeadContext } from "~store/htmlHead/context";
import { Meta as MetaType } from "~types";

export const Meta = () => {
  const { state } = useHtmlHeadContext();

  return (
    <>
      <meta name="robots" content="noindex, nofollow" />
      <meta charSet="utf-8" />
      <meta name="theme-color" content="#226DAA" />
      {/* content="index, follow" */}
      {state.meta.map((meta) =>
        meta.name === "title" ? (
          <title key={meta.name}>{meta.content}</title>
        ) : (
          <meta key={meta.name} name={meta.name} content={meta.content} />
        )
      )}
    </>
  );
};
