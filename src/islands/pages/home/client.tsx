import type { MetaProps } from "types";
import { FeaturedAbout } from "./features/FeaturedAbout/FeaturedAbout";
import { WorkedWith } from "./features/WorkedWith/WorkedWith";
import { FeaturedWorks } from "./features/FeaturedWorks/FeaturedWorks";
import { FeaturedBlog } from "./features/FeaturedBlog/FeaturedBlog";

export const metaProps: MetaProps = {
  pathname: '/home',
  permalink: '/index.html',
  title: 'Home',
  description: 'Place the home meta description text here'
}

export const PageComponent = () => {
  return (
    <>
      <FeaturedAbout />
      <WorkedWith />
      <FeaturedWorks />
      <FeaturedBlog />
    </>
  )
}