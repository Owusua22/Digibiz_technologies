import type { MetadataRoute } from "next";
import { prisma } from "@/lib/db";
import { SERVICE_SLUGS } from "@/data/services";
import { SITE_URL } from "@/lib/site";

/**
 * Blog posts are written from the admin CMS, so the sitemap has to be
 * regenerated on a schedule instead of being frozen at build time.
 */
export const revalidate = 3600;

/**
 * Every crawlable public route, with no admin, API or redirect-only paths.
 * `/service-details` is intentionally absent: it is a 308 to /services and
 * sitemaps must not advertise redirects.
 */
const STATIC_ROUTES: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "", changeFrequency: "daily", priority: 1 },
  { path: "/services", changeFrequency: "weekly", priority: 0.9 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/pricing", changeFrequency: "monthly", priority: 0.8 },
  { path: "/portfolio", changeFrequency: "weekly", priority: 0.8 },
  { path: "/blog", changeFrequency: "daily", priority: 0.8 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
  { path: "/team", changeFrequency: "monthly", priority: 0.6 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Only published posts are publicly reachable, so only those belong here.
  let blogUrls: MetadataRoute.Sitemap = [];
  try {
    const posts = await prisma.post.findMany({
      where: { published: true },
      select: { slug: true, updatedAt: true, createdAt: true },
      orderBy: { createdAt: "desc" },
    });

    blogUrls = posts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: post.updatedAt ?? post.createdAt,
      changeFrequency: "monthly",
      priority: 0.7,
    }));
  } catch {
    // A database hiccup must not take the whole sitemap (and therefore search
    // discovery) offline; the static routes below still get published.
  }

  const staticUrls: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const serviceUrls: MetadataRoute.Sitemap = SERVICE_SLUGS.map((slug) => ({
    url: `${SITE_URL}/services/${slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Flattened from distinct sources, but de-duplicated defensively so a slug
  // that ever appears twice cannot emit the same URL twice.
  const seen = new Set<string>();
  return [...staticUrls, ...serviceUrls, ...blogUrls]
    .sort((a, b) => (b.priority ?? 0) - (a.priority ?? 0))
    .filter((entry) => {
      if (seen.has(entry.url)) return false;
      seen.add(entry.url);
      return true;
    });
}