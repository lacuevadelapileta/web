import type { Metadata } from "next"
import { contacto, empresa, SITE } from "@/content/cueva"

export const metadata: Metadata = {
  title: "Aviso Legal — Cueva de la Pileta",
  robots: { index: false, follow: true },
}

export default function AvisoLegalPage() {
  return (
    <div className="bg-brand-white">
      <div className="container-pileta py-14 md:py-20 max-w-3xl">
        <h1 className="font-display text-3xl md:text-4xl text-brand-text">
          Aviso Legal
        </h1>
        <p className="mt-2 text-sm text-brand-text-muted">
          Última actualización: {new Date().toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <div className="mt-8 space-y-8 text-brand-text-muted leading-relaxed [&_h2]:font-display [&_h2]:text-xl [&_h2]:text-brand-text [&_h2]:mb-2 [&_p]:mb-3">
          <section>
            <h2>1. Datos identificativos</h2>
            <p>
              En cumplimiento del artículo 10 de la Ley 34/2002, de Servicios
              de la Sociedad de la Información y de Comercio Electrónico
              (LSSI-CE), se informa de los siguientes datos:
            </p>
            <p>
              <strong>Titular:</strong> {empresa.razonSocial}
              <br />
              <strong>Nombre comercial:</strong> {empresa.nombreComercial}
              <br />
              <strong>NIF:</strong> {empresa.nif}
              <br />
              <strong>Domicilio:</strong> {empresa.domicilioFiscal}
              <br />
              <strong>Correo electrónico:</strong> {contacto.email}
              <br />
              <strong>Teléfono:</strong> {contacto.telefono}
              <br />
              <strong>Sitio web:</strong> {SITE.baseUrl}
            </p>
          </section>

          <section>
            <h2>2. Objeto</h2>
            <p>
              El presente sitio web tiene como finalidad informar sobre la
              Cueva de la Pileta, sus condiciones de visita, tarifas y
              horarios, y facilitar el contacto para la reserva de visitas
              guiadas, que se gestiona exclusivamente por teléfono.
            </p>
          </section>

          <section>
            <h2>3. Condiciones de uso</h2>
            <p>
              El acceso y uso de este sitio web atribuye la condición de
              usuario y supone la aceptación de las condiciones aquí
              recogidas. El usuario se compromete a hacer un uso adecuado de
              los contenidos y servicios del sitio web y a no emplearlos para
              incurrir en actividades ilícitas, ilegales o contrarias a la
              buena fe y al orden público.
            </p>
          </section>

          <section>
            <h2>4. Propiedad intelectual e industrial</h2>
            <p>
              Todos los contenidos del sitio web (textos, fotografías,
              gráficos, imágenes, diseño y código fuente), salvo cuando se
              indique lo contrario, son titularidad de {empresa.razonSocial}{" "}
              o se utilizan con la debida autorización, y están protegidos
              por la normativa de propiedad intelectual e industrial. Queda
              prohibida su reproducción, distribución o comunicación pública
              total o parcial sin autorización expresa del titular.
            </p>
          </section>

          <section>
            <h2>5. Exclusión de responsabilidad</h2>
            <p>
              {empresa.nombreComercial} no garantiza la disponibilidad y
              continuidad permanente del sitio web, ni se hace responsable de
              los daños que pudieran derivarse de la falta de disponibilidad
              o de errores de acceso. El sitio puede contener enlaces a
              páginas de terceros sobre las que no se ejerce ningún tipo de
              control, sin asumir responsabilidad por sus contenidos.
            </p>
          </section>

          <section>
            <h2>6. Legislación aplicable y jurisdicción</h2>
            <p>
              Las presentes condiciones se rigen por la legislación española.
              Para la resolución de cualquier controversia derivada del
              acceso o uso de este sitio web, las partes se someten a los
              Juzgados y Tribunales de Málaga, salvo que la normativa de
              protección de consumidores y usuarios establezca otro fuero.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
