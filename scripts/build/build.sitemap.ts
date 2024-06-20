import { createWriteStream } from "node:fs";
import { getRoutes } from "../store/store";
import { ContentItemDetailed } from "../types";
import { getPaddedDate } from "../utils/getPaddedDate";

// Note: for static pages we must be updated manually when pages are updated
const lastModified = new Map<string, string>([
  ["/home", "2021-08-01"],
  ["/learn", "2021-08-01"],
]);

export const buildSitemap = async () => {
  console.time('sitemap feed built');

  const stream = createWriteStream("dist/client/sitemap.xml");

  const baseUrl = "https://vijaydev.com";
  const priorityMap = {
    "/home": "0.9",
    "/learn": "0.8",
    "/featured": "0.7",
    "/blog": "0.6",
  };

  stream.write(`<?xml version="1.0" encoding="UTF-8"?>`);
  stream.write(`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`);

  for await (const {
    route,
    matter,
  } of getRoutes<ContentItemDetailed>().values()) {
    const priority = priorityMap[route.pathname];
    let lastmod = lastModified.get(route.pathname);

    if (matter?.published) {
      lastmod = getPaddedDate(matter.published!);
    }
    if (matter?.updated) {
      lastmod = getPaddedDate(matter.updated!);
    }

    stream.write("<url>");
    stream.write(
      `<location>${baseUrl}${
        route.pathname === "/home" ? "" : route.pathname
      }</location>`
    );
    if (lastmod) stream.write(`<lastmod>${lastmod}</lastmod>`);
    if (priority) stream.write(`<priority>${priority}</priority>`);
    stream.write("</url>");
  }

  stream.write("</urlset>");

  stream.end();

  console.timeEnd('sitemap feed built');
};
