import { Link, AnchorAttributes } from "~components/core/link/Link";

export const LinkCard = (props: AnchorAttributes) => {
  const { className = "", children, href, ...rest } = props;

  return (
    <Link {...rest} href={href} className={`link-card px-s-m py-s ${className}`}>
      {children}
    </Link>
  );
};
