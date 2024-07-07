import { Link, type AnchorAttributes } from "~components/core/link/Link";

export const LinkButton = (props: AnchorAttributes) => {
  const { className = "", children, href, ...rest } = props;

  return (
    <Link {...rest} isButton href={href} className={className}>
      {children}
    </Link>
  );
};
