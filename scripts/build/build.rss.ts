// @see https://www.tutorialspoint.com/rss/rss2.0-tag-syntax.htm

import { createWriteStream } from "node:fs";
import { getTechnicalData, getFictionData } from "../store/store";
import { sortByPublished } from "../utils/sortByPublished";
import { getUtcDateString } from "../utils/getUtcDateString";
import { ContentItemDetailed } from "../types";

export const buildRssFeed = async () => {
  console.time('RSS feed built');

  let allContent: ContentItemDetailed[] = [...getTechnicalData().list.values(), ...getFictionData().list.values()];

  allContent = allContent.sort(sortByPublished);

  const stream = createWriteStream("dist/client/rss.xml");

  const baseUrl = "https://vijaydev.com";

  stream.write('<?xml version="1.0" encoding="UTF-8"?>');
  stream.write('<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">');
  stream.write("<channel>");
  stream.write("<title>Vijay Dev's Web Frontend Posts</title>");
  stream.write(
    "<description>Your source for tutorials, references and manuals for frontend!</description>"
  );
  stream.write(`<link>${baseUrl}</link>`);
  stream.write(
    `<atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>`
  );
  stream.write("<copyright>Copyright 2007, Vijay Dev</copyright>");
  // stream.write('<pubDate>Add deploy date</pubDate>');
  // stream.write('<lastBuildDate>Add latest update date</lastBuildDate>');
  stream.write("<category>Blog posts</category>");
  stream.write("<ttl>60</ttl>");
  stream.write(
    "<managingEditor>vijaydev.offical@gmail.com (Vijay Dev)</managingEditor>"
  );
  stream.write("<webMaster>vijaydev.offical@gmail.com (Vijay Dev)</webMaster>");

  allContent.forEach((item) => {
    stream.write("<item>");
    stream.write(`<title>${item.title}</title>`);
    stream.write(`<description>${item.description}</description>`);
    stream.write(`<link>${baseUrl}${item.pathname}</link>`);
    stream.write("<author>vijaydev.offical@gmail.com (Vijay Dev)</author>");
    item.categories?.forEach((cat) => {
      stream.write(`<category>${cat}</category>`);
    });
    stream.write(`<guid>${baseUrl}${item.pathname}</guid>`);
    stream.write(`<pubDate>${getUtcDateString(item.published)}</pubDate>`);
    stream.write("</item>");
  });

  stream.write("</channel>");
  stream.write("</rss>");
  stream.end();

  console.timeEnd('RSS feed built');
};
