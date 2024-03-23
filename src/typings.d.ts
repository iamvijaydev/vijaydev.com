declare module "*.module.css";

declare type Frontmatter = {
  slug: string;
  title: string;
  description: string;
  image: string;
  timestamp: string;
  category: string;
  tag: string;
  promoted: boolean;
  featured: boolean;
  archived: boolean;
}

declare type AllEntries = Frontmatter[];

declare module "json/allEntries.json" {
  let allEntries: AllEntries;
  export = allEntries
};