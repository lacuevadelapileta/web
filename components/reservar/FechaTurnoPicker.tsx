"use client"

import { es } from "date-fns/locale"
import { Calendar as CalIcon, Clock } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { turnosDeFecha } from "@/lib/fechas"

type Props = {
  fecha: Date | undefined
  turnoId: string | null
  onFechaChange: (d: Date | undefined) => void
  onTurnoChange: (id: string) => void
}

export function FechaTurnoPicker({
  fecha,
  turnoId,
  onFechaChange,
  onTurnoChange,
}: Props) {
  const turnos = turnosDeFecha(fecha)
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <p className="text-xs font-semibold tracking-widest uppercase text-brand-text-muted mb-2">
          Fecha
        </p>
        <div className="rounded-xl border border-brand-blue/15 bg-brand-off/40 p-3 inline-block">
          <Calendar
            key={fecha ? fecha.toISOString() : "empty"}
            mode="single"
            locale={es}
            selected={fecha}
            defaultMonth={fecha}
            onSelect={onFechaChange}
            disabled={(d) => d < today}
            showOutsideDays
            className="bg-transparent"
          />
        </div>
      </div>

      <div>
        <p className="text-xs font-semibold tracking-widest uppercase text-brand-text-muted mb-2">
          Turno
        </p>
        {!fecha ? (
          <div className="rounded-xl border border-dashed border-brand-blue/25 bg-brand-blue-light/30 p-6 text-center text-sm text-brand-text-muted">
            <CalIcon className="mx-auto size-7 text-brand-blue/40" />
            <p className="mt-2">Selecciona una fecha primero</p>
          </div>
        ) : (
          <div className="space-y-2">
            {turnos.map((t) => {
              const seleccionado = turnoId === t.id
              return (
                <button
                  type="button"
                  key={t.id}
                  onClick={() => onTurnoChange(t.id)}
                  className={`w-full text-left rounded-xl border-[1.5px] p-4 transition-all ${
                    seleccionado
                      ? "border-brand-blue bg-brand-blue-light shadow-brand-sm"
                      : "border-brand-blue/20 bg-white hover:border-brand-blue/40 hover:bg-brand-blue-light/30"
                  }`}
                >
                  <div className="flex items-center gap-2 font-semibold text-brand-text">
                    <Clock className="size-4 text-brand-blue" />
                    {t.inicio} – {t.fin}
                  </div>
                  <p className="mt-0.5 text-xs text-brand-text-muted">
                    {t.turno}
                  </p>
                </button>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
