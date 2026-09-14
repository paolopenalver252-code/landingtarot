import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

/** Landing de una sola página: el sitemap solo necesita la raíz. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
