import { source } from "@/lib/source";
import { createFromSource } from "fumadocs-core/search/server";

function getTagsByURL(url: string) {
  const first = url.split("/")[1];
  const second = url.split("/")[2];
  return second;
}

export const { GET } = createFromSource(source, (page) => ({
  title: page.data.title,
  description: page.data.description,
  url: page.url,
  id: page.url,
  structuredData: page.data.structuredData,
  tag: getTagsByURL(page.url),
}));
