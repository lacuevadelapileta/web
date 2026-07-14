import type { Metadata } from "next"
import { ContactoContent } from "@/components/contacto/ContactoContent"
import { breadcrumbSchema } from "@/lib/schema"
import { JsonLd } from "@/components/seo/JsonLd"

export const metadata: Metadata = {
  title: "Contacto — Cueva de la Pileta",
  description:
    "Contacta con la Cueva de la Pileta para reservas en grupo, dudas sobre la visita o cualquier consulta. Teléfono, email y ubicación en Benaoján, Málaga.",
  alternates: { canonical: "/contacto" },
}

export default function ContactoPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Contacto", path: "/contacto" }])} />
      <ContactoContent />
    </>
  )
}
