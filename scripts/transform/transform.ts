import { transformBlogData } from "./transform.blogs";
import { transformLearn } from "./transform.learn";

export const transformData = () => {
  transformBlogData();
  transformLearn();
}