import { Link } from "~components/core/link/Link";

export const Logo = () => {
  return (
    <Link href="/" className="logo flex align-center gap-xs pl-xs">
      <div className="spinner primary-color" role="img">
        <div className="primary-color"></div>
        <div className="primary-color"></div>
        <div className="primary-color"></div>
        <div className="primary-color"></div>
        <div className="primary-color"></div>
        <div className="primary-color"></div>
      </div>
      <div className="name">
        <span className="name__fname primary-color">Vijay</span>
        <span> </span>
        <span className="name__lname primary-color">Dev</span>
      </div>
    </Link>
  );
};
