import Image from "next/image"
import { Camera, Instagram, ArrowRight } from "lucide-react"
import { RevealOnScroll } from "@/components/ui/RevealOnScroll"
import { imagenes } from "@/content/imagenes"

const tiles = [
  { src: imagenes.galeria[0].src, label: imagenes.galeria[0].label, span: "md:col-span-2 md:row-span-2" },
  { src: imagenes.galeria[1].src, label: imagenes.galeria[1].label, span: "" },
  { src: imagenes.galeria[3].src, label: imagenes.galeria[3].label, span: "" },
  { src: imagenes.galeria[5].src, label: imagenes.galeria[5].label, span: "md:col-span-2" },
]

export function GaleriaPreview() {
  return (
    <section className="bg-brand-off">
      <div className="container-pileta py-20 md:py-24">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-5">
          <RevealOnScroll>
            <div>
              <span className="eyebrow-pill">
                <Camera className="size-3.5" />
                Galería
              </span>
              <h2 className="h-display mt-5 text-[clamp(1.9rem,3vw,2.6rem)] max-w-lg">
                Lo que verás <em>al entrar</em>
              </h2>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <a
              href="https://www.instagram.com/cuevadelapileta/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-brand-blue-dark group"
            >
              <Instagram className="size-4" />
              Ver más en Instagram
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </RevealOnScroll>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[240px]">
          {tiles.map((t, i) => (
            <RevealOnScroll
              key={i}
              delay={0.05 + i * 0.08}
              className={`relative ${t.span}`}
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden group cursor-pointer shadow-brand-sm">
                <Image
                  src={t.src}
                  alt={t.label}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
                <span className="absolute bottom-3 left-4 right-4 text-white text-xs font-semibold tracking-widest uppercase z-10">
                  {t.label}
                </span>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
