import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Users } from "lucide-react"
import { RevealOnScroll } from "@/components/ui/RevealOnScroll"
import { imagenes } from "@/content/imagenes"

export function HistoriaFamiliarSection() {
  return (
    <section className="bg-brand-white">
      <div className="container-pileta py-20 md:py-24">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-center">
          <RevealOnScroll>
            <span className="eyebrow-pill">
              <Users className="size-3.5" />
              Legado familiar
            </span>
            <h2 className="h-display mt-5 text-[clamp(1.9rem,3.2vw,2.8rem)]">
              Cinco generaciones custodiando <em>la Pileta</em>
            </h2>
            <p className="mt-5 text-base md:text-[1.05rem] text-brand-text-muted leading-relaxed">
              En la fotografía, José Bullón Lobato — quien descubrió la cueva
              en 1905 — junto a su hijo Tomás Bullón García, que en 1933
              encontraría las Nuevas Galerías. Hoy, la quinta generación de
              la familia sigue guiando cada visita.
            </p>
            <div className="mt-7">
              <Link
                href="/la-cueva"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-brand-blue-dark group"
              >
                Conoce la historia completa
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.15}>
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-brand-md">
              <Image
                src={imagenes.historiaFamilia}
                alt="José Bullón Lobato, descubridor de la cueva, junto a su hijo Tomás Bullón García"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
