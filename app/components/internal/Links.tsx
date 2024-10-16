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

  const { href, rel } = props;

  if (rel === "prefetch") {
    props.href = state.imports?.[href!] || "";
  }

  const transformProps = (
    data: MetaLink
  ): LinkType => {
    let { href, crossOrigin, ...rest } = data;
    const props: LinkType = { ...rest };

    if (rest.rel === "prefetch") {
      props.href = state.imports?.[href] || "";
    } else {
      props.href = href;
    }
    if (crossOrigin) {
      props.crossOrigin = "";
    }

    return props;
  };

  return (
    <>
      <link rel="canonical" href="https://www.vijaydev.com" />
      <link rel="icon" type="image/png" href="/assets/favicon.png" />
      {state.links.map((data) => (
        <link key={data.href} {...transformProps(data)} />
      ))}
    </>
  );
};
