import Image from "next/image"
import { Marquee } from "@/components/ui/Marquee"
import { mediosMencionados } from "@/content/cueva"

export function MediosMarquee() {
  return (
    <section className="bg-brand-off border-y border-brand-blue/10 py-8">
      <p className="text-center text-[0.7rem] font-semibold tracking-[0.22em] uppercase text-brand-text-light mb-5">
        Mencionada en
      </p>
      <Marquee speed={45}>
        {mediosMencionados.map((m) => (
          <div
            key={m.nombre}
            className="flex items-center whitespace-nowrap grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
          >
            <Image
              src={m.logo}
              alt={m.nombre}
              width={140}
              height={32}
              className="h-7 md:h-8 w-auto object-contain"
            />
          </div>
        ))}
      </Marquee>
    </section>
  )
}
