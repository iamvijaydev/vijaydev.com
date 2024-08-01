import { Link } from "~components/core/link/Link";

export const Logo = () => {
  return (
    <Link href="/" className="flex align-center gap-xs pl-xs">
      <div className="spinner primary-color" role="img">
        <div className="primary-color"></div>
        <div className="primary-color"></div>
        <div className="primary-color"></div>
        <div className="primary-color"></div>
        <div className="primary-color"></div>
        <div className="primary-color"></div>
      </div>
      <div className="logo">
      <span className="logo__fname primary-color">Vijay</span>
      <span> </span>
      <span className="logo__lname primary-color">Dev</span>
      </div>
    </Link>
  );
};
