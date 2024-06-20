import type { JSX } from "react";
import { Link } from "~components/core/Link";

export type LogoProps = {
  className?: string;
  size?: "small" | "normal";
};

export const Logo = (props: LogoProps): JSX.Element => {
  let size = 40;

  if (props.size === "small") {
    size = 30;
  }

  let sizeClsName = "gapx-xs";

  if (props.size === "small") {
    sizeClsName = "";
  }

  const className = `logo flex a-center ${sizeClsName} ${
    props.className || ""
  }`;

  const baseNameClassName =
    "lowercase inline-block whitespace-nowrap words-together";
  let nameClassName = `${baseNameClassName} text-body`;

  if (props.size === "small") {
    nameClassName = "none";
  }

  return (
    <Link to="/" className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size + 'px'}
        height={size + 'px'}
        viewBox="0 0 40 40"
        fill="none"
        aria-labelledby="logoTitle logoDesc"
        role="img"
        className="flex-none"
      >
        <title id="logoTitle">Vijay Dev logo</title>
        <desc id="logoDesc">
          An orange circle with letters of the word "Vijay" arranged in the
          shape a triangle.
        </desc>
        <circle id="logoCircle" cx="20" cy="20" r="20" fill="#000" />
        <path
          id="logoPath"
          d="M32.3164 12L20.5526 34.9467C20.1841 35.6838 19.1323 35.6838 18.7638 34.9467L13.3291 24.6583M7 12L12 21.5M26.0665 24.5H32.3956M19.5 31.5001C19.5 29.9379 19.5 27.5 19.5 27.5M19.5494 11.5H24.5C25.2467 11.5 25.8389 12.3347 25.5 13L21.0173 22.2532C20.0146 24.2029 19.2152 24.5 17.1899 24.5H7M13.0759 12L15.7992 17.7657C16.5 19 17.5 19.5 18.5 19.5"
          stroke="white"
          strokeLinecap="round"
        />
      </svg>
      <span id="logoName" className={nameClassName}>
        <span className="font-bold">Vijay</span>{" "}
        <span className="font-light">Dev</span>
      </span>
    </Link>
  );
};
