// Matcher determinista de FAQs sin LLM.
// Calcula similitud léxica simple sobre las preguntas frecuentes.
// Si no encuentra match con confianza suficiente → marca para escalar.

import { faqs, tarifas, horarios, contacto } from "@/content/cueva"

const STOPWORDS = new Set([
  "el","la","los","las","un","una","unos","unas","y","o","a","de","del","en","es","son","ser","con","por","para","que","qué","cómo","como","cuánto","cuanto","cuál","cual","cuando","cuándo","dónde","donde","si","no","mi","tu","su","me","te","se","lo","al","ya","muy","más","mas","poco","mucho","hay","hace","hago","tengo","tienen","tiene","puedo","podemos","puede","pueden","this","that","the","a","an","is","are","was","were","be","to","of","and","or","but","in","on","at","for","with","without","i","you","he","she","it","we","they","my","your","do","does","did","can","could","would","should","how","what","when","where","why","which","who","whose"
])

function tokens(s: string): string[] {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((t) => t.length > 1 && !STOPWORDS.has(t))
}

function jaccard(a: string[], b: string[]): number {
  if (a.length === 0 || b.length === 0) return 0
  const A = new Set(a)
  const B = new Set(b)
  let inter = 0
  A.forEach((x) => {
    if (B.has(x)) inter++
  })
  const uni = new Set(a.concat(b)).size
  return inter / uni
}

type FaqEntry = { q: string; a: string; tokens: string[] }

// Pregenera tokens de cada FAQ + algunas sinónimas que cubren casos típicos.
const KB: FaqEntry[] = [
  ...faqs.map((f) => ({ q: f.q, a: f.a, tokens: tokens(f.q + " " + f.a) })),
  {
    q: "Tarifas y precios",
    a: tarifas
      .map(
        (t) =>
          `${t.label}: ${t.gratis ? "gratis" : t.requiereContacto ? "consultar" : `${t.precio}€`}`
      )
      .join(" · "),
    tokens: tokens("precio precios tarifa tarifas coste cuesta entrada price cost"),
  },
  {
    q: "Horarios y turnos",
    a: `Días laborables: ${horarios.laboral.map((t) => `${t.inicio}-${t.fin}`).join(", ")}. Fines de semana y festivos: ${horarios.findeSemanaFestivo.map((t) => `${t.inicio}-${t.fin}`).join(", ")}. Abierto todo el año. Hay que llegar 20 min antes.`,
    tokens: tokens("horario horarios turno turnos abierto cerrado abre cierra hours schedule visit"),
  },
  {
    q: "Reservar",
    a: "Las reservas se hacen por teléfono, sin pago online. Elige fecha y turno en /reservar y llama para confirmar la plaza.",
    tokens: tokens("reservar reserva booking comprar entradas tickets online"),
  },
  {
    q: "Cómo llegar",
    a: `${contacto.direccion}. ${contacto.distanciaRonda}. Hay parking gratuito; desde ahí son ~10 minutos a pie subiendo 101 escalones.`,
    tokens: tokens("ubicacion direccion donde llegar parking aparcar coche localizacion address location"),
  },
  {
    q: "Idiomas del guía",
    a: "Las visitas se realizan habitualmente en español. Para grupos en otro idioma (inglés, francés, alemán) conviene avisar al reservar.",
    tokens: tokens("idioma idiomas ingles english frances german aleman lengua language"),
  },
  {
    q: "Pinturas y arte rupestre",
    a: "Más de 300 figuras y signos. Las pinturas más antiguas son de hace ~33.000 años. Joyas: el Pez (1,5 m, ~20.000 a.C.), la Yegua Preñada (~22.000 a.C.) y el Bisonte (~25.000 a.C.).",
    tokens: tokens("pinturas arte rupestre pez yegua bisonte foca paleolitico solutrense art paintings"),
  },
]

export type FallbackResponse = {
  text: string
  confidence: number
  escalate: boolean
}

export function fallbackAnswer(userMessage: string): FallbackResponse {
  const t = tokens(userMessage)
  if (t.length === 0) {
    return {
      text:
        "¿En qué puedo ayudarte? Pregúntame por horarios, precios, accesibilidad o cómo llegar.",
      confidence: 1,
      escalate: false,
    }
  }

  let best: { entry: FaqEntry; score: number } | null = null
  for (const e of KB) {
    const s = jaccard(t, e.tokens)
    if (!best || s > best.score) best = { entry: e, score: s }
  }

  if (!best || best.score < 0.08) {
    return {
      text:
        "No estoy segura de eso. ¿Te paso el teléfono para que hables con alguien del equipo?",
      confidence: 0,
      escalate: true,
    }
  }

  return {
    text: best.entry.a,
    confidence: best.score,
    escalate: false,
  }
}
