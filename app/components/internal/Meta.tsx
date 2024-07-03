import { useHtmlHeadContext } from "~store/htmlHead/context";
import { Meta as MetaType } from "~types";

export const Meta = () => {
  const { state } = useHtmlHeadContext();

  return (
    <>
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
