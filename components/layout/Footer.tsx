import Link from "next/link"
import { Instagram, Phone, Mail, MapPin, MessageCircle } from "lucide-react"
import { contacto, SITE } from "@/content/cueva"
import { waLink } from "@/lib/whatsapp"

export function Footer() {
  return (
    <footer className="bg-[#1A2332] text-white relative">
      {/* Franja superior azul */}
      <div className="h-1 bg-brand-blue" />

      <div className="container-pileta pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-10 md:gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-baseline gap-1.5">
              <span className="text-xs font-semibold tracking-[0.18em] uppercase text-white">
                Cueva de la
              </span>
              <span className="font-display text-2xl italic text-brand-blue">
                Pileta
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/65 max-w-sm">
              {SITE.descripcionCorta}
            </p>
            <a
              href={contacto.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm text-white/75 hover:text-white transition-colors"
              aria-label="Instagram de Cueva de la Pileta"
            >
              <Instagram className="size-4" />
              @cuevadelapileta
            </a>
          </div>

          {/* Visitar */}
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-white/55">
              Visitar
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link
                  href="/reservar"
                  className="text-white/75 hover:text-white transition-colors"
                >
                  Reservar entrada
                </Link>
              </li>
              <li>
                <Link
                  href="/visita"
                  className="text-white/75 hover:text-white transition-colors"
                >
                  Horarios y tarifas
                </Link>
              </li>
              <li>
                <Link
                  href="/visita#llegar"
                  className="text-white/75 hover:text-white transition-colors"
                >
                  Cómo llegar
                </Link>
              </li>
              <li>
                <Link
                  href="/galeria"
                  className="text-white/75 hover:text-white transition-colors"
                >
                  Galería
                </Link>
              </li>
            </ul>
          </div>

          {/* Descubre */}
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-white/55">
              Descubre
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link
                  href="/la-cueva"
                  className="text-white/75 hover:text-white transition-colors"
                >
                  Historia
                </Link>
              </li>
              <li>
                <Link
                  href="/la-cueva#salas"
                  className="text-white/75 hover:text-white transition-colors"
                >
                  Las 9 salas
                </Link>
              </li>
              <li>
                <Link
                  href="/la-cueva#pinturas"
                  className="text-white/75 hover:text-white transition-colors"
                >
                  Las pinturas
                </Link>
              </li>
              <li>
                <Link
                  href="/visita#faq"
                  className="text-white/75 hover:text-white transition-colors"
                >
                  Preguntas frecuentes
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-white/55">
              Contacto
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2 text-white/75">
                <Phone className="size-4 mt-0.5 shrink-0 text-brand-blue" />
                <a href={`tel:${contacto.telefonoTel}`} className="hover:text-white">
                  {contacto.telefono}
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/75">
                <MessageCircle className="size-4 mt-0.5 shrink-0 text-brand-blue" />
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Reservar por WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/75">
                <Mail className="size-4 mt-0.5 shrink-0 text-brand-blue" />
                <a
                  href="mailto:info@cuevadelapileta.es"
                  className="hover:text-white break-all"
                >
                  info@cuevadelapileta.es
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/75">
                <MapPin className="size-4 mt-0.5 shrink-0 text-brand-blue" />
                <span>{contacto.direccion}</span>
              </li>
            </ul>
            <p className="mt-4 text-xs text-white/45">
              Atención: {contacto.horarioAtencion}
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-white/55">
            © {new Date().getFullYear()} Cueva de la Pileta · Custodiada por la
            familia Bullón desde 1905
          </p>
          <div className="flex items-center gap-5 text-xs text-white/55">
            <Link href="/aviso-legal" className="hover:text-white transition-colors">
              Aviso legal
            </Link>
            <Link href="/privacidad" className="hover:text-white transition-colors">
              Privacidad
            </Link>
            <Link href="/cookies" className="hover:text-white transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
