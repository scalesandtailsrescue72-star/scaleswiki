import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://scaleswiki.org";
  const routes = [
    "",
    "/species",
    "/species/ball-python",
    "/guides/ball-python",
    "/guides/ball-python/introduction",
    "/guides/ball-python/natural-history",
    "/guides/ball-python/is-a-ball-python-right-for-you",
    "/academy",
    "/articles",
    "/articles/quarantine-for-new-reptiles",
    "/shop",
    "/shop/ball-python-supplies",
    "/support",
    "/veterinary-review",
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/species/ball-python" || route === "/articles" ? 0.9 : 0.7,
  }));
}
