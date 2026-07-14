import type { MetadataRoute } from "next"
import { SITE } from "@/content/cueva"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE.baseUrl}/sitemap.xml`,
  }
}
