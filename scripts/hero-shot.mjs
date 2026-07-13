import { chromium } from "playwright"
import { resolve } from "node:path"

const BASE = process.env.URL || "http://localhost:3000"
const browser = await chromium.launch()

async function shoot(viewport, suffix) {
  const ctx = await browser.newContext({ viewport, deviceScaleFactor: 1 })
  const page = await ctx.newPage()
  await page.goto(BASE + "/", { waitUntil: "networkidle", timeout: 60000 })
  await new Promise((r) => setTimeout(r, 2500))
  // Solo el viewport — primer pantallazo
  const p1 = resolve(process.cwd(), "screenshots/rutas", `${suffix}-hero-above.png`)
  await page.screenshot({ path: p1, fullPage: false })
  console.log("✓ above-fold " + suffix)

  // Scrollear al ReviewsSection y disparar shot
  await page.evaluate(() => {
    const el = document.querySelector("h2")
    // Buscar el bloque que contiene "opiniones"
    const sections = Array.from(document.querySelectorAll("section"))
    for (const s of sections) {
      if (s.textContent && s.textContent.includes("opiniones")) {
        s.scrollIntoView({ block: "start" })
        return
      }
    }
  })
  await new Promise((r) => setTimeout(r, 800))
  const p2 = resolve(process.cwd(), "screenshots/rutas", `${suffix}-reviews.png`)
  await page.screenshot({ path: p2, fullPage: false })
  console.log("✓ reviews " + suffix)

  // Scrollear al navbar para comprobar blur
  await page.evaluate(() => window.scrollTo(0, 400))
  await new Promise((r) => setTimeout(r, 500))
  const p3 = resolve(process.cwd(), "screenshots/rutas", `${suffix}-navbar-scrolled.png`)
  await page.screenshot({ path: p3, fullPage: false })
  console.log("✓ navbar-scrolled " + suffix)

  await ctx.close()
}

await shoot({ width: 1440, height: 900 }, "desktop")
await shoot({ width: 375, height: 812 }, "mobile")

await browser.close()
console.log("Done.")
