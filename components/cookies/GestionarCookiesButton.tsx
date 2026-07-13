"use client"

import { reopenCookieBanner } from "@/lib/cookies"

export function GestionarCookiesButton() {
  return (
    <button
      type="button"
      onClick={reopenCookieBanner}
      className="hover:text-white transition-colors"
    >
      Gestionar cookies
    </button>
  )
}
