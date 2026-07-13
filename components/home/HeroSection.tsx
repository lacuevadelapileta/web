"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { MapPin, Clock, Users, CalendarCheck, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BookingWidget } from "@/components/home/BookingWidget"
import { imagenes } from "@/content/imagenes"

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.13, delayChildren: 0.15 },
  },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.21, 0.45, 0.27, 0.9] as const },
  },
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Imagen de fondo full-bleed */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={imagenes.heroFondo}
          alt="Interior de la Cueva de la Pileta con formaciones milenarias"
          fill
          priority
          sizes="100vw"
          className="object-cover scale-105 motion-safe:animate-[heroZoom_18s_ease-in-out_infinite_alternate]"
        />
        {/* Capa de oscurecimiento principal */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/75" />
        {/* Tinte azul de marca para coherencia */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(26,95,150,0.35)_0%,_transparent_60%)] mix-blend-multiply" />
      </div>

      {/* Contenido — empuja por debajo del navbar transparente */}
      <div className="container-pileta relative pt-28 md:pt-36 pb-12 md:pb-16 min-h-[88vh] md:min-h-[92vh] flex flex-col justify-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-md border border-white/25 px-3.5 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white shadow-[0_2px_12px_rgba(0,0,0,0.18)]"
          >
            <MapPin className="size-3.5" />
            Benaoján, Málaga · Serranía de Ronda
          </motion.span>

          <motion.h1
            variants={item}
            className="font-display mt-6 text-white text-[clamp(2.6rem,6vw,5rem)] leading-[1.02] tracking-tight drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)]"
          >
            Descubre la Cueva de <em className="text-brand-sun italic">la Pileta</em>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 text-lg md:text-2xl text-white/85 leading-relaxed max-w-[52ch] drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]"
          >
            Arte rupestre de 40.000 años en el corazón de Andalucía. Una
            experiencia única, con lámpara en la mano, sin filas ni museos.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <Link href="/reservar">
              <Button className="h-12 px-7 bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.35)] text-base w-full sm:w-auto">
                Reservar visita →
              </Button>
            </Link>
            <Link href="/la-cueva">
              <Button
                variant="outline"
                className="h-12 px-7 border-[1.5px] border-white/40 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 hover:text-white font-semibold rounded-lg text-base w-full sm:w-auto"
              >
                Descubrir la historia
              </Button>
            </Link>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-white/80"
          >
            <span className="inline-flex items-center gap-2">
              <Clock className="size-4 text-brand-sun" />
              1h 20min de visita
            </span>
            <span className="inline-flex items-center gap-2">
              <Users className="size-4 text-brand-sun" />
              Máx. 20 personas
            </span>
            <span className="inline-flex items-center gap-2">
              <CalendarCheck className="size-4 text-brand-sun" />
              Abierto todo el año
            </span>
          </motion.div>
        </motion.div>

        {/* Booking widget en card flotante sobre el fondo */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.6, ease: "easeOut" }}
          className="mt-10 md:mt-14 max-w-3xl"
        >
          <div className="rounded-2xl bg-white/95 backdrop-blur-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] p-2">
            <BookingWidget />
          </div>
        </motion.div>

        {/* Indicador scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5 text-white/65 text-[0.7rem] font-semibold tracking-widest uppercase"
        >
          <span>Descubrir más</span>
          <ArrowDown className="size-4 animate-bounce" />
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes heroZoom {
          from {
            transform: scale(1.05);
          }
          to {
            transform: scale(1.12);
          }
        }
      `}</style>
    </section>
  )
}
