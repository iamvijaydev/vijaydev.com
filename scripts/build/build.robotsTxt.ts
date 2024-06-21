import { outputFile } from "fs-extra"

export const buildRobotsTxt = async () => {
  console.time('robot.txt feed built');

  // update when we go live
  await outputFile("dist/client/robots.txt", `User-agent: *
Disallow: /

Sitemap: https://vijaydev.com/sitemap.xml`);

console.timeEnd('robot.txt feed built');
}