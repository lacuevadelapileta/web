import type { Metadata } from "next"
import { ReservarContent } from "@/components/reservar/ReservarContent"
import { breadcrumbSchema } from "@/lib/schema"
import { JsonLd } from "@/components/seo/JsonLd"

export const metadata: Metadata = {
  title: "Reserva tu Visita — Cueva de la Pileta | Horarios y Plazas",
  description:
    "Reserva tu entrada a la Cueva de la Pileta por teléfono. Solo 20 plazas por turno. Consulta horarios y tarifas antes de llamar.",
  alternates: { canonical: "/reservar" },
}

export default function ReservarPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Reservar", path: "/reservar" }])} />
      <ReservarContent />
    </>
  )
}
