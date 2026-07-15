"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Cookie } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  COOKIE_REOPEN_EVENT,
  getCookieConsent,
  setCookieConsent,
} from "@/lib/cookies"

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(getCookieConsent() === null)
    const onReopen = () => setVisible(true)
    window.addEventListener(COOKIE_REOPEN_EVENT, onReopen)
    return () => window.removeEventListener(COOKIE_REOPEN_EVENT, onReopen)
  }, [])

  if (!visible) return null

  const responder = (value: "accepted" | "rejected") => {
    setCookieConsent(value)
    setVisible(false)
  }

  return (
    <div
      role="dialog"
      aria-label="Preferencias de cookies"
      className="fixed inset-x-0 bottom-0 z-[70] p-3 sm:p-4"
    >
      <div className="mx-auto max-w-3xl rounded-2xl bg-white border border-brand-blue/15 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.25)] p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4">
        <Cookie className="hidden sm:block size-8 text-brand-blue shrink-0" />
        <p className="text-sm text-brand-text-muted flex-1">
          Usamos cookies técnicas necesarias para el funcionamiento de la
          web y una analítica sin cookies (Vercel Analytics) para saber
          cuánta gente visita el sitio. No usamos cookies de publicidad.
          Puedes consultar más en nuestra{" "}
          <Link href="/cookies" className="text-brand-blue hover:underline font-medium">
            política de cookies
          </Link>
          .
        </p>
        <div className="flex gap-2 shrink-0">
          <Button
            variant="outline"
            onClick={() => responder("rejected")}
            className="h-10 border-[1.5px] border-brand-blue/30 text-brand-text-muted hover:bg-brand-blue-light hover:text-brand-blue"
          >
            Rechazar no esenciales
          </Button>
          <Button
            onClick={() => responder("accepted")}
            className="h-10 bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold"
          >
            Aceptar todo
          </Button>
        </div>
      </div>
    </div>
  )
}
