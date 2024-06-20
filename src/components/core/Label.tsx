import { PropsWithChildren, ReactNode } from "react";

export interface Props {
  title?: string;
  icon?: ReactNode;
  nodes?: ReactNode[];
}

export const Label = (props: PropsWithChildren<Props>) => {
  return (
    <div
      className="label-chip text-label height-tight p-2xs r-m flex gapx-2xs items-center"
      title={props.title}
      aria-label={props.title}
    >
      {props.icon ? (
        <span className="label-icon" role="img" aria-hidden="true">
          {props.icon}
        </span>
      ) : null}
      {props.nodes ?? props.children}
    </div>
  );
};
