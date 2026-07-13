import { chromium } from "playwright"
import { mkdirSync } from "node:fs"
import { resolve } from "node:path"

const URL = process.env.URL || "http://localhost:3000"
const OUT = resolve(process.cwd(), "screenshots")
mkdirSync(OUT, { recursive: true })

const shots = [
  { name: "desktop-home-full", viewport: { width: 1440, height: 900 }, fullPage: true },
  { name: "desktop-home-viewport", viewport: { width: 1440, height: 900 }, fullPage: false },
  { name: "mobile-home-full", viewport: { width: 375, height: 812 }, fullPage: true, mobile: true },
  { name: "mobile-home-viewport", viewport: { width: 375, height: 812 }, fullPage: false, mobile: true },
]

async function scrollThrough(page) {
  // Scroll progresivamente para disparar IntersectionObservers / animaciones
  await page.evaluate(async () => {
    const distance = 400
    const delay = 80
    let scrolled = 0
    while (scrolled < document.body.scrollHeight) {
      window.scrollBy(0, distance)
      scrolled += distance
      await new Promise((r) => setTimeout(r, delay))
    }
    window.scrollTo(0, 0)
    await new Promise((r) => setTimeout(r, 400))
  })
}

const browser = await chromium.launch()
for (const s of shots) {
  const ctx = await browser.newContext({
    viewport: s.viewport,
    deviceScaleFactor: 1,
    isMobile: !!s.mobile,
    hasTouch: !!s.mobile,
    userAgent: s.mobile
      ? "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1"
      : undefined,
  })
  const page = await ctx.newPage()
  try {
    await page.goto(URL, { waitUntil: "domcontentloaded", timeout: 60000 })
    // Esperar a que las animaciones se asienten
    await page.waitForLoadState("networkidle", { timeout: 30000 }).catch(() => {})
    await scrollThrough(page)
    await page.waitForTimeout(1500)

    const path = resolve(OUT, `${s.name}.png`)
    await page.screenshot({ path, fullPage: s.fullPage, timeout: 60000 })
    console.log(`✓ ${s.name} → ${path}`)
  } catch (e) {
    console.error(`✗ ${s.name}: ${e.message}`)
  } finally {
    await ctx.close()
  }
}
await browser.close()
console.log("Done.")
