"use client"

import { useMemo, useState } from "react"
import { Calendar as CalendarIcon, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { horarios } from "@/content/cueva"
import { formatFechaLarga } from "@/lib/fechas"
import { waLink } from "@/lib/whatsapp"

function isWeekend(dateStr: string): boolean {
  if (!dateStr) return false
  const d = new Date(`${dateStr}T12:00:00`)
  const day = d.getDay()
  return day === 0 || day === 6
}

function todayISO(): string {
  const d = new Date()
  return new Date(d.getTime() - d.getTimezoneOffset() * 60000)
    .toISOString()
    .slice(0, 10)
}

export function BookingWidget() {
  const [fecha, setFecha] = useState<string>("")
  const [turnoId, setTurnoId] = useState<string>("")

  const turnos = useMemo(() => {
    if (!fecha) return [] as typeof horarios.laboral
    return isWeekend(fecha) ? horarios.findeSemanaFestivo : horarios.laboral
  }, [fecha])

  const turno = turnos.find((t) => t.id === turnoId) ?? null

  const mensaje = useMemo(() => {
    if (fecha && turno) {
      const fechaLarga = formatFechaLarga(new Date(`${fecha}T12:00:00`))
      return `Hola, quiero reservar visita a la Cueva de la Pileta para el ${fechaLarga}, turno de ${turno.inicio} (${turno.turno}). ¿Está disponible ese turno? Si no, ¿cuál tenéis libre ese día?`
    }
    return undefined
  }, [fecha, turno])

  return (
    <div className="relative">
      {/* Decorative gradient halo */}
      <div
        aria-hidden
        className="absolute -inset-2 -z-10 rounded-2xl bg-gradient-to-br from-brand-blue/15 via-transparent to-brand-green/10 blur-2xl"
      />

      <div className="rounded-2xl bg-white border border-brand-blue/15 shadow-brand-md p-5 sm:p-6">
        <div className="flex items-center gap-2 text-brand-blue">
          <CalendarIcon className="size-4" />
          <span className="text-[0.78rem] font-semibold tracking-[0.14em] uppercase">
            Elige fecha y turno
          </span>
        </div>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-[1fr_1fr_auto] gap-3">
          <div>
            <label className="block text-xs font-medium text-brand-text-muted mb-1.5">
              Fecha
            </label>
            <input
              type="date"
              value={fecha}
              min={todayISO()}
              onChange={(e) => {
                setFecha(e.target.value)
                setTurnoId("")
              }}
              className="h-11 w-full rounded-lg border-[1.5px] border-brand-blue/20 bg-white px-3 text-sm text-brand-text focus:outline-none focus:border-brand-blue focus:ring-4 focus:ring-brand-blue-light transition"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-brand-text-muted mb-1.5">
              Turno
            </label>
            <Select
              value={turnoId}
              onValueChange={setTurnoId}
              disabled={!fecha}
            >
              <SelectTrigger className="h-11 rounded-lg border-[1.5px] border-brand-blue/20 bg-white text-sm focus:border-brand-blue focus:ring-4 focus:ring-brand-blue-light">
                <SelectValue placeholder={fecha ? "Elige horario" : "Elige fecha primero"} />
              </SelectTrigger>
              <SelectContent>
                {turnos.map((t) => (
                  <SelectItem key={t.id} value={t.id}>
                    {t.inicio} — {t.turno}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="sm:self-end">
            <a
              href={waLink(mensaje)}
              target="_blank"
              rel="noopener noreferrer"
              aria-disabled={!fecha || !turnoId}
              onClick={(e) => {
                if (!fecha || !turnoId) e.preventDefault()
              }}
            >
              <Button
                disabled={!fecha || !turnoId}
                className="h-11 w-full sm:w-auto px-5 bg-brand-green hover:bg-emerald-600 text-white font-semibold rounded-lg shadow-brand-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <MessageCircle className="size-4 mr-2" />
                WhatsApp
              </Button>
            </a>
          </div>
        </div>

        <p className="mt-3 text-xs text-brand-text-muted">
          Reservamos por WhatsApp o teléfono — sin pago online.
        </p>
      </div>
    </div>
  )
}
