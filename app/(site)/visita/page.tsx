import Image from "next/image"
import Link from "next/link"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Calendar as CalIcon,
  Car,
  AlertTriangle,
  Info,
} from "lucide-react"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { RevealOnScroll } from "@/components/ui/RevealOnScroll"
import {
  contacto,
  horarios,
  tarifas,
  recomendaciones,
  faqs,
} from "@/content/cueva"
import { imagenes } from "@/content/imagenes"
import type { Metadata } from "next"
import { breadcrumbSchema, GOOGLE_MAPS_URL } from "@/lib/schema"
import { JsonLd } from "@/components/seo/JsonLd"

export const metadata: Metadata = {
  title: "Visita la Cueva de la Pileta — Horarios, Tarifas y Cómo Llegar",
  description:
    "Toda la información práctica para visitar la Cueva de la Pileta: horarios, precios, ubicación, reservas y recomendaciones para la visita.",
  alternates: { canonical: "/visita" },
}

export default function VisitaPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Visita", path: "/visita" }])} />
      {/* Hero */}
      <section className="relative bg-brand-white overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--blue-light)_0%,_transparent_55%)]"
        />
        <div className="container-pileta pt-12 md:pt-16 pb-10">
          <RevealOnScroll>
            <span className="eyebrow-pill">
              <Info className="size-3.5" />
              Información práctica
            </span>
            <h1 className="h-display mt-5 text-[clamp(2.2rem,4.5vw,3.8rem)] max-w-3xl">
              Todo lo que necesitas para <em>tu visita</em>
            </h1>
            <p className="mt-4 max-w-2xl text-base md:text-lg text-brand-text-muted">
              Horarios, tarifas, cómo llegar y recomendaciones. Si tienes dudas
              después de leerlo, llámanos.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Tarjeta contacto destacada */}
      <section className="bg-brand-white pb-10">
        <div className="container-pileta">
          <RevealOnScroll>
            <div className="rounded-3xl bg-brand-blue text-white p-8 md:p-10 shadow-brand-md grid md:grid-cols-[1.2fr_1fr] gap-8 items-center">
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-white/75">
                  Reservas por teléfono
                </p>
                <a
                  href={`tel:${contacto.telefonoTel}`}
                  className="block mt-3 font-display text-4xl md:text-5xl tracking-tight"
                >
                  {contacto.telefono}
                </a>
                <p className="mt-3 text-white/80 text-sm md:text-base">
                  Atención: <strong>{contacto.horarioAtencion}</strong>
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <Link href="/reservar">
                  <Button className="w-full h-12 bg-white text-brand-blue hover:bg-brand-off font-semibold rounded-lg">
                    <CalIcon className="size-4 mr-2" />
                    Reservar visita
                  </Button>
                </Link>
                <a href={`mailto:${contacto.email}`}>
                  <Button
                    variant="outline"
                    className="w-full h-12 bg-transparent border-[1.5px] border-white/70 text-white hover:bg-white/10 hover:text-white font-semibold rounded-lg"
                  >
                    <Mail className="size-4 mr-2" />
                    Email
                  </Button>
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Horarios */}
      <section id="horarios" className="bg-brand-off">
        <div className="container-pileta py-16 md:py-20">
          <RevealOnScroll>
            <div className="max-w-2xl">
              <span className="eyebrow-pill">
                <Clock className="size-3.5" />
                Horarios
              </span>
              <h2 className="h-display mt-5 text-[clamp(1.8rem,3vw,2.4rem)]">
                Abierto todo el año, todos los días
              </h2>
              <p className="mt-3 text-brand-text-muted">
                Cuatro turnos en fines de semana y festivos. Dos turnos en días
                laborables. Aforo de 20 personas por turno — reserva con tiempo.
              </p>
            </div>
          </RevealOnScroll>

          <Tabs defaultValue="finde" className="mt-8 max-w-3xl">
            <TabsList className="bg-white border border-brand-blue/15 p-1 h-auto">
              <TabsTrigger
                value="finde"
                className="data-[state=active]:bg-brand-blue data-[state=active]:text-white text-brand-text-muted font-semibold rounded-md px-4 py-2"
              >
                Fines de semana y festivos
              </TabsTrigger>
              <TabsTrigger
                value="laboral"
                className="data-[state=active]:bg-brand-blue data-[state=active]:text-white text-brand-text-muted font-semibold rounded-md px-4 py-2"
              >
                Días laborables
              </TabsTrigger>
            </TabsList>

            <TabsContent
              value="finde"
              forceMount
              className="mt-5 data-[state=inactive]:hidden"
            >
              <div className="rounded-2xl bg-white border border-brand-blue/15 shadow-brand-sm overflow-hidden">
                {horarios.findeSemanaFestivo.map((t, i, arr) => (
                  <div
                    key={t.id}
                    className={`flex items-center justify-between gap-4 p-5 ${
                      i < arr.length - 1
                        ? "border-b border-brand-blue/10"
                        : ""
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-display text-2xl text-brand-blue tabular-nums w-20">
                        {t.inicio}
                      </span>
                      <div>
                        <p className="font-semibold text-brand-text">
                          {t.turno}
                        </p>
                        <p className="text-xs text-brand-text-muted">
                          Duración 1h 20min · Termina a las {t.fin}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-medium text-brand-text-muted hidden sm:inline">
                      {t.aforo} plazas
                    </span>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent
              value="laboral"
              forceMount
              className="mt-5 data-[state=inactive]:hidden"
            >
              <div className="rounded-2xl bg-white border border-brand-blue/15 shadow-brand-sm overflow-hidden">
                {horarios.laboral.map((t, i, arr) => (
                  <div
                    key={t.id}
                    className={`flex items-center justify-between gap-4 p-5 ${
                      i < arr.length - 1
                        ? "border-b border-brand-blue/10"
                        : ""
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-display text-2xl text-brand-blue tabular-nums w-20">
                        {t.inicio}
                      </span>
                      <div>
                        <p className="font-semibold text-brand-text">
                          {t.turno}
                        </p>
                        <p className="text-xs text-brand-text-muted">
                          Duración 1h 20min · Termina a las {t.fin}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-medium text-brand-text-muted hidden sm:inline">
                      {t.aforo} plazas
                    </span>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Tarifas */}
      <section className="bg-brand-white">
        <div className="container-pileta py-16 md:py-20">
          <RevealOnScroll>
            <div className="max-w-2xl">
              <span className="eyebrow-pill">Tarifas</span>
              <h2 className="h-display mt-5 text-[clamp(1.8rem,3vw,2.4rem)]">
                Precios oficiales
              </h2>
              <p className="mt-3 text-brand-text-muted">
                IVA incluido. Pago al confirmar la reserva online o en
                efectivo/tarjeta en la entrada.
              </p>
            </div>
          </RevealOnScroll>

          <div className="mt-8 max-w-3xl">
            <div className="rounded-2xl bg-white border border-brand-blue/15 shadow-brand-sm overflow-hidden">
              {tarifas.map((t, i, arr) => (
                <div
                  key={t.id}
                  className={`flex items-center justify-between gap-4 p-5 ${
                    i < arr.length - 1
                      ? "border-b border-brand-blue/10"
                      : ""
                  } ${t.destacado ? "bg-brand-blue-light/40" : ""}`}
                >
                  <div className="flex-1">
                    <p className="font-semibold text-brand-text">
                      {t.label}
                    </p>
                    {t.sublabel && (
                      <p className="text-xs text-brand-text-muted mt-0.5">
                        {t.sublabel}
                      </p>
                    )}
                  </div>
                  <p className="font-display text-2xl text-brand-text whitespace-nowrap">
                    {t.gratis ? (
                      <span className="text-brand-green text-sm font-semibold uppercase tracking-wider">
                        Gratis
                      </span>
                    ) : t.requiereContacto ? (
                      <Link
                        href="/contacto"
                        className="text-brand-blue text-base font-semibold hover:underline"
                      >
                        Consultar
                      </Link>
                    ) : (
                      <>
                        {t.precio}
                        <span className="text-sm font-sans font-medium text-brand-text-muted">
                          €
                        </span>
                      </>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recomendaciones */}
      <section className="bg-brand-off">
        <div className="container-pileta py-16 md:py-20">
          <RevealOnScroll>
            <div className="max-w-2xl">
              <span className="eyebrow-pill">
                <AlertTriangle className="size-3.5" />
                Recomendaciones
              </span>
              <h2 className="h-display mt-5 text-[clamp(1.8rem,3vw,2.4rem)]">
                Antes de venir
              </h2>
              <p className="mt-3 text-brand-text-muted">
                Pequeños detalles que marcan la diferencia entre una visita
                cómoda y una difícil.
              </p>
            </div>
          </RevealOnScroll>

          <div className="mt-8 grid sm:grid-cols-2 gap-3">
            {recomendaciones.map((r, i) => (
              <RevealOnScroll key={i} delay={0.03 * i}>
                <div className="rounded-xl bg-white border border-brand-blue/15 p-4 flex items-start gap-3">
                  <span className="size-7 rounded-full bg-brand-blue-light text-brand-blue text-xs font-bold flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <p className="text-sm text-brand-text leading-relaxed">{r}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo llegar */}
      <section id="llegar" className="bg-brand-white">
        <div className="container-pileta py-16 md:py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <RevealOnScroll>
              <span className="eyebrow-pill">
                <Car className="size-3.5" />
                Cómo llegar
              </span>
              <h2 className="h-display mt-5 text-[clamp(1.8rem,3vw,2.4rem)]">
                A 19 km de <em>Ronda</em>, en plena Serranía
              </h2>
              <p className="mt-4 text-brand-text-muted leading-relaxed">
                La cueva está en la Carretera de Cortes de la Frontera (MA-8401),
                cerca del pueblo de Benaoján. Desde Ronda son unos 23 minutos en
                coche; desde Málaga capital, cerca de dos horas.
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="size-5 mt-0.5 shrink-0 text-brand-blue" />
                  <div>
                    <p className="font-semibold text-brand-text text-sm">
                      Dirección
                    </p>
                    <p className="text-sm text-brand-text-muted">
                      {contacto.direccion}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Car className="size-5 mt-0.5 shrink-0 text-brand-blue" />
                  <div>
                    <p className="font-semibold text-brand-text text-sm">
                      Parking
                    </p>
                    <p className="text-sm text-brand-text-muted">
                      Gratuito al inicio del sendero. Desde el parking son ~5
                      minutos subiendo 105 escalones hasta la puerta de la
                      cueva — la cita es arriba, no en el parking.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="size-5 mt-0.5 shrink-0 text-brand-blue" />
                  <div>
                    <p className="font-semibold text-brand-text text-sm">
                      Teléfono
                    </p>
                    <a
                      href={`tel:${contacto.telefonoTel}`}
                      className="text-sm text-brand-blue hover:underline"
                    >
                      {contacto.telefono}
                    </a>
                  </div>
                </div>
              </div>

              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="mt-7 bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold rounded-lg">
                  Abrir en Google Maps
                </Button>
              </a>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <div className="rounded-2xl overflow-hidden border border-brand-blue/15 shadow-brand-md aspect-[4/3]">
                <iframe
                  src={contacto.googleMapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa de la Cueva de la Pileta"
                />
              </div>
              <div className="mt-4 relative rounded-2xl overflow-hidden aspect-[16/9] shadow-brand-sm">
                <Image
                  src={imagenes.llegada}
                  alt="Acceso a pie a la Cueva de la Pileta — sendero de montaña"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-brand-off">
        <div className="container-pileta py-16 md:py-20">
          <RevealOnScroll>
            <div className="max-w-2xl">
              <span className="eyebrow-pill">FAQ</span>
              <h2 className="h-display mt-5 text-[clamp(1.8rem,3vw,2.4rem)]">
                Preguntas frecuentes
              </h2>
            </div>
          </RevealOnScroll>

          <div className="mt-8 max-w-3xl">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`q${i}`}
                  className="rounded-xl bg-white border border-brand-blue/15 px-5 data-[state=open]:shadow-brand-sm overflow-hidden"
                >
                  <AccordionTrigger className="text-left font-semibold text-brand-text hover:no-underline py-4">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-brand-text-muted leading-relaxed pb-4">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-brand-blue text-white">
        <div className="container-pileta py-16 md:py-20 text-center">
          <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.8rem)] max-w-2xl mx-auto leading-tight">
            ¿Lista la visita? Reserva en 2 minutos
          </h2>
          <p className="mt-4 text-white/85">
            Plazas limitadas a 20 personas por turno. Sin gastos de gestión.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/reservar">
              <Button className="h-12 px-7 bg-white text-brand-blue hover:bg-brand-off font-semibold rounded-lg text-base">
                Reservar entrada
              </Button>
            </Link>
            <a href={`tel:${contacto.telefonoTel}`}>
              <Button
                variant="outline"
                className="h-12 px-7 bg-transparent border-[1.5px] border-white/70 text-white hover:bg-white/10 hover:text-white font-semibold rounded-lg text-base"
              >
                <Phone className="size-4 mr-2" />
                Llamar
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
