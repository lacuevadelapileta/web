// Busca títulos reales en Commons por categoría y por palabra clave.

const UA =
  "CuevaPiletaWeb/1.0 (https://cuevadelapileta.es; contacto@cuevadelapileta.es)"

async function listCategory(cat, limit = 30) {
  const u = new URL("https://commons.wikimedia.org/w/api.php")
  u.searchParams.set("action", "query")
  u.searchParams.set("format", "json")
  u.searchParams.set("list", "categorymembers")
  u.searchParams.set("cmtitle", `Category:${cat}`)
  u.searchParams.set("cmtype", "file")
  u.searchParams.set("cmlimit", String(limit))
  const r = await fetch(u, { headers: { "User-Agent": UA } })
  const j = await r.json()
  return (j?.query?.categorymembers || []).map((c) => c.title)
}

async function search(q, limit = 15) {
  const u = new URL("https://commons.wikimedia.org/w/api.php")
  u.searchParams.set("action", "query")
  u.searchParams.set("format", "json")
  u.searchParams.set("list", "search")
  u.searchParams.set("srsearch", q)
  u.searchParams.set("srnamespace", "6") // File namespace
  u.searchParams.set("srlimit", String(limit))
  const r = await fetch(u, { headers: { "User-Agent": UA } })
  const j = await r.json()
  return (j?.query?.search || []).map((s) => s.title)
}

const cats = [
  "Cueva de la Pileta",
  "Benaoján",
  "Sierra de Líbar",
  "Ronda, Spain",
  "Caves of Andalusia",
  "Sierra de Grazalema",
]

for (const c of cats) {
  console.log(`\n=== Category:${c} ===`)
  try {
    const items = await listCategory(c, 20)
    items.forEach((t) => console.log("  " + t))
  } catch (e) {
    console.log("  error: " + e.message)
  }
  await new Promise((r) => setTimeout(r, 400))
}

const queries = ["Cueva Pileta", "Sierra Líbar Benaoján", "Ronda gorge tajo"]
for (const q of queries) {
  console.log(`\n=== Search: ${q} ===`)
  try {
    const items = await search(q, 10)
    items.forEach((t) => console.log("  " + t))
  } catch (e) {
    console.log("  error: " + e.message)
  }
  await new Promise((r) => setTimeout(r, 400))
}
