import Image from "next/image"
import { Star } from "lucide-react"
import { RevealOnScroll } from "@/components/ui/RevealOnScroll"
import { reviews, reviewsStats, type Review } from "@/content/cueva"
import { cn } from "@/lib/utils"

// Iniciales del autor para el avatar.
function iniciales(nombre: string): string {
  return nombre
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("")
}

// Color reproducible por hash del autor — paleta de marca.
function avatarColor(nombre: string): string {
  const paleta = [
    "bg-brand-blue text-white",
    "bg-brand-green text-white",
    "bg-amber-500 text-white",
    "bg-rose-500 text-white",
    "bg-indigo-500 text-white",
    "bg-teal-600 text-white",
  ]
  let hash = 0
  for (let i = 0; i < nombre.length; i++) hash = (hash * 31 + nombre.charCodeAt(i)) >>> 0
  return paleta[hash % paleta.length]
}

function fechaRelativa(iso: string): string {
  const d = new Date(`${iso}T12:00:00`)
  return new Intl.DateTimeFormat("es-ES", {
    month: "long",
    year: "numeric",
  }).format(d)
}

function badgePlataforma(p: Review["plataforma"]) {
  switch (p) {
    case "Google":
      return {
        label: "Google",
        color: "bg-blue-50 text-blue-700 border-blue-200",
        icono: "/img/plataformas/google-icon.svg",
      }
    case "TripAdvisor":
      return {
        label: "TripAdvisor",
        color: "bg-emerald-50 text-emerald-700 border-emerald-200",
        icono: "/img/plataformas/tripadvisor-icon.svg",
      }
    case "Booking":
      return {
        label: "Booking",
        color: "bg-indigo-50 text-indigo-700 border-indigo-200",
        icono: "/img/plataformas/booking-icon.svg",
      }
  }
}

export function ReviewsSection() {
  return (
    <section className="bg-brand-white">
      <div className="container-pileta py-20 md:py-28">
        {/* Header */}
        <RevealOnScroll>
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow-pill">
              <Star className="size-3.5 fill-brand-blue" />
              Reseñas verificadas
            </span>
            <h2 className="h-display mt-5 text-[clamp(1.9rem,3.2vw,2.8rem)]">
              {reviewsStats.rating} ★ sobre 5 en <em>{reviewsStats.total.toLocaleString("es-ES")}</em>{" "}
              opiniones
            </h2>
            <p className="mt-4 text-brand-text-muted text-base md:text-lg leading-relaxed">
              Lo que dicen los visitantes que reservaron en los últimos 12 meses.
            </p>
          </div>
        </RevealOnScroll>

        {/* Stats bar de plataformas */}
        <RevealOnScroll delay={0.08}>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto">
            {reviewsStats.porPlataforma.map((p) => (
              <div
                key={p.nombre}
                className="flex items-center gap-3 rounded-2xl bg-brand-off border border-brand-blue/10 px-5 py-4"
              >
                <span className="size-10 rounded-full bg-white border border-brand-blue/10 p-2 flex items-center justify-center shadow-brand-sm shrink-0">
                  <Image
                    src={p.icono}
                    alt={p.nombre}
                    width={24}
                    height={24}
                    className="size-full object-contain"
                  />
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-text-muted">
                    {p.nombre}
                  </p>
                  <p className="font-display text-lg text-brand-text leading-tight">
                    {p.rating} ★{" "}
                    <span className="text-xs text-brand-text-muted font-sans font-normal">
                      ({p.total.toLocaleString("es-ES")})
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        {/* Grid de reseñas — masonry columns */}
        <div className="mt-14 columns-1 md:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
          {reviews.map((r, i) => {
            const b = badgePlataforma(r.plataforma)
            return (
              <RevealOnScroll
                key={r.autor + r.fecha}
                delay={0.04 * (i % 6)}
                className="mb-5 break-inside-avoid block"
              >
                <article className="rounded-2xl bg-white border border-brand-blue/15 shadow-brand-sm hover:shadow-brand-md transition-shadow p-6 md:p-7">
                  {/* Header: avatar + autor + plataforma */}
                  <header className="flex items-start gap-3">
                    <span
                      className={cn(
                        "size-11 rounded-full font-semibold flex items-center justify-center text-sm shrink-0 shadow-brand-sm",
                        avatarColor(r.autor)
                      )}
                      aria-hidden
                    >
                      {iniciales(r.autor)}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm text-brand-text leading-tight">
                        {r.autor}
                      </p>
                      <p className="text-xs text-brand-text-muted mt-0.5">
                        {r.ciudad} · {fechaRelativa(r.fecha)}
                      </p>
                    </div>
                    <span
                      className={cn(
                        "shrink-0 inline-flex items-center justify-center rounded-full border size-7 p-1.5",
                        b.color
                      )}
                    >
                      <Image
                        src={b.icono}
                        alt={b.label}
                        width={16}
                        height={16}
                        className="size-full object-contain"
                      />
                    </span>
                  </header>

                  {/* Rating */}
                  <div className="mt-4 flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star
                        key={j}
                        className={cn(
                          "size-4",
                          j < r.rating ? "text-brand-sun" : "text-brand-blue/15"
                        )}
                        fill="currentColor"
                        strokeWidth={0}
                      />
                    ))}
                  </div>

                  {/* Texto */}
                  <p className="mt-3 text-[0.95rem] text-brand-text leading-relaxed">
                    &ldquo;{r.texto}&rdquo;
                  </p>
                </article>
              </RevealOnScroll>
            )
          })}
        </div>

        {/* CTA */}
        <RevealOnScroll delay={0.1}>
          <div className="mt-14 text-center">
            <a
              href="https://www.google.com/maps/place/Cueva+de+la+Pileta"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-brand-blue-dark"
            >
              Ver todas las reseñas en Google
              <span aria-hidden>→</span>
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
