"use client"

import { usePathname } from "next/navigation"

/**
 * Reserva la altura del navbar fijo en rutas que no son la home.
 * En home el hero tiene su propio padding superior y deja ver la imagen
 * por debajo del navbar transparente.
 */
export function NavSpacer() {
  const pathname = usePathname()
  if (pathname === "/") return null
  return <div aria-hidden className="h-16 md:h-[72px]" />
}
