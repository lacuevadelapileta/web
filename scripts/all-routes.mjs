import { chromium } from "playwright"
import { mkdirSync } from "node:fs"
import { resolve } from "node:path"

const BASE = process.env.URL || "http://localhost:3000"
const OUT = resolve(process.cwd(), "screenshots", "rutas")
mkdirSync(OUT, { recursive: true })

const rutas = [
  { name: "01-home", path: "/" },
  { name: "02-reservar-paso1", path: "/reservar" },
  { name: "03-la-cueva", path: "/la-cueva" },
  { name: "04-visita", path: "/visita" },
  { name: "05-galeria", path: "/galeria" },
  { name: "06-contacto", path: "/contacto" },
  {
    name: "07-confirmacion",
    path: "/confirmacion?demo=1&codigo=PILETA42&fecha=2026-05-23&turno=fds_2&entradas=adulto:2,nino:1&total=40&nombre=Mar%C3%ADa%20Garc%C3%ADa&email=maria%40ejemplo.com",
  },
]

const browser = await chromium.launch()

async function shoot(viewport, mobile, suffix) {
  for (const r of rutas) {
    const ctx = await browser.newContext({
      viewport,
      deviceScaleFactor: 1,
      isMobile: mobile,
      hasTouch: mobile,
    })
    const page = await ctx.newPage()
    try {
      await page.goto(BASE + r.path, { waitUntil: "domcontentloaded", timeout: 60000 })
      await page.waitForLoadState("networkidle", { timeout: 20000 }).catch(() => {})
      await page.evaluate(async () => {
        const distance = 500
        let scrolled = 0
        while (scrolled < document.body.scrollHeight) {
          window.scrollBy(0, distance)
          scrolled += distance
          await new Promise((r) => setTimeout(r, 60))
        }
        window.scrollTo(0, 0)
        await new Promise((r) => setTimeout(r, 500))
      })
      const p = resolve(OUT, `${suffix}-${r.name}.png`)
      await page.screenshot({ path: p, fullPage: true, timeout: 60000 })
      console.log(`✓ ${suffix} ${r.name}`)
    } catch (e) {
      console.error(`✗ ${suffix} ${r.name}: ${e.message}`)
    } finally {
      await ctx.close()
    }
  }
}

await shoot({ width: 1440, height: 900 }, false, "desktop")
await shoot({ width: 375, height: 812 }, true, "mobile")

await browser.close()
console.log("Done.")
