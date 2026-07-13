import { chromium } from "playwright"
import { mkdirSync } from "node:fs"
import { resolve } from "node:path"

const URL = process.env.URL || "http://localhost:3000"
const OUT = resolve(process.cwd(), "screenshots")
mkdirSync(OUT, { recursive: true })

// Captura segmentos verticales del Home en desktop, 1440px wide
const browser = await chromium.launch()
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 1,
})
const page = await ctx.newPage()
await page.goto(URL, { waitUntil: "networkidle", timeout: 60000 })

// Scroll para disparar animaciones
await page.evaluate(async () => {
  const distance = 400
  let scrolled = 0
  while (scrolled < document.body.scrollHeight) {
    window.scrollBy(0, distance)
    scrolled += distance
    await new Promise((r) => setTimeout(r, 80))
  }
})
await page.waitForTimeout(800)

const segments = [
  { name: "01-hero", y: 0 },
  { name: "02-stats-marquee", y: 900 },
  { name: "03-about", y: 1300 },
  { name: "04-visita", y: 2000 },
  { name: "05-entradas", y: 2700 },
  { name: "06-salas", y: 3400 },
  { name: "07-galeria", y: 4200 },
  { name: "08-reviews", y: 4900 },
  { name: "09-cta", y: 5500 },
  { name: "10-footer", y: 6000 },
]

for (const s of segments) {
  await page.evaluate((y) => window.scrollTo(0, y), s.y)
  await page.waitForTimeout(500)
  const path = resolve(OUT, `${s.name}.png`)
  await page.screenshot({ path })
  console.log(`✓ ${s.name} @ y=${s.y}`)
}
await browser.close()
console.log("Done.")
