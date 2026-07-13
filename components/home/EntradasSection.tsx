import Link from "next/link"
import { Check, Ticket, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RevealOnScroll } from "@/components/ui/RevealOnScroll"
import { tarifas } from "@/content/cueva"

const features: Record<string, string[]> = {
  nino: [
    "Visita guiada de 60 minutos",
    "Lámpara portátil incluida",
    "Acceso a todas las salas",
  ],
  adulto: [
    "Visita guiada de 60 minutos",
    "Lámpara portátil incluida",
    "Acceso a las 9 salas",
    "Guía bilingüe ES / EN",
  ],
  grupo: [
    "Tarifa especial mín. 15 personas",
    "Visita adaptada a edad/programa",
    "Material didáctico opcional",
  ],
}

export function EntradasSection() {
  const visibles = tarifas.filter((t) => t.id !== "menor5")

  return (
    <section className="bg-brand-off">
      <div className="container-pileta py-20 md:py-24">
        <RevealOnScroll>
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow-pill">
              <Ticket className="size-3.5" />
              Tarifas
            </span>
            <h2 className="h-display mt-5 text-[clamp(1.9rem,3vw,2.6rem)]">
              Elige tu entrada
            </h2>
            <p className="mt-4 text-brand-text-muted text-base md:text-lg leading-relaxed">
              Aforo limitado a 20 personas por turno. Reserva con tiempo, sobre
              todo en fines de semana y festivos.
            </p>
          </div>
        </RevealOnScroll>

        <div className="mt-14 grid md:grid-cols-3 gap-6 md:gap-7 items-stretch">
          {visibles.map((t, i) => {
            const feats = features[t.id] ?? []
            const destacado = t.destacado
            return (
              <RevealOnScroll key={t.id} delay={0.1 + i * 0.08}>
                <article
                  className={`relative h-full flex flex-col rounded-2xl bg-white p-7 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-brand-md ${
                    destacado
                      ? "border-2 border-brand-blue shadow-brand-md"
                      : "border border-brand-blue/15 shadow-brand-sm"
                  }`}
                >
                  {destacado && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center rounded-full bg-brand-blue px-3.5 py-1 text-[0.68rem] font-semibold uppercase tracking-widest text-white shadow-brand-sm whitespace-nowrap">
                      Más popular
                    </span>
                  )}
                  <p className="text-sm font-semibold tracking-wide uppercase text-brand-blue">
                    {t.label}
                  </p>
                  {t.sublabel && (
                    <p className="mt-1 text-xs text-brand-text-light">
                      {t.sublabel}
                    </p>
                  )}

                  <div className="mt-5 flex items-baseline gap-1">
                    {t.requiereContacto ? (
                      <span className="font-display text-3xl text-brand-text">
                        Consultar
                      </span>
                    ) : (
                      <>
                        <span className="font-display text-5xl text-brand-text">
                          {t.precio}€
                        </span>
                        <span className="text-sm text-brand-text-muted">
                          / persona
                        </span>
                      </>
                    )}
                  </div>

                  <ul className="mt-6 space-y-2.5 flex-1">
                    {feats.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-sm text-brand-text"
                      >
                        <Check className="size-4 mt-0.5 shrink-0 text-brand-green" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7">
                    {t.requiereContacto ? (
                      <Link href="/contacto">
                        <Button
                          variant="outline"
                          className="w-full h-11 border-[1.5px] border-brand-blue text-brand-blue hover:bg-brand-blue-light hover:text-brand-blue-dark font-semibold rounded-lg bg-white"
                        >
                          <Phone className="size-4 mr-2" />
                          Solicitar presupuesto
                        </Button>
                      </Link>
                    ) : (
                      <Link href="/reservar">
                        <Button
                          className={
                            destacado
                              ? "w-full h-11 bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold rounded-lg shadow-brand-sm"
                              : "w-full h-11 bg-white border-[1.5px] border-brand-blue text-brand-blue hover:bg-brand-blue-light hover:text-brand-blue-dark font-semibold rounded-lg"
                          }
                        >
                          Reservar
                        </Button>
                      </Link>
                    )}
                  </div>

                  {!t.requiereContacto && (
                    <div className="mt-3 flex items-center justify-center gap-1.5 rounded-lg bg-brand-green-light px-3 py-1.5 text-[0.72rem] font-semibold text-brand-green">
                      <span className="size-1.5 rounded-full bg-brand-green" />
                      Reserva por teléfono
                    </div>
                  )}
                </article>
              </RevealOnScroll>
            )
          })}
        </div>

        <RevealOnScroll delay={0.3}>
          <p className="mt-10 text-center text-sm text-brand-text-muted">
            🎫 <strong>Menores de 5 años</strong>: entrada gratuita ·{" "}
            <strong>IVA incluido</strong> en todos los precios
          </p>
        </RevealOnScroll>
      </div>
    </section>
  )
}
