import { Link, AnchorAttributes } from "~components/core/Link";

export const LinkCard = (props: AnchorAttributes) => {
  const { className = "", children, to, ...rest } = props;

  return (
    <Link {...rest} href={to} className={`link-card px-s-m py-s ${className}`}>
      {children}
    </Link>
  );
};
