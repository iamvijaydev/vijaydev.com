import { PropsWithChildren, ReactNode } from "react";
import { Text } from "~components/core/text/Text";

export interface Props {
  title?: string;
  nodes?: ReactNode[];
}

export const Label = (props: PropsWithChildren<Props>) => {
  return <Text as="div" variant="label" height="tight" dim>{props.children}</Text>;
};
