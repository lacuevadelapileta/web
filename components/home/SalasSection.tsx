import Link from "next/link"
import { ArrowRight, MapPin } from "lucide-react"
import { RevealOnScroll } from "@/components/ui/RevealOnScroll"
import { salas } from "@/content/cueva"

export function SalasSection() {
  return (
    <section className="bg-brand-white">
      <div className="container-pileta py-20 md:py-24">
        <div className="grid md:grid-cols-[1fr_1.1fr] gap-10 md:gap-16 items-end">
          <RevealOnScroll>
            <div>
              <span className="eyebrow-pill">
                <MapPin className="size-3.5" />
                El Recorrido
              </span>
              <h2 className="h-display mt-5 text-[clamp(1.9rem,3vw,2.6rem)]">
                Nueve salas, <em>500 metros</em>, una sola hora
              </h2>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <p className="text-brand-text-muted text-base md:text-lg leading-relaxed">
              Cada sala cuenta una parte distinta de la historia de La Pileta —
              desde las pinturas más antiguas en la Sala del Castillo hasta el
              gran pez ocre que da fama a esta cueva. Esto es lo que verás.
            </p>
          </RevealOnScroll>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {salas.map((s, i) => (
            <RevealOnScroll key={s.n} delay={0.05 + (i % 3) * 0.05}>
              <article className="group h-full rounded-2xl bg-white border border-brand-blue/15 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-brand-sm hover:border-brand-blue/30">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-4xl text-brand-blue leading-none">
                    {s.n}
                  </span>
                  <span className="h-px flex-1 bg-brand-blue/15" />
                </div>
                <h3 className="mt-4 font-semibold text-lg text-brand-text leading-snug">
                  {s.nombre}
                </h3>
                <p className="mt-2 text-sm text-brand-text-muted leading-relaxed">
                  {s.desc}
                </p>
              </article>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={0.4}>
          <div className="mt-10 flex justify-center">
            <Link
              href="/la-cueva#salas"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-brand-blue-dark group"
            >
              Conoce cada sala con detalle
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
