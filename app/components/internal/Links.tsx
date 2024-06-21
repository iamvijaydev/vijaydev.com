import { useHtmlHeadContext } from "~store/htmlHead/context";
import { MetaLink } from "~types";

export const Links = () => {
  const { state } = useHtmlHeadContext();

  const resolvePrefetch = (data: MetaLink) => { 
    if (data.rel === "prefetch") {
      data.href = state.imports?.[data.href] || '';
    }
    return data;
  }

  return (
    <>
      {state.links.map((data) => (
        <link key={data.href} {...resolvePrefetch(data)} />
      ))}
    </>
  );
};
