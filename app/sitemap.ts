import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projects.map((project) => ({
      url: `${siteUrl}/projects/${project.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
