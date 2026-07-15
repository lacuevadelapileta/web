const isDev = process.env.NODE_ENV === "development"

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
    ],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2678400, // 31 días — las imágenes no cambian con frecuencia
    // Logos de medios en /public/img/medios son SVG propios (no subidos por
    // usuarios) — se habilita con la mitigación de seguridad recomendada.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Content-Security-Policy",
            // 'unsafe-eval' solo en dev: Next.js lo necesita para Fast Refresh/HMR.
            // La build de producción (Vercel) no lo usa ni lo necesita.
            value: `default-src 'self'; img-src 'self' data: https://images.unsplash.com https://plus.unsplash.com https://images.pexels.com https://upload.wikimedia.org https://maps.google.com https://www.google.com; frame-src https://maps.google.com https://www.google.com; script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}; style-src 'self' 'unsafe-inline'; connect-src 'self'${isDev ? " ws:" : ""}; font-src 'self' data:;`,
          },
        ],
      },
    ]
  },
}

export default nextConfig
