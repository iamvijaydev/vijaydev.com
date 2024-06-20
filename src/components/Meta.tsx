import { useHtmlHeadContext } from "~store/htmlHead/context";
import { MetaTitle, Meta as MetaType } from "~types";

const isMetaTitle = (meta: MetaType): meta is MetaTitle =>
  (meta as MetaTitle).title !== undefined;

export const Meta = () => {
  const { state } = useHtmlHeadContext();

  return (
    <>
      {state.meta.map((data) =>
        isMetaTitle(data) ? (
          <title key={data.title}>{data.title}</title>
        ) : (
          <meta key={data.name} {...data} />
        )
      )}
    </>
  );
};
