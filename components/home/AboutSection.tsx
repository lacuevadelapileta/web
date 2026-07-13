import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ShieldCheck } from "lucide-react"
import { RevealOnScroll } from "@/components/ui/RevealOnScroll"
import { imagenes } from "@/content/imagenes"

const badges = [
  "Monumento Nacional · 1924",
  "Bien de Interés Cultural · 1985",
  "Familia Bullón · 4 generaciones",
]

export function AboutSection() {
  return (
    <section className="bg-brand-off">
      <div className="container-pileta py-20 md:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <RevealOnScroll>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-brand-md">
              <Image
                src={imagenes.about}
                alt="Interior de la Cueva de la Pileta — luz cálida sobre formaciones milenarias"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </RevealOnScroll>

          <div>
            <RevealOnScroll delay={0.1}>
              <span className="eyebrow-pill">
                <ShieldCheck className="size-3.5" />
                Nuestra Historia
              </span>
            </RevealOnScroll>

            <RevealOnScroll delay={0.15}>
              <h2 className="h-display mt-5 text-[clamp(1.9rem,3.2vw,2.8rem)]">
                Una cueva descubierta por <em>casualidad</em> hace 120 años
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <p className="mt-5 text-base md:text-[1.05rem] text-brand-text-muted leading-relaxed">
                En 1905, José Bullón Lobato entró en una grieta de la Sierra de
                Líbar buscando guano de murciélago para fertilizar sus campos. Lo
                que encontró fueron pinturas de 33.000 años, uno de los conjuntos
                de arte rupestre paleolítico más importantes de Europa.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.25}>
              <blockquote className="mt-7 border-l-4 border-brand-blue bg-brand-blue-light/70 px-5 py-4 rounded-r-lg">
                <p className="font-display italic text-lg md:text-xl text-brand-text leading-snug">
                  &ldquo;No permitas que nada dañe la Cueva. Sus pinturas son un
                  tesoro que no tiene precio.&rdquo;
                </p>
                <footer className="mt-2 text-xs font-semibold tracking-widest uppercase text-brand-blue">
                  — José Bullón Lobato, 1905
                </footer>
              </blockquote>
            </RevealOnScroll>

            <RevealOnScroll delay={0.3}>
              <p className="mt-6 text-base text-brand-text-muted leading-relaxed">
                Cuatro generaciones de la familia Bullón han custodiado y guiado
                la cueva desde entonces. Hoy son Rosario y José Tomás Bullón
                Almagro quienes reciben a cada visitante con la misma pasión que
                su bisabuelo.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.35}>
              <ul className="mt-7 flex flex-wrap gap-2">
                {badges.map((b) => (
                  <li
                    key={b}
                    className="inline-flex items-center rounded-full border-[1.5px] border-brand-blue/30 bg-white px-3.5 py-1.5 text-xs font-semibold text-brand-blue"
                  >
                    {b}
                  </li>
                ))}
              </ul>
            </RevealOnScroll>

            <RevealOnScroll delay={0.4}>
              <div className="mt-7">
                <Link
                  href="/la-cueva"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-brand-blue-dark group"
                >
                  Lee la historia completa
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  )
}
