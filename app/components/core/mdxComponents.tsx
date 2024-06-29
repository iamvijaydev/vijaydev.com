import { Link } from '~components/core/link/Link';
import { type TextProps, Text } from '~components/core/text/Text';

export const mdxComponents = {
  a: (props: any) => <Link {...props} />,
  p: (props: any) => <Text {...props} as='p' />,
  h2: (props: any) => <Text {...props} as='h2' />,
  h3: (props: any) => <Text {...props} as='h3' />,
  h4: (props: any) => <Text {...props} as='h4' />,
  h5: (props: any) => <Text {...props} as='h5' />,
  // blockquote
  // ul > li
  // ol > li
  // summary > details
};
