import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://j551n.com";
  return [
    {
      url: base,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${base}/legal/notice`,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${base}/legal/privacy`,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
