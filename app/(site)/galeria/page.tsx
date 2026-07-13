import Image from "next/image"
import Link from "next/link"
import { Camera, Instagram, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RevealOnScroll } from "@/components/ui/RevealOnScroll"
import { imagenes } from "@/content/imagenes"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Galería — Cueva de la Pileta",
  description:
    "Imágenes del interior de la Cueva de la Pileta, su entrada, el entorno de la Sierra de Líbar y el paisaje de la Serranía de Ronda.",
}

export default function GaleriaPage() {
  const tiles = imagenes.galeria
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-white">
        <div className="container-pileta pt-12 md:pt-16 pb-10">
          <RevealOnScroll>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5">
              <div>
                <span className="eyebrow-pill">
                  <Camera className="size-3.5" />
                  Galería
                </span>
                <h1 className="h-display mt-5 text-[clamp(2.2rem,4.5vw,3.6rem)] max-w-2xl">
                  La Pileta en <em>imágenes</em>
                </h1>
                <p className="mt-3 text-brand-text-muted max-w-prose">
                  Una selección visual de lo que verás al visitarnos: la cueva, el
                  pueblo blanco de Benaoján, la Sierra de Líbar y el Tajo de Ronda.
                </p>
              </div>
              <a
                href="https://www.instagram.com/cuevadelapileta/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-brand-blue-dark group"
              >
                <Instagram className="size-4" />
                @cuevadelapileta
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Grid masonry-style con 14 tiles distintos */}
      <section className="bg-brand-off">
        <div className="container-pileta py-12 md:py-16">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-5 [column-fill:_balance]">
            {tiles.map((t, i) => (
              <RevealOnScroll
                key={`${t.src}-${i}`}
                delay={0.03 * (i % 6)}
                className="mb-4 md:mb-5 break-inside-avoid block"
              >
                <div
                  className={`relative w-full ${t.aspect} rounded-2xl overflow-hidden group cursor-pointer shadow-brand-sm hover:shadow-brand-md transition-shadow`}
                >
                  <Image
                    src={t.src}
                    alt={t.label}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-90" />
                  <span className="absolute bottom-3 left-4 right-4 text-white text-xs font-semibold tracking-widest uppercase">
                    {t.label}
                  </span>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll>
            <div className="mt-12 text-center max-w-xl mx-auto bg-white rounded-2xl border border-brand-blue/15 shadow-brand-sm p-8">
              <p className="text-sm text-brand-text-muted">
                Síguenos en Instagram para ver fotos nuevas de visitantes,
                detalles de las pinturas, y momentos del día a día en la cueva.
              </p>
              <a
                href="https://www.instagram.com/cuevadelapileta/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="mt-5 h-11 bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold rounded-lg">
                  <Instagram className="size-4 mr-2" />
                  Ver Instagram
                </Button>
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-blue text-white">
        <div className="container-pileta py-14 text-center">
          <h2 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] max-w-2xl mx-auto leading-tight">
            La experiencia real es mucho mejor
          </h2>
          <Link href="/reservar">
            <Button className="mt-6 h-12 px-7 bg-white text-brand-blue hover:bg-brand-off font-semibold rounded-lg text-base">
              Reservar visita
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}
