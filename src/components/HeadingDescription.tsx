import { DetailedHTMLProps, HTMLAttributes } from "react";

export const HeadingDescription = (
  props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
) => (
  <div {...props} className={`text-display-desc ${props.className ?? ""}`}>
    {props.children}
  </div>
);
