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
          <span
            key={m}
            className="font-display text-xl md:text-2xl text-brand-text-muted/80 whitespace-nowrap"
          >
            {m}
          </span>
        ))}
      </Marquee>
    </section>
  )
}
