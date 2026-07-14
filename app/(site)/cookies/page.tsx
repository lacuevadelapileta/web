import type { Metadata } from "next"
import { GestionarPreferenciasButton } from "@/components/cookies/GestionarPreferenciasButton"

export const metadata: Metadata = {
  title: "Política de Cookies — Cueva de la Pileta",
  robots: { index: false, follow: true },
  alternates: { canonical: "/cookies" },
}

export default function CookiesPage() {
  return (
    <div className="bg-brand-white">
      <div className="container-pileta py-14 md:py-20 max-w-3xl">
        <h1 className="font-display text-3xl md:text-4xl text-brand-text">
          Política de Cookies
        </h1>
        <p className="mt-2 text-sm text-brand-text-muted">
          Última actualización: 13 de julio de 2026
        </p>

        <div className="mt-8 space-y-8 text-brand-text-muted leading-relaxed [&_h2]:font-display [&_h2]:text-xl [&_h2]:text-brand-text [&_h2]:mb-2 [&_p]:mb-3">
          <section>
            <h2>1. Qué son las cookies</h2>
            <p>
              Las cookies son pequeños archivos que se almacenan en tu
              navegador cuando visitas un sitio web. Sirven, entre otras
              cosas, para recordar tus preferencias o mantener una sesión.
            </p>
          </section>

          <section>
            <h2>2. Cookies que usamos</h2>
            <p>
              Este sitio web utiliza únicamente cookies técnicas necesarias
              para su funcionamiento:
            </p>
            <table className="w-full text-sm border-collapse mt-3">
              <thead>
                <tr className="text-left border-b border-brand-blue/15">
                  <th className="py-2 pr-4 font-semibold text-brand-text">Cookie</th>
                  <th className="py-2 pr-4 font-semibold text-brand-text">Finalidad</th>
                  <th className="py-2 font-semibold text-brand-text">Duración</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-brand-blue/10">
                  <td className="py-2 pr-4">cookie-consent</td>
                  <td className="py-2 pr-4">
                    Recordar tu elección sobre el aviso de cookies
                  </td>
                  <td className="py-2">1 año</td>
                </tr>
              </tbody>
            </table>
            <p className="mt-3">
              No utilizamos cookies de analítica, publicidad ni de terceros.
              Si esto cambia en el futuro, actualizaremos esta página antes
              de activarlas.
            </p>
          </section>

          <section>
            <h2>3. Gestionar tus preferencias</h2>
            <p>
              Puedes cambiar tu elección sobre las cookies en cualquier
              momento:
            </p>
            <GestionarPreferenciasButton />
          </section>

          <section>
            <h2>4. Cómo deshabilitar cookies desde el navegador</h2>
            <p>
              También puedes eliminar o bloquear las cookies desde la
              configuración de tu navegador: Chrome, Firefox, Safari y Edge
              permiten gestionar y eliminar cookies desde sus ajustes de
              privacidad.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
