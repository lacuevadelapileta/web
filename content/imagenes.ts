// Fotos reales de la Cueva de la Pileta, enviadas por el cliente (familia Bullón).
// Servidas localmente desde /public/img/ para evitar dependencias externas.
// Las fotos de entorno (Ronda, Benaoján, Sierra de Líbar) siguen siendo de
// Wikimedia Commons — el cliente no ha mandado fotos propias de esos lugares.

export const imagenes = {
  // ── HERO ───────────────────────────────────────────────────────────────
  hero: "/img/pileta-cortina-estalactitas.webp",
  heroFondo: "/img/pileta-cortina-estalactitas.webp",

  // ── ABOUT / HISTORIA ───────────────────────────────────────────────────
  about: "/img/pileta-formacion-columna.webp",

  // ── LA CUEVA (página interior) ─────────────────────────────────────────
  sierraAerea: "/img/pileta-vista-boca.webp",
  pinturas: "/img/pileta-pintura-pez.webp",
  exterior: "/img/pileta-verja-entrada.webp",

  // ── GALERÍA — tiles reales + entorno ────────────────────────────────────
  galeria: [
    { src: "/img/pileta-pintura-pez.webp", label: "Pintura rupestre — El Pez", aspect: "aspect-[16/9]" },
    { src: "/img/pileta-verja-entrada.webp", label: "Entrada real a la cueva", aspect: "aspect-[3/4]" },
    { src: "/img/pileta-pasillo-estalactitas.webp", label: "Pasillo de estalactitas", aspect: "aspect-[4/3]" },
    { src: "/img/pileta-formacion-columna.webp", label: "Formaciones calcáreas", aspect: "aspect-square" },
    { src: "/img/pileta-vista-boca.webp", label: "Vista de la sierra desde la boca de la cueva", aspect: "aspect-[3/4]" },
    { src: "/img/pileta-murcielagos.webp", label: "Galería de los Murciélagos", aspect: "aspect-[4/3]" },
    { src: "/img/pileta-organos.webp", label: "Los Órganos", aspect: "aspect-[4/5]" },
    { src: "/img/pileta-pintura-cabra.webp", label: "Pintura rupestre — grabado animal", aspect: "aspect-[4/3]" },
    { src: "/img/pileta-pintura-ave.webp", label: "Pintura rupestre — ave esquemática", aspect: "aspect-square" },
    { src: "/img/pileta-tunel-acceso.webp", label: "Paso interior de la cueva", aspect: "aspect-[3/4]" },
    { src: "/img/pileta-pasillo-luz.webp", label: "Luz filtrándose en la galería", aspect: "aspect-[4/3]" },
    { src: "/img/pileta-pintura-bicroma.webp", label: "Pintura rupestre bícroma", aspect: "aspect-[4/3]" },
    { src: "/img/pileta-pintura-policroma.webp", label: "Pintura rupestre policroma", aspect: "aspect-[3/4]" },
    { src: "/img/pileta-formacion-cuenco.webp", label: "La pileta — cuenco natural con agua", aspect: "aspect-[3/4]" },
    { src: "/img/sierra-libar-2.jpg", label: "Macizo serrano", aspect: "aspect-[4/5]" },
    { src: "/img/ronda-tajo.jpg", label: "Tajo de Ronda", aspect: "aspect-square" },
    { src: "/img/benaojan-2.jpg", label: "Pueblo blanco", aspect: "aspect-[4/3]" },
  ] as { src: string; label: string; aspect: string }[],

  // ── VISITA ─────────────────────────────────────────────────────────────
  visitaHero: "/img/pileta-pasillo-estalactitas.webp",
  llegada: "/img/pileta-verja-entrada.webp",
  comoLlegar: "/img/benaojan-3.jpg",

  // ── ARTE RUPESTRE ──────────────────────────────────────────────────────
  rupestre1: "/img/pileta-pintura-pez.webp",
  rupestre2: "/img/pileta-pintura-cabra.webp",

  // ── GUÍA / FAMILIA ─────────────────────────────────────────────────────
  guia: "/img/pileta-verja-entrada.webp",
  historiaFamilia: "/img/pileta-historia-bullon.webp",

  // ── OG / SEO ───────────────────────────────────────────────────────────
  og: "/img/pileta-cortina-estalactitas.webp",
} as const
