import type { MetadataRoute } from "next"
import { SITE } from "@/content/cueva"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/la-cueva", "/visita", "/galeria", "/reservar", "/contacto"]
  return routes.map((route) => ({
    url: `${SITE.baseUrl}${route}`,
    lastModified: new Date("2026-07-14"),
  }))
}
