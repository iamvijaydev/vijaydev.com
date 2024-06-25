import { Link } from '~components/core/Link';
import { type TextProps, Text } from '~components/core/text/Text';

export const mdxComponents = {
  a: Link,
  p: (props: TextProps) => <Text {...props} as='p' />,
  h2: (props: TextProps) => <Text {...props} as='h2' />,
  h3: (props: TextProps) => <Text {...props} as='h3' />,
  h4: (props: TextProps) => <Text {...props} as='h4' />,
  h5: (props: TextProps) => <Text {...props} as='h5' />,
  // blockquote
  // ul > li
  // ol > li
  // summary > details
};
