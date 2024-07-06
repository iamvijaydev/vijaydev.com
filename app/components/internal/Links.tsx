import { DetailedHTMLProps, LinkHTMLAttributes } from "react";
import { useHtmlHeadContext } from "~store/htmlHead/context";
import { MetaLink } from "~types";

type LinkType = DetailedHTMLProps<
LinkHTMLAttributes<HTMLLinkElement>,
HTMLLinkElement
>

export const Links = () => {
  const { state } = useHtmlHeadContext();
  const props: DetailedHTMLProps<
    LinkHTMLAttributes<HTMLLinkElement>,
    HTMLLinkElement
  > = {};

  const { href, rel, crossOrigin } = props;

  if (rel === "prefetch") {
    props.href = state.imports?.[href!] || "";
  }

  const transformProps = (
    data: MetaLink
  ): LinkType => {
    let { href, crossOrigin: co, ...rest } = data;
    const props: LinkType = { ...rest };

    if (rest.rel === "prefetch") {
      props.href = state.imports?.[href] || "";
    } else {
      props.href = href;
    }
    if (co) {
      props.crossOrigin = "";
    }

    return props;
  };

  return (
    <>
      {state.links.map((data) => (
        <link key={data.href} {...transformProps(data)} crossOrigin="" />
      ))}
    </>
  );
};
