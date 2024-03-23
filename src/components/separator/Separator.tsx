import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  type?: "Horizontal" | "Vertical";
  color?: 'Outline' | 'Variant' | 'Surface' | 'Surface-Dim'
  half?: boolean;
}

export const Separator = (props: Props): JSX.Element => {
  const {
    type = "Vertical",
    color = 'Variant',
    half,
    className: baseClassName = "",
    ...rest
  } = props;
  let className = `${baseClassName} separator ${color.toLowerCase()}`;

  if (type === "Vertical") {
    className += " vertical";
  }

  if (type === "Horizontal") {
    className += " horizontal";
  }

  if (half) {
    className += " half";
  }

  return <div {...rest} className={className} />;
};
