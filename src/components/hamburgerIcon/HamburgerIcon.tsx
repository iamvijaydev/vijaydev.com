export type Props = {
  isClose?: boolean;
};

export const HamburgerIcon = (props: Props): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      role="img"
      className={props.isClose ? 'hamburger-closed' : ''}
    >
      <path
        d="M4 7L7 7M20 7L11 7"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="hamburger-line1"
      />
      <path
        d="M20 17H17M4 17L13 17"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="hamburger-line2"
      />
      <path
        d="M4 12H7L20 12"
        stroke="currentcolor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="hamburger-line3"
      />
    </svg>
  );
};
