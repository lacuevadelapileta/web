// Imágenes reales descargadas de Wikimedia Commons (Cueva de la Pileta + entorno).
// Servidas localmente desde /public/img/ para evitar dependencias externas.
// En producción el cliente reemplazará por sus fotos del Instagram @cuevadelapileta.

export const imagenes = {
  // ── HERO ───────────────────────────────────────────────────────────────
  hero: "/img/pileta-interior.jpg",
  heroFondo: "/img/pileta-interior.jpg",

  // ── ABOUT / HISTORIA ───────────────────────────────────────────────────
  about: "/img/pileta-formacion-columna.webp",

  // ── LA CUEVA (página interior) ─────────────────────────────────────────
  sierraAerea: "/img/sierra-libar-1.jpg",
  pinturas: "/img/pileta-pintura-pez.webp",
  exterior: "/img/pileta-verja-entrada.webp",

  // ── GALERÍA — tiles reales + entorno ────────────────────────────────────
  galeria: [
    { src: "/img/pileta-pintura-pez.webp", label: "Pintura rupestre — El Pez", aspect: "aspect-[16/9]" },
    { src: "/img/pileta-verja-entrada.webp", label: "Entrada real a la cueva", aspect: "aspect-[3/4]" },
    { src: "/img/sierra-libar-1.jpg", label: "Sierra de Líbar", aspect: "aspect-[4/3]" },
    { src: "/img/pileta-formacion-columna.webp", label: "Formaciones calcáreas", aspect: "aspect-square" },
    { src: "/img/pileta-stairs.jpg", label: "Escalones de acceso", aspect: "aspect-[3/4]" },
    { src: "/img/pileta-murcielagos.webp", label: "Galería de los Murciélagos", aspect: "aspect-[4/3]" },
    { src: "/img/ronda-puente.jpg", label: "Ronda · Puente Nuevo", aspect: "aspect-[4/5]" },
    { src: "/img/pileta-pintura-cabra.webp", label: "Pintura rupestre — grabado animal", aspect: "aspect-[4/3]" },
    { src: "/img/benaojan-1.jpg", label: "Benaoján", aspect: "aspect-square" },
    { src: "/img/pileta-tunel-acceso.webp", label: "Paso interior de la cueva", aspect: "aspect-[3/4]" },
    { src: "/img/llanos-libar.jpg", label: "Llanos de Líbar", aspect: "aspect-[4/3]" },
    { src: "/img/pileta-pintura-bicroma.webp", label: "Pintura rupestre bícroma", aspect: "aspect-[4/3]" },
    { src: "/img/pileta-grazalema.jpg", label: "Entorno Grazalema", aspect: "aspect-[3/4]" },
    { src: "/img/pileta-formacion-cuenco.webp", label: "Formación natural con agua", aspect: "aspect-[3/4]" },
    { src: "/img/sierra-libar-2.jpg", label: "Macizo serrano", aspect: "aspect-[4/5]" },
    { src: "/img/ronda-tajo.jpg", label: "Tajo de Ronda", aspect: "aspect-square" },
    { src: "/img/benaojan-2.jpg", label: "Pueblo blanco", aspect: "aspect-[4/3]" },
  ] as { src: string; label: string; aspect: string }[],

  // ── VISITA ─────────────────────────────────────────────────────────────
  visitaHero: "/img/pileta-escalones.jpg",
  llegada: "/img/pileta-verja-entrada.webp",
  comoLlegar: "/img/benaojan-3.jpg",

  // ── ARTE RUPESTRE ──────────────────────────────────────────────────────
  rupestre1: "/img/pileta-pintura-pez.webp",
  rupestre2: "/img/pileta-pintura-cabra.webp",

  // ── GUÍA / FAMILIA ─────────────────────────────────────────────────────
  guia: "/img/pileta-verja-entrada.webp",

  // ── OG / SEO ───────────────────────────────────────────────────────────
  og: "/img/pileta-interior.jpg",
} as const
