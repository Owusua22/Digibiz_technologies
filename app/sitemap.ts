import { MetadataRoute } from "next";
import { prisma } from "@/lib/db";
import { SERVICE_SLUGS } from "@/data/services";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://digibiztechnologies.com";

  // Get published blog posts
  const posts = await prisma.post.findMany({
    where: {
      published: true,
    },
    select: {
      slug: true,
      updatedAt: true,
      createdAt: true,
    },
  });

  const blogUrls = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.updatedAt || post.createdAt,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const serviceUrls = SERVICE_SLUGS.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // Service detail pages
    ...serviceUrls,

    // Dynamic blog pages
    ...blogUrls,
  ];
}