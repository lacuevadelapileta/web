import Link from "next/link"
import { ArrowLeft, Phone, Clock, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { contacto, tarifas, horarios } from "@/content/cueva"

export function ReservarContent() {
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
          Las reservas se gestionan de forma personal, por teléfono — no hay
          pago online. Llama y dinos qué fecha y turno prefieres, te
          confirmamos la plaza al momento.
        </p>

        <div className="mt-8 grid lg:grid-cols-[1fr_360px] gap-8 items-start">
          {/* Llamada */}
          <div className="bg-white rounded-2xl border border-brand-blue/15 shadow-brand-sm p-6 md:p-10 text-center">
            <div className="inline-flex items-center gap-2 text-brand-blue">
              <Phone className="size-4" />
              <span className="text-[0.78rem] font-semibold tracking-[0.14em] uppercase">
                Reserva por teléfono
              </span>
            </div>
            <a
              href={`tel:${contacto.telefonoTel}`}
              className="block mt-4 font-display text-4xl md:text-5xl text-brand-text hover:text-brand-blue transition-colors"
            >
              {contacto.telefono}
            </a>
            <p className="mt-3 text-sm text-brand-text-muted">
              Atención: {contacto.horarioAtencion}
            </p>
            <a href={`tel:${contacto.telefonoTel}`} className="inline-block mt-6">
              <Button className="h-12 px-8 bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold rounded-lg shadow-brand-sm">
                <Phone className="size-4 mr-2" />
                Llamar ahora
              </Button>
            </a>
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
