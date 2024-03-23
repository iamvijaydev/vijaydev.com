import { PropsWithChildren } from "react";

export type Props = {
  className?: string;
}

export const Layout = (props: PropsWithChildren<Props>) => {
  return (
    <main className={'content-grid xl:pt-s pb-xl ' + props.className || ''}>{props.children}</main>
  )
}