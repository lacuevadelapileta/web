import { contacto, empresa, horarios, tarifas, SITE } from "@/content/cueva"

const GBP_CID = "11273395000893348274"
export const GOOGLE_MAPS_URL = `https://www.google.com/maps?cid=${GBP_CID}`

function openingHours(
  turnos: { inicio: string; fin: string }[],
  dayOfWeek: string[]
) {
  return turnos.map((t) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek,
    opens: t.inicio,
    closes: t.fin,
  }))
}

/**
 * Nodo único TouristAttraction + LocalBusiness para toda la entidad.
 * No incluye AggregateRating: combinar Google+TripAdvisor+Booking en un
 * solo rating es politica de datos estructurados no permitida por Google.
 */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["TouristAttraction", "LocalBusiness"],
    "@id": `${SITE.baseUrl}/#negocio`,
    name: SITE.nombre,
    legalName: empresa.razonSocial,
    taxID: empresa.nif,
    description:
      "Yacimiento prehistórico con arte rupestre paleolítico de hasta 40.000 años de antigüedad, en Benaoján (Málaga). Monumento Nacional desde 1924 y Bien de Interés Cultural. Visita guiada de aproximadamente 1 hora y 20 minutos, custodiada por la familia Bullón desde su descubrimiento en 1905.",
    url: SITE.baseUrl,
    logo: `${SITE.baseUrl}/img/logo/yegua-logo.png`,
    telephone: contacto.telefonoTel,
    email: contacto.email,
    priceRange: "10€–15€",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Carretera de Cortes de la Frontera",
      addressLocality: "Benaoján",
      postalCode: "29370",
      addressRegion: "Málaga",
      addressCountry: "ES",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 36.6912648721628,
      longitude: -5.352283923237764,
    },
    hasMap: GOOGLE_MAPS_URL,
    sameAs: [GOOGLE_MAPS_URL, contacto.instagram],
    isAccessibleForFree: false,
    publicAccess: true,
    smokingAllowed: false,
    openingHoursSpecification: [
      ...openingHours(horarios.laboral, [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ]),
      ...openingHours(horarios.findeSemanaFestivo, ["Saturday", "Sunday"]),
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "reservations",
        telephone: contacto.telefonoTel,
        email: contacto.email,
        areaServed: "ES",
        availableLanguage: ["es"],
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "10:00",
          closes: "13:00",
        },
      },
    ],
    makesOffer: tarifas.map((t) => ({
      "@type": "Offer",
      name: t.label,
      price: String(t.precio),
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: `${SITE.baseUrl}/reservar`,
    })),
  }
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE.baseUrl },
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: item.name,
        item: `${SITE.baseUrl}${item.path}`,
      })),
    ],
  }
}
