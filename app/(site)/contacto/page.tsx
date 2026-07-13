"use client"

import { useState } from "react"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  MessageCircle,
  Send,
  CheckCircle2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { RevealOnScroll } from "@/components/ui/RevealOnScroll"
import { contacto } from "@/content/cueva"

export default function ContactoPage() {
  const [enviado, setEnviado] = useState(false)
  const [enviando, setEnviando] = useState(false)
  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [mensaje, setMensaje] = useState("")
  const [acepta, setAcepta] = useState(false)

  const valido =
    nombre.trim().length >= 2 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
    mensaje.trim().length >= 10 &&
    acepta

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!valido) return
    setEnviando(true)
    await new Promise((r) => setTimeout(r, 900))
    setEnviando(false)
    setEnviado(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-white">
        <div className="container-pileta pt-12 md:pt-16 pb-8">
          <RevealOnScroll>
            <span className="eyebrow-pill">
              <MessageCircle className="size-3.5" />
              Contacto
            </span>
            <h1 className="h-display mt-5 text-[clamp(2.2rem,4.5vw,3.6rem)] max-w-2xl">
              Estamos a una <em>llamada</em> de distancia
            </h1>
            <p className="mt-3 text-brand-text-muted max-w-prose">
              Para reservas en grupo, dudas sobre la visita, o cualquier otra
              consulta. Te respondemos en el día.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Info + Form */}
      <section className="bg-brand-off">
        <div className="container-pileta py-12 md:py-16">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8 items-start">
            {/* Info cards */}
            <RevealOnScroll>
              <div className="space-y-4">
                <a
                  href={`tel:${contacto.telefonoTel}`}
                  className="block rounded-2xl bg-brand-blue text-white p-6 hover:bg-brand-blue-dark transition-colors shadow-brand-md"
                >
                  <Phone className="size-5" />
                  <p className="mt-3 text-xs uppercase tracking-widest text-white/75">
                    Teléfono (reservas)
                  </p>
                  <p className="mt-1 font-display text-2xl">
                    {contacto.telefono}
                  </p>
                  <p className="mt-2 text-xs text-white/75 inline-flex items-center gap-1.5">
                    <Clock className="size-3.5" />
                    {contacto.horarioAtencion}
                  </p>
                </a>

                <div className="rounded-2xl bg-white border border-brand-blue/15 shadow-brand-sm p-6">
                  <Mail className="size-5 text-brand-blue" />
                  <p className="mt-3 text-xs uppercase tracking-widest text-brand-text-muted">
                    Email
                  </p>
                  <a
                    href="mailto:info@cuevadelapileta.es"
                    className="mt-1 block font-semibold text-brand-text break-all hover:text-brand-blue transition-colors"
                  >
                    info@cuevadelapileta.es
                  </a>
                  <p className="mt-2 text-xs text-brand-text-muted">
                    Respuesta en 24-48h laborables
                  </p>
                </div>

                <div className="rounded-2xl bg-white border border-brand-blue/15 shadow-brand-sm p-6">
                  <MapPin className="size-5 text-brand-blue" />
                  <p className="mt-3 text-xs uppercase tracking-widest text-brand-text-muted">
                    Dirección
                  </p>
                  <p className="mt-1 font-semibold text-brand-text">
                    {contacto.direccion}
                  </p>
                  <p className="mt-2 text-xs text-brand-text-muted">
                    {contacto.distanciaRonda}
                  </p>
                </div>

                <a
                  href={contacto.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-2xl bg-white border border-brand-blue/15 shadow-brand-sm p-6 hover:border-brand-blue/30 transition-colors"
                >
                  <Instagram className="size-5 text-brand-blue" />
                  <p className="mt-3 text-xs uppercase tracking-widest text-brand-text-muted">
                    Instagram
                  </p>
                  <p className="mt-1 font-semibold text-brand-text">
                    @cuevadelapileta
                  </p>
                </a>
              </div>
            </RevealOnScroll>

            {/* Form */}
            <RevealOnScroll delay={0.1}>
              <div className="rounded-2xl bg-white border border-brand-blue/15 shadow-brand-md p-7 md:p-9">
                {enviado ? (
                  <div className="text-center py-8">
                    <CheckCircle2 className="mx-auto size-14 text-brand-green" />
                    <h2 className="mt-5 font-display text-2xl text-brand-text">
                      Mensaje enviado
                    </h2>
                    <p className="mt-3 text-brand-text-muted">
                      Te responderemos en las próximas 24-48h al email{" "}
                      <strong className="text-brand-text">{email}</strong>.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={submit} className="space-y-5">
                    <div>
                      <h2 className="font-display text-2xl text-brand-text">
                        Escríbenos
                      </h2>
                      <p className="mt-1 text-sm text-brand-text-muted">
                        Para reservas urgentes, usa el teléfono.
                      </p>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold tracking-widest uppercase text-brand-text-muted mb-1.5">
                        Nombre
                      </label>
                      <Input
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        className="h-11 border-[1.5px] border-brand-blue/20 focus-visible:border-brand-blue focus-visible:ring-4 focus-visible:ring-brand-blue-light rounded-lg"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold tracking-widest uppercase text-brand-text-muted mb-1.5">
                        Email
                      </label>
                      <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="h-11 border-[1.5px] border-brand-blue/20 focus-visible:border-brand-blue focus-visible:ring-4 focus-visible:ring-brand-blue-light rounded-lg"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold tracking-widest uppercase text-brand-text-muted mb-1.5">
                        Mensaje
                      </label>
                      <textarea
                        value={mensaje}
                        onChange={(e) => setMensaje(e.target.value)}
                        rows={5}
                        className="w-full rounded-lg border-[1.5px] border-brand-blue/20 bg-white px-3 py-2.5 text-sm text-brand-text focus:outline-none focus:border-brand-blue focus:ring-4 focus:ring-brand-blue-light transition resize-y"
                      />
                    </div>

                    <label className="flex items-start gap-3 cursor-pointer">
                      <Checkbox
                        checked={acepta}
                        onCheckedChange={(v) => setAcepta(v === true)}
                        className="mt-0.5 border-brand-blue/30 data-[state=checked]:bg-brand-blue data-[state=checked]:border-brand-blue"
                      />
                      <span className="text-xs text-brand-text-muted leading-relaxed">
                        Acepto la política de privacidad y el tratamiento de mis
                        datos para responderme a esta consulta.
                      </span>
                    </label>

                    <Button
                      type="submit"
                      disabled={!valido || enviando}
                      className="w-full h-12 bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold rounded-lg disabled:opacity-50"
                    >
                      {enviando ? (
                        "Enviando…"
                      ) : (
                        <>
                          <Send className="size-4 mr-2" />
                          Enviar mensaje
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Mapa ancho */}
      <section className="bg-brand-white">
        <div className="container-pileta py-12 md:py-16">
          <RevealOnScroll>
            <div className="rounded-2xl overflow-hidden border border-brand-blue/15 shadow-brand-md aspect-[16/8] md:aspect-[16/6]">
              <iframe
                src={contacto.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de la Cueva de la Pileta"
              />
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  )
}
