"use client"

import { Suspense } from "react"
import { ReservarContent } from "@/components/reservar/ReservarContent"

export default function ReservarPage() {
  return (
    <Suspense
      fallback={
        <div className="container-pileta py-20 text-center text-brand-text-muted">
          Cargando…
        </div>
      }
    >
      <ReservarContent />
    </Suspense>
  )
}
