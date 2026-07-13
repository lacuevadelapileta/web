"use client"

import { useEffect, useMemo, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import {
  ArrowLeft,
  Phone,
  MessageCircle,
  Clock,
  Check,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { FechaTurnoPicker } from "@/components/reservar/FechaTurnoPicker"
import { contacto, tarifas, horarios } from "@/content/cueva"
import { formatFechaLarga, turnosDeFecha } from "@/lib/fechas"
import { waLink } from "@/lib/whatsapp"

export function ReservarContent() {
  const params = useSearchParams()

  const [fecha, setFecha] = useState<Date | undefined>(undefined)
  const [turnoId, setTurnoId] = useState<string | null>(null)

  // Precarga fecha/turno si se llega desde el widget de la home
  useEffect(() => {
    const f = params.get("fecha")
    const t = params.get("turno")
    if (f && /^\d{4}-\d{2}-\d{2}$/.test(f)) {
      setFecha(new Date(`${f}T12:00:00`))
    }
    if (t) setTurnoId(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const turno = useMemo(
    () => turnosDeFecha(fecha).find((t) => t.id === turnoId) ?? null,
    [fecha, turnoId]
  )

  const mensajeWhatsapp = useMemo(() => {
    if (fecha && turno) {
      return `Hola, quiero reservar visita a la Cueva de la Pileta para el ${formatFechaLarga(
        fecha
      )}, turno de ${turno.inicio} (${turno.turno}). ¿Está disponible ese turno? Si no, ¿cuál tenéis libre ese día?`
    }
    return "Hola, quiero reservar visita a la Cueva de la Pileta. ¿Qué turnos tenéis disponibles?"
  }, [fecha, turno])

  return (
    <div className="bg-brand-off min-h-[calc(100vh-72px)]">
      <div className="container-pileta py-8 md:py-14">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-brand-text-muted hover:text-brand-blue mb-3"
        >
          <ArrowLeft className="size-3.5" />
          Volver al inicio
        </Link>

        <h1 className="font-display text-3xl md:text-4xl text-brand-text leading-tight">
          Reserva tu visita
        </h1>
        <p className="mt-3 max-w-2xl text-brand-text-muted">
          Las reservas se gestionan de forma personal, por WhatsApp o
          teléfono — no hay pago online. Elige la fecha y el turno que
          prefieras y te confirmamos plaza al momento.
        </p>

        <div className="mt-8 grid lg:grid-cols-[1fr_360px] gap-8 items-start">
          {/* Selector fecha/turno */}
          <div className="bg-white rounded-2xl border border-brand-blue/15 shadow-brand-sm p-6 md:p-8">
            <FechaTurnoPicker
              fecha={fecha}
              turnoId={turnoId}
              onFechaChange={(d) => {
                setFecha(d)
                setTurnoId(null)
              }}
              onTurnoChange={setTurnoId}
            />

            <div className="mt-8 border-t border-brand-blue/10 pt-6">
              <p className="text-sm text-brand-text-muted">
                {fecha && turno ? (
                  <>
                    Turno elegido:{" "}
                    <strong className="text-brand-text">
                      {formatFechaLarga(fecha)}, {turno.inicio}–{turno.fin} (
                      {turno.turno})
                    </strong>
                  </>
                ) : (
                  "Elige fecha y turno, o contáctanos directamente si prefieres que te asesoremos."
                )}
              </p>

              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                <a
                  href={waLink(mensajeWhatsapp)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button className="w-full h-12 bg-brand-green hover:bg-emerald-600 text-white font-semibold rounded-lg shadow-brand-sm">
                    <MessageCircle className="size-4 mr-2" />
                    Reservar por WhatsApp
                  </Button>
                </a>
                <a href={`tel:${contacto.telefonoTel}`} className="flex-1">
                  <Button
                    variant="outline"
                    className="w-full h-12 border-[1.5px] border-brand-blue text-brand-blue hover:bg-brand-blue-light font-semibold rounded-lg bg-white"
                  >
                    <Phone className="size-4 mr-2" />
                    Llamar ahora
                  </Button>
                </a>
              </div>
              <p className="mt-3 text-xs text-brand-text-muted">
                Atención telefónica y WhatsApp: {contacto.horarioAtencion}
              </p>
            </div>
          </div>

          {/* Info lateral: tarifas + horarios */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-brand-blue/15 shadow-brand-sm p-6">
              <p className="text-xs font-semibold tracking-widest uppercase text-brand-text-muted mb-4">
                Tarifas
              </p>
              <ul className="space-y-3">
                {tarifas.map((t) => (
                  <li
                    key={t.id}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="text-brand-text">{t.label}</span>
                    <span className="font-semibold text-brand-blue">
                      {t.gratis
                        ? "Gratis"
                        : t.requiereContacto
                          ? "Consultar"
                          : `${t.precio}€`}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-brand-text-muted">
                IVA incluido. Aforo limitado a 20 personas por turno.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-brand-blue/15 shadow-brand-sm p-6">
              <p className="text-xs font-semibold tracking-widest uppercase text-brand-text-muted mb-4">
                Horarios
              </p>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold text-brand-text">Laborables</p>
                  <p className="text-brand-text-muted flex items-center gap-1.5 mt-1">
                    <Clock className="size-3.5" />
                    {horarios.laboral.map((t) => t.inicio).join(" y ")}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-brand-text">
                    Fines de semana y festivos
                  </p>
                  <p className="text-brand-text-muted flex items-center gap-1.5 mt-1">
                    <Clock className="size-3.5" />
                    {horarios.findeSemanaFestivo
                      .map((t) => t.inicio)
                      .join(", ")}
                  </p>
                </div>
              </div>
              <p className="mt-4 flex items-start gap-2 text-xs text-brand-text-muted">
                <Check className="size-3.5 mt-0.5 shrink-0 text-brand-green" />
                Llega 20 minutos antes de tu turno.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
