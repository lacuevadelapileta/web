"use client"

import { stats } from "@/content/cueva"
import { NumberTicker } from "@/components/ui/NumberTicker"

export function StatsBar() {
  return (
    <section className="bg-brand-blue text-white">
      <div className="container-pileta py-12 md:py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 md:gap-x-0">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`px-4 ${
                i < stats.length - 1
                  ? "md:border-r md:border-white/20"
                  : ""
              } text-center md:text-left`}
            >
              <p className="font-display text-4xl md:text-5xl leading-none tracking-tight">
                <NumberTicker
                  value={s.valor}
                  prefix={s.prefijo}
                  suffix={s.sufijo}
                  formatThousands={s.formatear}
                />
                {s.unidad && (
                  <span className="block text-base md:text-lg font-sans font-medium text-white/80 mt-1.5">
                    {s.unidad}
                  </span>
                )}
              </p>
              <p className="mt-3 text-[0.72rem] md:text-xs font-semibold tracking-[0.18em] uppercase text-white/75">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
