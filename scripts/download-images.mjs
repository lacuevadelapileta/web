// Descarga fotos de Wikimedia Commons vía API.
// Usa prop=imageinfo&iiurlwidth para obtener thumbnails reescalados (más rápidos).

import { writeFile, mkdir } from "node:fs/promises"
import { resolve } from "node:path"

const OUT = resolve(process.cwd(), "public", "img")
await mkdir(OUT, { recursive: true })

const UA =
  "CuevaPiletaWeb/1.0 (https://cuevadelapileta.es; contacto@cuevadelapileta.es)"

// Títulos reales confirmados con search-commons.mjs.
const files = [
  // Cueva de la Pileta — Wikimedia oficial
  ["pileta-arriba", "File:Above cueva de la pileta.jpg"],
  ["pileta-entrada-2", "File:Entrada pileta.jpg"],
  ["pileta-stairs", "File:20070519 Cueva de la Pileta stairs.jpg"],
  ["pileta-lampara", "File:Lámpara fija sobre estalagmita 125743.jpg"],
  ["pileta-cueva-1", "File:Cueva Pileta - 1.jpg"],
  ["pileta-grazalema", "File:Grazalema (21174646542).jpg"],
  // Sierra de Líbar / entorno
  ["sierra-libar-1", "File:Sierra de Líbar (16016366533).jpg"],
  ["sierra-libar-2", "File:Sierra de Líbar (16450102689).jpg"],
  ["sierra-libar-3", "File:Sierra de Líbar (16610327926).jpg"],
  ["llanos-libar", "File:Llanos de Líbar.jpg"],
  ["macizo-libar", "File:Macizo de Líbar 01.jpg"],
  // Benaoján
  ["benaojan-1", "File:Benaoján, 29370, Málaga, Spain - panoramio (10).jpg"],
  ["benaojan-2", "File:Benaoján, 29370, Málaga, Spain - panoramio (15).jpg"],
  ["benaojan-3", "File:Benaoján, 29370, Málaga, Spain - panoramio (2).jpg"],
  // Ronda (la ciudad cercana, gran reclamo turístico)
  ["ronda-puente", "File:Ronda Puente Nuevo and El Tajo gorge.jpg"],
  ["ronda-tajo", "File:Views of the El Tajo gorge from Puente Nuevo at Calle Arminan, in Ronda - Spain.jpg"],
]

async function commonsUrl(title) {
  const api = new URL("https://commons.wikimedia.org/w/api.php")
  api.searchParams.set("action", "query")
  api.searchParams.set("format", "json")
  api.searchParams.set("prop", "imageinfo")
  api.searchParams.set("iiprop", "url|size")
  api.searchParams.set("iiurlwidth", "2000")
  api.searchParams.set("titles", title)
  const res = await fetch(api, { headers: { "User-Agent": UA } })
  if (!res.ok) throw new Error(`API ${res.status}`)
  const data = await res.json()
  const pages = data?.query?.pages || {}
  const page = Object.values(pages)[0]
  if (!page || page.missing) return null
  const info = page.imageinfo?.[0]
  return info?.thumburl || info?.url || null
}

async function download(name, title) {
  try {
    const url = await commonsUrl(title)
    if (!url) {
      console.error(`✗ ${name}: not found (${title})`)
      return
    }
    const res = await fetch(url, { headers: { "User-Agent": UA } })
    if (!res.ok) {
      console.error(`✗ ${name}: HTTP ${res.status}`)
      return
    }
    const buf = Buffer.from(await res.arrayBuffer())
    const ext = url.toLowerCase().endsWith(".png") ? "png" : "jpg"
    const path = resolve(OUT, `${name}.${ext}`)
    await writeFile(path, buf)
    console.log(`✓ ${name} (${(buf.length / 1024).toFixed(0)}KB) ${ext}`)
  } catch (e) {
    console.error(`✗ ${name}: ${e.message}`)
  }
}

for (const [name, title] of files) {
  await download(name, title)
  await new Promise((r) => setTimeout(r, 700))
}

console.log("Done.")
