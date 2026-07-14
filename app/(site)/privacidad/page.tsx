import type { Metadata } from "next"
import { contacto, empresa } from "@/content/cueva"

export const metadata: Metadata = {
  title: "Política de Privacidad — Cueva de la Pileta",
  robots: { index: false, follow: true },
  alternates: { canonical: "/privacidad" },
}

export default function PrivacidadPage() {
  return (
    <div className="bg-brand-white">
      <div className="container-pileta py-14 md:py-20 max-w-3xl">
        <h1 className="font-display text-3xl md:text-4xl text-brand-text">
          Política de Privacidad
        </h1>
        <p className="mt-2 text-sm text-brand-text-muted">
          Última actualización: 13 de julio de 2026
        </p>

        <div className="mt-8 space-y-8 text-brand-text-muted leading-relaxed [&_h2]:font-display [&_h2]:text-xl [&_h2]:text-brand-text [&_h2]:mb-2 [&_p]:mb-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-3 [&_li]:mb-1">
          <section>
            <h2>1. Responsable del tratamiento</h2>
            <p>
              <strong>{empresa.razonSocial}</strong> ({empresa.nombreComercial}),
              con NIF {empresa.nif} y domicilio en {empresa.domicilioFiscal},
              es la responsable del tratamiento de los datos personales que
              nos facilitas a través de este sitio web.
              <br />
              Contacto: {contacto.email}
            </p>
          </section>

          <section>
            <h2>2. Qué datos tratamos y con qué finalidad</h2>
            <p>
              <strong>Formulario de contacto:</strong> si nos escribes desde
              la página de contacto, tratamos el nombre, email y mensaje que
              nos facilitas, con la única finalidad de responder a tu
              consulta.
            </p>
            <p>
              <strong>Reservas:</strong> las reservas de visita se gestionan
              exclusivamente por teléfono. No se recogen ni almacenan datos
              personales de reserva a través del sitio web.
            </p>
          </section>

          <section>
            <h2>3. Base legal</h2>
            <p>
              La base legal para el tratamiento de tus datos es tu
              consentimiento expreso, otorgado al marcar la casilla
              correspondiente y enviar el formulario de contacto.
            </p>
          </section>

          <section>
            <h2>4. Plazo de conservación</h2>
            <p>
              Los datos se conservarán mientras sea necesario para atender tu
              consulta y, como máximo, durante 1 año desde el último
              contacto, salvo que la ley exija un plazo distinto.
            </p>
          </section>

          <section>
            <h2>5. Destinatarios y transferencias internacionales</h2>
            <p>
              No cedemos tus datos a terceros con fines comerciales o
              publicitarios. Utilizamos los siguientes proveedores como
              encargados del tratamiento, necesarios para el funcionamiento
              técnico del sitio:
            </p>
            <ul>
              <li>
                <strong>Vercel Inc.</strong> (alojamiento web) — con sede en
                EE.UU., transferencia amparada en Cláusulas Contractuales
                Tipo aprobadas por la Comisión Europea.
              </li>
            </ul>
          </section>

          <section>
            <h2>6. Tus derechos</h2>
            <p>
              Puedes ejercer tus derechos de acceso, rectificación,
              supresión, oposición, limitación del tratamiento y portabilidad
              escribiendo a {contacto.email}, adjuntando copia de un
              documento que acredite tu identidad.
            </p>
            <p>
              Si consideras que tus datos no se tratan correctamente, puedes
              presentar una reclamación ante la Agencia Española de
              Protección de Datos (
              <a
                href="https://www.aepd.es"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-blue hover:underline"
              >
                www.aepd.es
              </a>
              ).
            </p>
          </section>

          <section>
            <h2>7. Menores de edad</h2>
            <p>
              Este sitio web no está dirigido a menores de 14 años. No
              recogemos conscientemente datos personales de menores sin el
              consentimiento de sus padres o tutores.
            </p>
          </section>

          <section>
            <h2>8. Cambios en esta política</h2>
            <p>
              Podemos actualizar esta política de privacidad para adaptarla a
              cambios legislativos o del propio sitio web. La fecha de última
              actualización figura al inicio de esta página.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
