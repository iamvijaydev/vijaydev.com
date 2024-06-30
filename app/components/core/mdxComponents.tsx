import { Link } from '~components/core/link/Link';
import { Text } from '~components/core/text/Text';

export const mdxComponents = {
  a: (props: any) => <Link {...props} />,
  p: (props: any) => <Text {...props} as='p' className='mb-m' />,
  h2: (props: any) => <Text {...props} as='h2' className='pt-xs mb-xs' />,
  h3: (props: any) => <Text {...props} as='h3' className='pt-xs mb-xs' />,
  h4: (props: any) => <Text {...props} as='h4' className='pt-xs mb-xs' />,
  // blockquote
  // ul > li
  // ol > li
  // summary > details
};
