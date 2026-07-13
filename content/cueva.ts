// ─── Contenido estático del sitio Cueva de la Pileta ──────────────────────

export const contacto = {
  telefono: "+34 677 610 500",
  telefonoFormato: "+34 677 610 500",
  telefonoTel: "+34677610500",
  horarioAtencion: "Lunes a Domingo, 10:00 – 13:00 h",
  direccion:
    "Carretera de Cortes de la Frontera, Benaoján, 29370 Málaga",
  distanciaRonda: "A 15 km de Ronda",
  instagram: "https://www.instagram.com/cuevadelapileta/",
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1d102377.68439319928!2d-5.352283923237764!3d36.6912648721628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0d3ae18cf9c10f%3A0x9c73250638e999b2!2sCueva%20de%20la%20Pileta!5e0!3m2!1ses!2ses!4v1706215107245!5m2!1ses!2ses",
}

export type Turno = {
  id: string
  turno: string
  inicio: string
  fin: string
  aforo: number
}

export const horarios = {
  laboral: [
    { id: "lab_1", turno: "Primera visita", inicio: "11:30", fin: "12:30", aforo: 20 },
    { id: "lab_2", turno: "Segunda visita", inicio: "13:00", fin: "14:00", aforo: 20 },
  ] satisfies Turno[],
  findeSemanaFestivo: [
    { id: "fds_1", turno: "Primera visita", inicio: "11:00", fin: "12:00", aforo: 20 },
    { id: "fds_2", turno: "Segunda visita", inicio: "12:00", fin: "13:00", aforo: 20 },
    { id: "fds_3", turno: "Tercera visita", inicio: "13:00", fin: "14:00", aforo: 20 },
    { id: "fds_4", turno: "Cuarta visita", inicio: "16:00", fin: "17:00", aforo: 20 },
  ] satisfies Turno[],
  abiertoTodoElAnio: true,
  reservaAtencionHorario: "Lunes a Domingo, 10:00 – 13:00 h",
  llegadaAnticipacion: 20,
}

export type Tarifa = {
  id: string
  label: string
  sublabel?: string
  precio: number
  gratis?: boolean
  destacado?: boolean
  requiereContacto?: boolean
}

export const tarifas: Tarifa[] = [
  {
    id: "menor5",
    label: "Menores de 5 años",
    sublabel: "Acompañados por un adulto",
    precio: 0,
    gratis: true,
  },
  {
    id: "nino",
    label: "Niños / Niñas",
    sublabel: "De 5 a 10 años",
    precio: 10,
  },
  {
    id: "adulto",
    label: "Adultos y Jóvenes",
    sublabel: "De 11 años en adelante",
    precio: 15,
    destacado: true,
  },
  {
    id: "grupo",
    label: "Grupos Escolares / Universitarios",
    sublabel: "Mínimo 15 personas · Precio por persona",
    precio: 10,
    requiereContacto: true,
  },
]

export const stats = [
  { valor: 40000, sufijo: "", prefijo: "", unidad: "años a.C.", label: "Pinturas más antiguas", formatear: true },
  { valor: 3000, sufijo: "", prefijo: "+", unidad: "", label: "Figuras y grabados", formatear: false },
  { valor: 500, sufijo: " m", prefijo: "", unidad: "", label: "Recorrido de visita", formatear: false },
  { valor: 1905, sufijo: "", prefijo: "", unidad: "", label: "Año del descubrimiento", formatear: false },
] as const

export const salas = [
  {
    n: "01",
    nombre: "Galería de los Murciélagos",
    desc: "Sala de más de 15 m de altura por la que salen cada noche miles de murciélagos — se calculan unos 18.000, de 12 especies distintas.",
  },
  {
    n: "02",
    nombre: "Sala del Castillo",
    desc: "Amplia sala con una gran formación calcárea que recuerda a un castillo. Restos cerámicos del Neolítico y la Edad del Metal, entre 3.000 y 9.000 años.",
  },
  {
    n: "03",
    nombre: "Nave Central",
    desc: "60 metros de longitud, hasta 15 m de altura. Aquí comienzan las pinturas: símbolos solutrenses de hace unos 22.000 años y figuras de caballos en ocre y rojo.",
  },
  {
    n: "04",
    nombre: "Las Termópilas",
    desc: "Paso estrecho que conecta con el Salón del Lago. Temperatura constante todo el año, con humedad relativa superior al 60% en época seca.",
  },
  {
    n: "05",
    nombre: "Salón del Lago",
    desc: "Lago subterráneo con pinturas de tres bóvidos de distintas épocas del Paleolítico (entre 10.000 y 40.000 años) y, frente al lago, signos neolíticos de unos 5.000 años.",
  },
  {
    n: "06",
    nombre: "El Desfiladero",
    desc: "Pasillo estrecho de 7-8 m de altura donde parece que la cueva termina — pero da paso a las salas más importantes del recorrido. Concentración de signos abstractos, de los más antiguos de la cueva.",
  },
  {
    n: "07",
    nombre: "Los Órganos",
    desc: "Formación donde estalactitas y estalagmitas se fusionan en columnas con forma de tubos de órgano.",
  },
  {
    n: "08",
    nombre: "Baño de la Reina Mora",
    desc: "Pequeño lago de agua cristalina que se mantiene a 12 °C constantes, con reflejos y goteo continuo. Apenas hay pinturas, pero es uno de los rincones más bonitos del recorrido.",
  },
  {
    n: "09",
    nombre: "Sala del Pez",
    desc: "Una de las salas más grandes de la cueva, con pintura neolítica y de la Edad del Metal (entre 3.000 y 9.000 años). Al fondo, el gran Pez de 1,20 m, datado en unos 20.000 años y de características marinas, con una foca pintada en su interior — una de las representaciones más singulares del arte rupestre europeo. También hay figuras de lince y cabras, del Paleolítico (entre 10.000 y 40.000 años).",
  },
] as const

export const recomendaciones = [
  "Ropa cómoda y calzado cerrado con buena suela",
  "Llevar una chaqueta ligera — temperatura interior constante de 16 °C",
  "Desde el parking hasta la entrada: 101 escalones, ~10 minutos a pie",
  "No apta para personas con problemas de movilidad o cardíacos severos",
  "Se facilita una lámpara portátil — no hay luz eléctrica en el interior",
  "Máximo 20 personas por grupo",
  "Presentarse 20 minutos antes o la reserva se anula automáticamente",
  "Prohibido fotografiar con flash",
  "Prohibido tocar paredes o formaciones",
] as const

export type Review = {
  autor: string
  ciudad: string
  rating: 5 | 4
  texto: string
  fecha: string // ISO YYYY-MM-DD
  plataforma: "Google" | "TripAdvisor" | "Booking"
}

export const reviews: Review[] = [
  {
    autor: "Marta L.",
    ciudad: "Madrid",
    rating: 5,
    fecha: "2025-09-14",
    plataforma: "Google",
    texto:
      "Una experiencia única. El guía, descendiente del descubridor, hace que la visita sea inolvidable. Ver pinturas de 20.000 años con una lámpara en la mano es algo que no se olvida.",
  },
  {
    autor: "James W.",
    ciudad: "London",
    rating: 5,
    fecha: "2025-08-22",
    plataforma: "TripAdvisor",
    texto:
      "Absolutely incredible. The cave is huge and the rock art is breathtaking. The guide explained everything in perfect English. Far better than the museum experience at Altamira.",
  },
  {
    autor: "Familia García",
    ciudad: "Sevilla",
    rating: 5,
    fecha: "2025-11-03",
    plataforma: "Google",
    texto:
      "Fuimos con los niños y se quedaron fascinados. La sala del pez es impresionante. Reservamos por teléfono y todo perfecto, llegamos 20 min antes como nos pidieron.",
  },
  {
    autor: "Lucía F.",
    ciudad: "Barcelona",
    rating: 5,
    fecha: "2025-07-09",
    plataforma: "Google",
    texto:
      "Lejos del turismo de masas. Una hora cargada de historia con un guía apasionado. El paisaje de la sierra hasta llegar ya merece el viaje. 100% recomendado.",
  },
  {
    autor: "Heinrich M.",
    ciudad: "München",
    rating: 5,
    fecha: "2025-10-18",
    plataforma: "TripAdvisor",
    texto:
      "Sin lámparas eléctricas en la cueva, solo las de mano. Eso convierte la visita en un viaje en el tiempo. La yegua preñada y el pez son impresionantes.",
  },
  {
    autor: "Pedro R.",
    ciudad: "Málaga",
    rating: 5,
    fecha: "2026-01-12",
    plataforma: "Google",
    texto:
      "Visita perfecta para una mañana de sábado. Llamamos para reservar y en un momento nos confirmaron todo, solo tuvimos que llegar puntuales. El guía se nota que es de la familia, transmite muchísimo cariño por la cueva.",
  },
  {
    autor: "Sophie D.",
    ciudad: "Lyon",
    rating: 4,
    fecha: "2025-12-27",
    plataforma: "Booking",
    texto:
      "Visite fascinante. La grotte est froide, pensez à un manteau. Les peintures rupestres sont étonnamment bien conservées. Notre guide parlait français correctement.",
  },
  {
    autor: "Ana y Carlos",
    ciudad: "Granada",
    rating: 5,
    fecha: "2025-06-30",
    plataforma: "Google",
    texto:
      "Fuimos sin esperar mucho y nos llevamos una sorpresa enorme. 60 minutos que se pasan volando. Atención impecable desde la reserva hasta la despedida. Volveremos con los abuelos.",
  },
]

export const reviewsStats = {
  rating: 4.8,
  total: 2547,
  destacadas: 4,
  porPlataforma: [
    { nombre: "Google", logo: "G", rating: 4.8, total: 1842, color: "blue" },
    { nombre: "TripAdvisor", logo: "T", rating: 4.9, total: 503, color: "green" },
    { nombre: "Booking", logo: "B", rating: 4.7, total: 202, color: "navy" },
  ],
} as const

export const mediosMencionados = [
  "National Geographic",
  "El País",
  "Lonely Planet",
  "BBC Travel",
  "Condé Nast Traveler",
  "ABC Cultural",
  "The Guardian",
  "Diario Sur",
] as const

export const faqs = [
  {
    q: "¿Cuánto dura la visita?",
    a: "Aproximadamente 60 minutos en el interior de la cueva. Sumado al acceso desde el parking (10 min subiendo, 10 min bajando), reserva una hora y media en total.",
  },
  {
    q: "¿Es accesible para personas con movilidad reducida?",
    a: "Lamentablemente no. El acceso desde el parking implica subir 101 escalones por la ladera y el recorrido interior tiene pasos estrechos y desniveles. No la recomendamos para personas con problemas cardíacos severos.",
  },
  {
    q: "¿Se puede entrar con niños pequeños?",
    a: "Sí, y los menores de 5 años entran gratis. Es una visita muy estimulante para niños — caminan con linterna en la mano y los guías cuentan historias. Eso sí, deben poder andar y mantenerse junto al grupo.",
  },
  {
    q: "¿Hay luz eléctrica dentro?",
    a: "No. La cueva se visita con lámparas portátiles que facilitamos en la entrada. Es parte de la experiencia auténtica y ayuda a la conservación del arte rupestre.",
  },
  {
    q: "¿Se pueden hacer fotos?",
    a: "Sí, pero sin flash. El flash daña los pigmentos del arte rupestre. Tampoco se permite tocar las paredes ni las formaciones.",
  },
  {
    q: "¿Qué pasa si no llegamos a tiempo?",
    a: "Pedimos llegar 20 minutos antes del turno. Si no os presentáis a esa hora la reserva se anula automáticamente y la plaza pasa al siguiente visitante en lista de espera.",
  },
  {
    q: "¿Hace frío dentro?",
    a: "La temperatura interior es constante de 16 °C todo el año. Recomendamos una chaqueta ligera incluso en verano.",
  },
  {
    q: "¿Hay parking?",
    a: "Sí, parking gratuito junto al inicio del sendero. Desde ahí son ~10 minutos a pie hasta la entrada de la cueva.",
  },
] as const

export const timelineHistoria = [
  { anio: "1905", hito: "Descubrimiento", desc: "José Bullón Lobato descubre la cueva buscando guano de murciélago para fertilizar sus campos." },
  { anio: "1911", hito: "Primera publicación", desc: "El coronel británico Willoughby Verner publica la noticia en The Saturday Review (Londres)." },
  { anio: "1912", hito: "Expedición científica", desc: "Henri Breuil, Hugo Obermaier, Pablo Wernert y Juan Cabré documentan las pinturas por primera vez." },
  { anio: "1924", hito: "Monumento Nacional", desc: "Declarada Monumento Nacional por Real Orden de Alfonso XIII." },
  { anio: "1933", hito: "Nuevas galerías", desc: "Tomás Bullón descubre las Nuevas Galerías y los esqueletos humanos del interior." },
  { anio: "1934", hito: "Venus de Benaoján", desc: "Hallazgo de la figura femenina hoy expuesta en el Museo de Málaga." },
  { anio: "1985", hito: "BIC", desc: "Declarada Bien de Interés Cultural por la legislación española de patrimonio." },
  { anio: "1992", hito: "Galería virgen", desc: "Descubrimiento de una galería virgen de 250 metros, intacta desde la prehistoria." },
  { anio: "Hoy", hito: "Cuarta generación", desc: "Rosario y José Tomás Bullón Almagro custodian el yacimiento — 120 años en manos de la misma familia." },
] as const

export const SITE = {
  nombre: "Cueva de la Pileta",
  baseUrl: "https://cuevadelapileta.es",
  descripcionCorta:
    "Arte rupestre paleolítico de 40.000 años en Benaoján, Málaga. A 15 km de Ronda.",
} as const
