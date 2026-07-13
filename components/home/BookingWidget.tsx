import { Phone, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { contacto, horarios } from "@/content/cueva"

export function BookingWidget() {
  return (
    <div className="relative">
      {/* Decorative gradient halo */}
      <div
        aria-hidden
        className="absolute -inset-2 -z-10 rounded-2xl bg-gradient-to-br from-brand-blue/15 via-transparent to-brand-green/10 blur-2xl"
      />

      <div className="rounded-2xl bg-white border border-brand-blue/15 shadow-brand-md p-5 sm:p-6">
        <div className="flex items-center gap-2 text-brand-blue">
          <Phone className="size-4" />
          <span className="text-[0.78rem] font-semibold tracking-[0.14em] uppercase">
            Reserva por teléfono
          </span>
        </div>

        <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex-1">
            <a
              href={`tel:${contacto.telefonoTel}`}
              className="font-display text-2xl sm:text-3xl text-brand-text hover:text-brand-blue transition-colors"
            >
              {contacto.telefono}
            </a>
            <p className="mt-1.5 flex items-center gap-1.5 text-xs text-brand-text-muted">
              <Clock className="size-3.5" />
              {contacto.horarioAtencion}
            </p>
          </div>
          <a href={`tel:${contacto.telefonoTel}`}>
            <Button className="h-11 w-full sm:w-auto px-6 bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold rounded-lg shadow-brand-sm">
              <Phone className="size-4 mr-2" />
              Llamar
            </Button>
          </a>
        </div>

        <p className="mt-3 text-xs text-brand-text-muted">
          Turnos: {horarios.laboral.map((t) => t.inicio).join(" y ")} (laborables) ·{" "}
          {horarios.findeSemanaFestivo.map((t) => t.inicio).join(", ")} (fines de semana)
        </p>
      </div>
    </div>
  )
}
