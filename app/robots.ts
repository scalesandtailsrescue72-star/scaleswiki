import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/newsletter/admin"],
    },
    sitemap: "https://scaleswiki.org/sitemap.xml",
  };
}
