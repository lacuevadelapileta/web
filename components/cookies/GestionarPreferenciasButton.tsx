"use client"

import { reopenCookieBanner } from "@/lib/cookies"
import { Button } from "@/components/ui/button"

export function GestionarPreferenciasButton() {
  return (
    <Button
      onClick={reopenCookieBanner}
      className="mt-2 h-11 px-6 bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold rounded-lg"
    >
      Gestionar preferencias de cookies
    </Button>
  )
}
