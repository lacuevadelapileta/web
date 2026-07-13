// Descarga un peso/variante concreta de una fuente de Google Fonts como
// ArrayBuffer, para usarla dentro de ImageResponse (favicon / OG image).
export async function loadGoogleFont(
  font: string,
  weight: number,
  italic = false
): Promise<ArrayBuffer> {
  const cssUrl = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(
    font
  )}:ital,wght@${italic ? 1 : 0},${weight}&display=swap`
  const css = await (await fetch(cssUrl)).text()
  const match = css.match(/src: url\(([^)]+)\) format\('(?:opentype|truetype)'\)/)
  if (!match) throw new Error(`No se pudo resolver la fuente: ${font}`)
  const res = await fetch(match[1])
  if (!res.ok) throw new Error(`No se pudo descargar la fuente: ${font}`)
  return res.arrayBuffer()
}
