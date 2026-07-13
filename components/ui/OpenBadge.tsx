"use client"

import { useEffect, useState } from "react"
import { horarios, type Turno } from "@/content/cueva"
import { cn } from "@/lib/utils"

/**
 * Calcula en cliente si la cueva está abierta ahora mismo (Europe/Madrid).
 * No hace fetch — usa horarios estáticos del módulo content/cueva.
 */
function isOpenNow(now: Date): { abierto: boolean; proximoTurno?: Turno } {
  const dia = now.getDay() // 0 = domingo, 6 = sábado
  const finde = dia === 0 || dia === 6
  const turnos = finde ? horarios.findeSemanaFestivo : horarios.laboral

  const minutos = now.getHours() * 60 + now.getMinutes()

  for (const t of turnos) {
    const [hi, mi] = t.inicio.split(":").map(Number)
    const [hf, mf] = t.fin.split(":").map(Number)
    const inicio = hi * 60 + mi
    const fin = hf * 60 + mf
    if (minutos < fin) return { abierto: minutos >= inicio, proximoTurno: t }
  }
  return { abierto: false }
}

export function OpenBadge({ className }: { className?: string }) {
  const [estado, setEstado] = useState<{
    abierto: boolean
    proximoTurno?: Turno
  } | null>(null)

  useEffect(() => {
    const update = () => setEstado(isOpenNow(new Date()))
    update()
    const id = setInterval(update, 60_000)
    return () => clearInterval(id)
  }, [])

  if (!estado) {
    return (
      <span
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold",
          "bg-brand-blue-light text-brand-blue",
          className
        )}
        aria-hidden="true"
      >
        <span className="size-1.5 rounded-full bg-brand-blue" />
        Horarios
      </span>
    )
  }

  if (estado.abierto) {
    return (
      <span
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold",
          "bg-brand-green-light text-brand-green",
          className
        )}
      >
        <span className="size-1.5 rounded-full bg-brand-green animate-pulse" />
        Abierto ahora
      </span>
    )
  }

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold",
        "bg-brand-blue-light text-brand-blue",
        className
      )}
      title={
        estado.proximoTurno
          ? `Próximo turno: ${estado.proximoTurno.inicio}`
          : undefined
      }
    >
      <span className="size-1.5 rounded-full bg-brand-blue" />
      {estado.proximoTurno
        ? `Hoy a las ${estado.proximoTurno.inicio}`
        : "Cerrado hoy"}
    </span>
  )
}
