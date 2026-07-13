import type { Metadata } from "next"
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google"
import { SITE } from "@/content/cueva"
import "./globals.css"

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Cueva de la Pileta — Arte Rupestre Paleolítico · Benaoján, Málaga",
  description:
    "Visita guiada a la cueva con pinturas rupestres de 40.000 años. Monumento Nacional. Reserva por teléfono. Solo 20 plazas por turno. A 19 km de Ronda.",
  keywords: [
    "cueva pileta",
    "arte rupestre málaga",
    "pinturas paleolíticas",
    "benaoján",
    "ronda cueva",
    "cueva prehistórica andalucía",
  ],
  openGraph: {
    title: "Cueva de la Pileta · Benaoján, Málaga",
    description:
      "Arte rupestre del Paleolítico Superior. Una de las cuevas mejor conservadas del mundo.",
    url: SITE.baseUrl,
    siteName: "Cueva de la Pileta",
    locale: "es_ES",
    type: "website",
  },
  alternates: { canonical: SITE.baseUrl },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${jakarta.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-brand-white text-brand-text">
        {children}
      </body>
    </html>
  )
}
