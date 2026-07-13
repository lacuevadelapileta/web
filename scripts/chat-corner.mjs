import { chromium } from "playwright"
import { resolve } from "node:path"

const browser = await chromium.launch()
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 })
const page = await ctx.newPage()
await page.goto("http://localhost:3000/", { waitUntil: "networkidle", timeout: 60000 })
await new Promise((r) => setTimeout(r, 2000))

// Captura del corner inferior derecho 350x250
await page.screenshot({
  path: resolve(process.cwd(), "screenshots/rutas", "chat-button-corner.png"),
  clip: { x: 1090, y: 650, width: 350, height: 250 },
})
console.log("✓ corner")

await ctx.close()
await browser.close()
