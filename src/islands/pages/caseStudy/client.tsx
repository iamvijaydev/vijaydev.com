import type { MetaProps } from "types";
import { Breadcrumb, ContentGrid, Label } from "main";

export const metaProps: MetaProps = {
  pathname: "/case-study",
  permalink: "/case-study.html",
  title: "Case study",
  description: "Place the case study meta description text here",
};

export const PageComponent = () => {
  return (
    <>
    <div className="content-grid"><div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
    <div>8</div>
    <div>9</div>
    <div>10</div>
    <div>11</div>
    <div>12</div>
    </div>
    <div className="full-width"><div className="content-grid"><div>1</div></div></div>
    </>
  )
  // return (
  //   <div className="c-container">
  //     <div className="u-grid">
  //       <Breadcrumb
  //         className="col-12 mb-l"
  //         nodes={[
  //           { href: "/", label: "Home" },
  //           { href: "/learn", label: "Learn" },
  //           {
  //             href: `/learn/404`,
  //             label: "This is a topic",
  //           },
  //           { label: "This is a chapter" },
  //         ]}
  //       />

  //       <div className="col-12 flex flex-wrap gap-2 mb-xs">
  //         <Label icon="📅" title="Last update on">
  //           Dec 2023
  //         </Label>
  //         <Label icon="⛳" title="Chapter level">
  //           Basic
  //         </Label>
  //       </div>

  //       <div className="col-12">
  //         <p className="text-heading">Stack data structure</p>
  //         <p className="text-heading-desc pb-l">
  //           Last in first out (LIFO) data structure
  //         </p>

  //         <p className="bt b-variant text-title mt-l pt-s pb-s">
  //           Implement without arrays
  //         </p>
  //         <p className="text-body pb-s">
  //           Site config is where you can define the global settings of the site.
  //           App config options define settings that apply to every VitePress
  //           site, regardless of what theme it is using. For example, the base
  //           directory or the title of the site.
  //         </p>
  //         <p className="text-body pb-s">
  //           The quick fox jumped over the lazy dog.
  //         </p>

  //         <p className="text-title3 mt-m pb-s">Some gotchas</p>
  //         <p className="text-body pb-s">
  //           The config file is always resolved from
  //           [root]/.vitepress/config.[ext], where [root] is your VitePress
  //           project root, and [ext] is one of the supported file extensions.
  //           TypeScript is supported out of the box. Supported extensions include
  //           .js, .ts, .mjs, and .mts.
  //         </p>
  //         <p className="text-body pb-s">
  //           The quick fox jumped over the lazy dog.
  //         </p>

  //         <p className="bt b-variant text-title mt-l pt-s-m pb-s">
  //           Implement without arrays
  //         </p>
  //         <p className="text-body pb-s">
  //           Site config is where you can define the global settings of the site.
  //           App config options define settings that apply to every VitePress
  //           site, regardless of what theme it is using. For example, the base
  //           directory or the title of the site.
  //         </p>
  //         <p className="text-body pb-s">
  //           The quick fox jumped over the lazy dog.
  //         </p>

  //         <p className="text-title3 mt-m pb-s">Some gotchas</p>
  //         <p className="text-body pb-s">
  //           The config file is always resolved from
  //           [root]/.vitepress/config.[ext], where [root] is your VitePress
  //           project root, and [ext] is one of the supported file extensions.
  //           TypeScript is supported out of the box. Supported extensions include
  //           .js, .ts, .mjs, and .mts.
  //         </p>
  //         <p className="text-body pb-s">
  //           The quick fox jumped over the lazy dog.
  //         </p>

  //         <p className="text-title4 mt-s pb-s">Keep in mind</p>
  //         <p className="text-body pb-s">
  //           Frontmatter enables page based configuration. In every markdown
  //           file, you can use frontmatter config to override site-level or
  //           theme-level config options. Also, there are config options which you
  //           can only define in frontmatter.
  //         </p>
  //         <p className="text-body pb-s">
  //           The quick fox jumped over the lazy dog.
  //         </p>
  //       </div>
  //     </div>
  //   </div>
  // );
};
