import Link from "next/link"
import { Phone, Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { contacto } from "@/content/cueva"
import { waLink } from "@/lib/whatsapp"

export function CtaBand() {
  return (
    <section className="relative bg-brand-blue text-white overflow-hidden">
      {/* Decoración */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.12)_0%,_transparent_55%)]"
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -left-20 size-96 rounded-full bg-white/5 blur-3xl"
      />

      <div className="relative container-pileta py-20 md:py-24 text-center">
        <p className="text-[0.72rem] font-semibold tracking-[0.24em] uppercase text-white/80">
          Reserva tu visita
        </p>
        <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] leading-tight mt-4 max-w-3xl mx-auto">
          Las plazas se agotan rápido en fin de semana
        </h2>
        <p className="mt-5 text-base md:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
          Solo 20 personas por turno. Reserva ahora y asegura tu sitio en una de
          las cuevas paleolíticas mejor conservadas del mundo.
        </p>

        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link href="/reservar">
            <Button className="h-12 px-7 bg-white text-brand-blue hover:bg-brand-off font-semibold rounded-lg text-base shadow-brand-sm w-full sm:w-auto">
              <Calendar className="size-4 mr-2" />
              Reservar Entrada
              <ArrowRight className="size-4 ml-2" />
            </Button>
          </Link>
          <Link href="/visita#horarios">
            <Button
              variant="outline"
              className="h-12 px-7 bg-transparent border-[1.5px] border-white/70 text-white hover:bg-white/10 hover:text-white font-semibold rounded-lg text-base w-full sm:w-auto"
            >
              Ver horarios y tarifas
            </Button>
          </Link>
        </div>

        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-5">
          <a
            href={`tel:${contacto.telefonoTel}`}
            className="inline-flex items-center gap-2.5 text-sm font-medium text-white/85 hover:text-white transition-colors"
          >
            <Phone className="size-4" />
            <span>
              <strong className="text-white">{contacto.telefono}</strong>
              <span className="text-white/65"> · Atención {contacto.horarioAtencion}</span>
            </span>
          </a>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-brand-sun transition-colors"
          >
            Escríbenos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
