import { contacto } from "@/content/cueva"

export function waLink(mensaje?: string): string {
  const phone = contacto.telefonoTel.replace(/[^0-9]/g, "")
  const texto = mensaje ?? "Hola, quiero reservar visita a la Cueva de la Pileta."
  return `https://wa.me/${phone}?text=${encodeURIComponent(texto)}`
}
