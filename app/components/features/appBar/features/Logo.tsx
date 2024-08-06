import { Link } from "~components/core/link/Link";

export const Logo = () => {
  return (
    <Link href="/" className="logo flex align-center gap-xs pl-xs">
      <div className="spinner primary-color theme-hue" role="img">
        <div className="primary-color theme-hue"></div>
        <div className="primary-color theme-hue"></div>
        <div className="primary-color theme-hue"></div>
        <div className="primary-color theme-hue"></div>
        <div className="primary-color theme-hue"></div>
        <div className="primary-color theme-hue"></div>
      </div>
      <div className="name">
        <span className="name__fname primary-color theme-hue">Vijay</span>
        <span> </span>
        <span className="name__lname primary-color theme-hue">Dev</span>
      </div>
    </Link>
  );
};
