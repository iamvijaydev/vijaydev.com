import { Link } from '~components/core/link/Link';
import { Text } from '~components/core/text/Text';
import { Props } from './PostWrapper';
import { PropsWithChildren } from 'react';

const Ol = (props: PropsWithChildren) => <ol {...props} className='pl-xl mb-m text body' />;
const Ul = (props: PropsWithChildren) => <ul {...props} className='pl-xl mb-m text body' />;

export const mdxComponents = {
  a: (props: any) => <Link {...props} />,
  p: (props: any) => <Text {...props} as='p' className='mb-m' />,
  h2: (props: any) => <Text {...props} as='h2' className='pt-xs mb-xs' />,
  h3: (props: any) => <Text {...props} as='h3' className='pt-xs mb-xs' />,
  h4: (props: any) => <Text {...props} as='h4' className='pt-xs mb-xs' />,
  ol: Ol,
  ul: Ul,
  // blockquote
  // ul > li
  // ol > li
  // summary > details
};
