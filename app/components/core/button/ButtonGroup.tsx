import type { DetailedHTMLProps, ButtonHTMLAttributes, ReactNode } from "react";
import { Button } from "~components/core/button/Button";

type Button = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  label: string;
  icon?: ReactNode;
  postIcon?: ReactNode;
  isFocusVisible?: boolean;
  isActive?: boolean;
};

export interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  buttons: Button[];
}

export const ButtonGroup = (props: Props) => {
  return (
    <div className="button-group secondary-container theme-hue">
      {props.buttons.map((button, index) => (
        <Button
          key={index}
          {...button}
        />
      ))}
    </div>
  );
};
