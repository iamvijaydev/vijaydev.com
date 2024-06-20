import { Link, AnchorAttributes } from "~components/Link";

export const LinkCard = (props: AnchorAttributes) => {
  const { className = "", children, to, ...rest } = props;

  return (
    <Link {...rest} to={to} className={`link-card px-s-m py-s ${className}`}>
      {children}
    </Link>
  );
};
