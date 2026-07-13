"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Menu } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { OpenBadge } from "@/components/ui/OpenBadge"
import { cn } from "@/lib/utils"

const links = [
  { href: "/la-cueva", label: "La Cueva" },
  { href: "/visita", label: "Visitar" },
  { href: "/galeria", label: "Galería" },
  { href: "/visita#horarios", label: "Horarios" },
]

export function Navbar() {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Modo transparente: home + sin scroll. En el resto, siempre blur+blanco.
  const transparent = isHome && !scrolled

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500",
        transparent
          ? "bg-transparent border-b border-transparent"
          : "bg-white/85 backdrop-blur-xl shadow-[0_2px_20px_rgba(26,95,150,0.08)] border-b border-brand-blue/10"
      )}
    >
      <nav className="container-pileta flex h-16 md:h-[72px] items-center justify-between">
        {/* Logo + OpenBadge */}
        <div className="flex items-center gap-3 md:gap-4">
          <Link
            href="/"
            className="flex items-center gap-2.5"
            aria-label="Cueva de la Pileta — Inicio"
          >
            <Image
              src={
                transparent
                  ? "/img/logo/yegua-logo-white.png"
                  : "/img/logo/yegua-logo.png"
              }
              alt=""
              width={48}
              height={48}
              className="size-10 md:size-12 w-auto object-contain transition-opacity duration-500"
            />
            <span className="flex items-baseline gap-1.5 leading-none">
            <span
              className={cn(
                "text-xs md:text-sm font-semibold tracking-[0.18em] uppercase transition-colors duration-500",
                transparent ? "text-white drop-shadow-md" : "text-brand-text"
              )}
            >
              Cueva de la
            </span>
            <span
              className={cn(
                "font-display text-2xl md:text-3xl italic transition-colors duration-500",
                transparent
                  ? "text-brand-sun drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]"
                  : "text-brand-blue"
              )}
            >
              Pileta
            </span>
            </span>
          </Link>
          <OpenBadge className="hidden sm:inline-flex" />
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "text-sm font-medium transition-colors duration-300",
                transparent
                  ? "text-white/90 hover:text-white drop-shadow"
                  : "text-brand-text-muted hover:text-brand-blue"
              )}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA desktop */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/reservar">
            <Button
              className={cn(
                "h-10 font-semibold rounded-lg px-5 transition-all duration-300",
                transparent
                  ? "bg-white text-brand-blue hover:bg-brand-off hover:text-brand-blue-dark shadow-[0_4px_16px_rgba(0,0,0,0.25)]"
                  : "bg-brand-blue text-white hover:bg-brand-blue-dark shadow-brand-sm"
              )}
            >
              Reservar Entrada
            </Button>
          </Link>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden flex items-center gap-2">
          <Link href="/reservar">
            <Button
              size="sm"
              className={cn(
                "h-9 font-semibold rounded-lg transition-all duration-300",
                transparent
                  ? "bg-white text-brand-blue hover:bg-brand-off"
                  : "bg-brand-blue text-white hover:bg-brand-blue-dark"
              )}
            >
              Reservar
            </Button>
          </Link>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Abrir menú"
                className={cn(
                  "inline-flex h-10 w-10 items-center justify-center rounded-lg border transition-all duration-300",
                  transparent
                    ? "border-white/40 bg-white/10 backdrop-blur text-white"
                    : "border-brand-blue/15 text-brand-text"
                )}
              >
                <Menu className="size-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px] sm:w-[380px]">
              <SheetHeader>
                <SheetTitle className="text-left">
                  <span className="flex items-center gap-2">
                    <Image
                      src="/img/logo/yegua-logo.png"
                      alt=""
                      width={40}
                      height={40}
                      className="size-9 w-auto object-contain"
                    />
                    <span className="flex items-baseline gap-1.5">
                      <span className="text-xs font-semibold tracking-[0.18em] uppercase text-brand-text">
                        Cueva de la
                      </span>
                      <span className="font-display text-2xl italic text-brand-blue">
                        Pileta
                      </span>
                    </span>
                  </span>
                </SheetTitle>
              </SheetHeader>
              <div className="mt-6">
                <OpenBadge />
              </div>
              <div className="mt-6 flex flex-col gap-1">
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-3 text-base font-medium text-brand-text hover:bg-brand-blue-light hover:text-brand-blue transition-colors"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/reservar" onClick={() => setOpen(false)}>
                  <Button className="w-full h-11 bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold rounded-lg">
                    Reservar Entrada
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
