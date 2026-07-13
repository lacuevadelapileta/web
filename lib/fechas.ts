import { horarios, type Turno } from "@/content/cueva"

export function isWeekend(date: Date): boolean {
  const d = date.getDay()
  return d === 0 || d === 6
}

export function turnosDeFecha(date: Date | undefined | null): Turno[] {
  if (!date) return []
  return isWeekend(date) ? horarios.findeSemanaFestivo : horarios.laboral
}

export function formatFechaLarga(date: Date): string {
  return date.toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

export function toISO(date: Date): string {
  const d = new Date(date.getTime() - date.getTimezoneOffset() * 60000)
  return d.toISOString().slice(0, 10)
}
