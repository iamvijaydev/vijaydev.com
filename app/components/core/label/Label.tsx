import { PropsWithChildren, ReactNode } from "react";
import { Text } from "~components/core/text/Text";

export interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  title?: string;
}

export const Label = (props: PropsWithChildren<Props>) => {
  const { title, ...rest } = props;

  return (
    <Text as="div" variant="label" height="tight" dim title={title} {...rest} />
  );
};
