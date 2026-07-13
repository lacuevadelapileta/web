// Imágenes reales descargadas de Wikimedia Commons (Cueva de la Pileta + entorno).
// Servidas localmente desde /public/img/ para evitar dependencias externas.
// En producción el cliente reemplazará por sus fotos del Instagram @cuevadelapileta.

export const imagenes = {
  // ── HERO ───────────────────────────────────────────────────────────────
  hero: "/img/pileta-interior.jpg",
  heroFondo: "/img/pileta-interior.jpg",

  // ── ABOUT / HISTORIA ───────────────────────────────────────────────────
  about: "/img/pileta-arriba.jpg",

  // ── LA CUEVA (página interior) ─────────────────────────────────────────
  sierraAerea: "/img/sierra-libar-1.jpg",
  pinturas: "/img/pileta-lampara.jpg",
  exterior: "/img/pileta-entrada.jpg",

  // ── GALERÍA — 14 tiles distintos ───────────────────────────────────────
  galeria: [
    { src: "/img/pileta-interior.jpg", label: "Interior con estalactitas", aspect: "aspect-[4/5]" },
    { src: "/img/pileta-entrada.jpg", label: "Entrada principal", aspect: "aspect-[3/4]" },
    { src: "/img/pileta-lampara.jpg", label: "Lámpara sobre estalagmita", aspect: "aspect-square" },
    { src: "/img/sierra-libar-1.jpg", label: "Sierra de Líbar", aspect: "aspect-[4/3]" },
    { src: "/img/pileta-stairs.jpg", label: "Escalones de acceso", aspect: "aspect-[3/4]" },
    { src: "/img/ronda-puente.jpg", label: "Ronda · Puente Nuevo", aspect: "aspect-[4/5]" },
    { src: "/img/pileta-cueva-1.jpg", label: "Cámara interior", aspect: "aspect-[4/3]" },
    { src: "/img/benaojan-1.jpg", label: "Benaoján", aspect: "aspect-square" },
    { src: "/img/llanos-libar.jpg", label: "Llanos de Líbar", aspect: "aspect-[4/3]" },
    { src: "/img/pileta-grazalema.jpg", label: "Entorno Grazalema", aspect: "aspect-[3/4]" },
    { src: "/img/sierra-libar-2.jpg", label: "Macizo serrano", aspect: "aspect-[4/5]" },
    { src: "/img/pileta-arriba.jpg", label: "Cueva desde arriba", aspect: "aspect-[3/4]" },
    { src: "/img/ronda-tajo.jpg", label: "Tajo de Ronda", aspect: "aspect-square" },
    { src: "/img/benaojan-2.jpg", label: "Pueblo blanco", aspect: "aspect-[4/3]" },
  ] as { src: string; label: string; aspect: string }[],

  // ── VISITA ─────────────────────────────────────────────────────────────
  visitaHero: "/img/pileta-escalones.jpg",
  llegada: "/img/sierra-libar-3.jpg",
  comoLlegar: "/img/benaojan-3.jpg",

  // ── ARTE RUPESTRE ──────────────────────────────────────────────────────
  rupestre1: "/img/pileta-lampara.jpg",
  rupestre2: "/img/pileta-cueva-1.jpg",

  // ── GUÍA / FAMILIA ─────────────────────────────────────────────────────
  guia: "/img/pileta-entrada.jpg",

  // ── OG / SEO ───────────────────────────────────────────────────────────
  og: "/img/pileta-interior.jpg",
} as const
