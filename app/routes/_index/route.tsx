import type { MetaFunction } from "@remix-run/cloudflare";

import { Cover } from './cover';
import { FeaturedWorks } from './featured-works';
import { LearnWeb } from './learn-web';

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    {
      name: "description",
      content: "Welcome to Remix! Using Vite and Cloudflare!",
    },
  ];
};

export default function Index() {
  return (
    <main>
      <Cover />
      <FeaturedWorks />
      <LearnWeb />
    </main>
  );
}