import {
  DetailedHTMLProps,
  AnchorHTMLAttributes,
  PropsWithChildren,
} from "react";

export interface Props
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
}

export const Layout = (props: PropsWithChildren<Props>) => {
  const { className, children, ...rest } = props;

  return (
    <main {...rest} className={`${className || ''} content-grid xl:pt-s pb-xl`}>{children}</main>
  )
}