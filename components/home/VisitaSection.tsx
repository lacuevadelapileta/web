import { Flashlight, Fish, Users, Clock, Sparkles } from "lucide-react"
import { RevealOnScroll } from "@/components/ui/RevealOnScroll"

type Card = {
  icon: React.ReactNode
  title: string
  desc: string
  meta: { icon: React.ReactNode; text: string }[]
  destacado?: boolean
  badge?: string
}

const cards: Card[] = [
  {
    icon: <Flashlight className="size-6" />,
    title: "Visita con Lámpara Portátil",
    desc:
      "Sin luz eléctrica. La cueva se recorre como hace un siglo: lámpara en mano, descubriendo cada pintura a la luz que tú llevas.",
    meta: [
      { icon: <Clock className="size-3.5" />, text: "60 min" },
      { icon: <Users className="size-3.5" />, text: "Máx. 20" },
    ],
  },
  {
    icon: <Fish className="size-6" />,
    title: "La Sala del Pez",
    desc:
      "Un pez de 1,5 m pintado en ocre hace 20.000 años. La joya de La Pileta y una de las pinturas más enigmáticas del Paleolítico europeo.",
    meta: [
      { icon: <Sparkles className="size-3.5" />, text: "~20.000 a.C." },
      { icon: <Users className="size-3.5" />, text: "Imprescindible" },
    ],
    destacado: true,
    badge: "Imprescindible",
  },
  {
    icon: <Users className="size-6" />,
    title: "Guías Familia Bullón",
    desc:
      "Cuarta generación de descendientes del descubridor. Conocen cada rincón porque crecieron entre estas paredes. Visitas en ES y EN.",
    meta: [
      { icon: <Sparkles className="size-3.5" />, text: "ES · EN" },
      { icon: <Users className="size-3.5" />, text: "Locales" },
    ],
  },
]

export function VisitaSection() {
  return (
    <section className="bg-brand-white">
      <div className="container-pileta py-20 md:py-24">
        <RevealOnScroll>
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow-pill">
              <Sparkles className="size-3.5" />
              La Experiencia
            </span>
            <h2 className="h-display mt-5 text-[clamp(1.9rem,3vw,2.6rem)]">
              Una visita que no se parece a <em>ninguna otra</em>
            </h2>
            <p className="mt-4 text-brand-text-muted text-base md:text-lg leading-relaxed">
              Sin barreras, sin luces eléctricas, sin multitudes. Solo tú, una
              lámpara y 33.000 años de historia.
            </p>
          </div>
        </RevealOnScroll>

        <div className="mt-14 grid md:grid-cols-3 gap-6 md:gap-7">
          {cards.map((c, i) => (
            <RevealOnScroll key={c.title} delay={0.1 + i * 0.08}>
              <article
                className={`relative h-full rounded-2xl bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-brand-md ${
                  c.destacado
                    ? "border-2 border-brand-blue shadow-brand-md"
                    : "border border-brand-blue/15 shadow-brand-sm"
                }`}
              >
                {c.badge && (
                  <span className="absolute -top-3 left-7 inline-flex items-center rounded-full bg-brand-blue px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-widest text-white shadow-brand-sm">
                    {c.badge}
                  </span>
                )}
                <div className="size-12 rounded-xl bg-brand-blue-light flex items-center justify-center text-brand-blue">
                  {c.icon}
                </div>
                <h3 className="mt-5 font-display text-2xl text-brand-text">
                  {c.title}
                </h3>
                <p className="mt-3 text-[0.95rem] text-brand-text-muted leading-relaxed">
                  {c.desc}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {c.meta.map((m) => (
                    <span
                      key={m.text}
                      className="inline-flex items-center gap-1.5 rounded-full bg-brand-off px-2.5 py-1 text-xs font-medium text-brand-text-muted"
                    >
                      <span className="text-brand-blue">{m.icon}</span>
                      {m.text}
                    </span>
                  ))}
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
