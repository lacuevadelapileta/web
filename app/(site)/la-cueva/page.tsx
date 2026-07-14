import Image from "next/image"
import Link from "next/link"
import {
  ScrollText,
  Fish,
  Palette,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { RevealOnScroll } from "@/components/ui/RevealOnScroll"
import { SalasSection } from "@/components/home/SalasSection"
import { timelineHistoria } from "@/content/cueva"
import { imagenes } from "@/content/imagenes"
import type { Metadata } from "next"
import { breadcrumbSchema } from "@/lib/schema"
import { JsonLd } from "@/components/seo/JsonLd"

export const metadata: Metadata = {
  title: "Historia y Pinturas — Cueva de la Pileta",
  description:
    "120 años custodiada por la familia Bullón. Descubre la historia de la Cueva de la Pileta, sus pinturas rupestres de 40.000 años y las 9 salas que componen el recorrido.",
  alternates: { canonical: "/la-cueva" },
}

const pinturasDestacadas = [
  {
    nombre: "El Pez",
    edad: "~20.000 a.C.",
    desc: "Pez de 1,5 m pintado en ocre. La joya de La Pileta y una de las pinturas más enigmáticas del Paleolítico europeo.",
    color: "bg-brand-sun-light text-amber-700",
  },
  {
    nombre: "La Yegua Preñada",
    edad: "~22.000 a.C.",
    desc: "Caballo gravado y pintado con la silueta del feto visible en el vientre. Solutrense.",
    color: "bg-brand-green-light text-brand-green",
  },
  {
    nombre: "El Bisonte",
    edad: "~25.000 a.C.",
    desc: "Cuerpo macizo en ocre rojo, con detalles del pelaje del cuello marcados con líneas finas.",
    color: "bg-brand-blue-light text-brand-blue",
  },
  {
    nombre: "La Foca",
    edad: "~20.000 a.C.",
    desc: "Una de las pocas representaciones marinas conocidas en arte rupestre paleolítico ibérico.",
    color: "bg-brand-sun-light text-amber-700",
  },
  {
    nombre: "Los Signos Abstractos",
    edad: "~40.000 a.C.",
    desc: "Tectiformes y trazos geométricos repartidos por toda la cueva. Las pinturas más antiguas.",
    color: "bg-brand-blue-light text-brand-blue",
  },
]

export default function LaCuevaPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "La Cueva", path: "/la-cueva" }])} />
      {/* Hero editorial */}
      <section className="relative bg-brand-white overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,_var(--blue-light)_0%,_transparent_55%)]"
        />
        <div className="container-pileta pt-12 md:pt-16 pb-12">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
            <RevealOnScroll>
              <span className="eyebrow-pill">
                <ScrollText className="size-3.5" />
                1905 – 2025 · 120 años custodiada
              </span>
              <h1 className="h-display mt-5 text-[clamp(2.2rem,5vw,4rem)]">
                La historia de <em>la Pileta</em>
              </h1>
              <p className="mt-5 text-lg text-brand-text-muted leading-relaxed max-w-prose">
                Una grieta encontrada por casualidad buscando guano de
                murciélago en 1905. Hoy, uno de los conjuntos de arte rupestre
                paleolítico más importantes de Europa, custodiado por cuatro
                generaciones de la misma familia.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.15}>
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-brand-md">
                <Image
                  src={imagenes.exterior}
                  alt="Entrada a la Cueva de la Pileta"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-brand-off">
        <div className="container-pileta py-16 md:py-24">
          <RevealOnScroll>
            <div className="max-w-2xl">
              <span className="eyebrow-pill">Cronología</span>
              <h2 className="h-display mt-5 text-[clamp(1.8rem,3vw,2.6rem)]">
                Una historia de 120 años
              </h2>
            </div>
          </RevealOnScroll>

          <div className="mt-12 relative max-w-3xl mx-auto">
            {/* Línea vertical */}
            <div
              aria-hidden
              className="absolute left-[18px] md:left-1/2 -translate-x-1/2 top-2 bottom-2 w-0.5 bg-brand-blue/20"
            />

            <ul className="space-y-8 md:space-y-10">
              {timelineHistoria.map((h, i) => {
                const izquierda = i % 2 === 0
                return (
                  <RevealOnScroll key={h.anio} delay={0.05 * i}>
                    <li className="relative md:grid md:grid-cols-2 md:gap-12 pl-12 md:pl-0">
                      {/* Punto */}
                      <span
                        aria-hidden
                        className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-1 size-9 rounded-full bg-white border-[3px] border-brand-blue flex items-center justify-center shadow-brand-sm"
                      >
                        <span className="size-2 rounded-full bg-brand-blue" />
                      </span>
                      <div
                        className={`md:col-start-${izquierda ? 1 : 2} ${
                          izquierda ? "md:text-right md:pr-4" : "md:text-left md:pl-4"
                        }`}
                      >
                        <p className="font-display text-2xl text-brand-blue">
                          {h.anio}
                        </p>
                        <p className="font-semibold text-brand-text mt-1">
                          {h.hito}
                        </p>
                        <p className="mt-2 text-sm text-brand-text-muted leading-relaxed">
                          {h.desc}
                        </p>
                      </div>
                    </li>
                  </RevealOnScroll>
                )
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* Pinturas destacadas */}
      <section id="pinturas" className="bg-brand-white">
        <div className="container-pileta py-16 md:py-24">
          <RevealOnScroll>
            <div className="max-w-2xl">
              <span className="eyebrow-pill">
                <Palette className="size-3.5" />
                Las pinturas
              </span>
              <h2 className="h-display mt-5 text-[clamp(1.8rem,3vw,2.6rem)]">
                Cinco obras que <em>no encontrarás</em> en ningún museo
              </h2>
              <p className="mt-4 text-brand-text-muted text-lg leading-relaxed">
                Más de 3.000 figuras y grabados en total. Estas son las que más
                conmueven a los visitantes.
              </p>
            </div>
          </RevealOnScroll>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {pinturasDestacadas.map((p, i) => (
              <RevealOnScroll key={p.nombre} delay={0.06 * i}>
                <article className="h-full rounded-2xl bg-white border border-brand-blue/15 shadow-brand-sm p-6 hover:shadow-brand-md transition-shadow">
                  <span
                    className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-wider ${p.color}`}
                  >
                    <Fish className="size-3" />
                    {p.edad}
                  </span>
                  <h3 className="mt-4 font-display text-xl text-brand-text">
                    {p.nombre}
                  </h3>
                  <p className="mt-2 text-sm text-brand-text-muted leading-relaxed">
                    {p.desc}
                  </p>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Las salas (reuse) */}
      <div id="salas">
        <SalasSection />
      </div>

      {/* Cita Breuil */}
      <section className="bg-brand-blue text-white">
        <div className="container-pileta py-20 md:py-24 text-center max-w-4xl mx-auto">
          <ScrollText
            className="mx-auto size-10 text-white/40"
            strokeWidth={1.2}
          />
          <blockquote className="mt-6">
            <p className="font-display italic text-2xl md:text-3xl leading-snug text-balance">
              &ldquo;La Pileta es uno de los santuarios subterráneos más
              importantes del arte paleolítico de toda Europa.&rdquo;
            </p>
            <footer className="mt-6 text-xs font-semibold tracking-widest uppercase text-white/75">
              — Henri Breuil, abate, 1912
            </footer>
          </blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-white">
        <div className="container-pileta py-16 md:py-20 text-center">
          <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.6rem)] max-w-2xl mx-auto leading-tight text-brand-text">
            Verlo en persona es otra cosa
          </h2>
          <p className="mt-4 text-brand-text-muted">
            Las pinturas no se aprecian igual en una foto. Reserva y vive la
            visita con lámpara propia.
          </p>
          <Link href="/reservar">
            <Button className="mt-7 h-12 px-7 bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold rounded-lg text-base shadow-brand-sm">
              Reservar visita
              <ArrowRight className="size-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}
