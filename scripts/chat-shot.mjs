import { chromium } from "playwright"
import { resolve } from "node:path"

const BASE = process.env.URL || "http://localhost:3000"
const browser = await chromium.launch()

async function run(viewport, suffix) {
  const ctx = await browser.newContext({ viewport, deviceScaleFactor: 1 })
  const page = await ctx.newPage()
  await page.goto(BASE + "/", { waitUntil: "networkidle", timeout: 60000 })
  await new Promise((r) => setTimeout(r, 1500))

  // Pantallazo con el botón flotante visible (sin abrir)
  await page.screenshot({
    path: resolve(process.cwd(), "screenshots/rutas", `${suffix}-chat-closed.png`),
    fullPage: false,
  })
  console.log("✓ chat-closed " + suffix)

  // Click en el botón flotante (esquina inferior derecha)
  await page.click('button[aria-label="Abrir chat de ayuda"]')
  await new Promise((r) => setTimeout(r, 600))

  await page.screenshot({
    path: resolve(process.cwd(), "screenshots/rutas", `${suffix}-chat-open.png`),
    fullPage: false,
  })
  console.log("✓ chat-open " + suffix)

  // Click en una sugerencia
  await page.click('button:has-text("¿Cuánto cuesta la entrada?")')
  await new Promise((r) => setTimeout(r, 1500))
  await page.screenshot({
    path: resolve(process.cwd(), "screenshots/rutas", `${suffix}-chat-answer.png`),
    fullPage: false,
  })
  console.log("✓ chat-answer " + suffix)

  // Escribir pregunta absurda → escala a WhatsApp
  await page.fill('input[placeholder="Escribe tu pregunta…"]', "puedo dormir en la cueva con caballos")
  await page.click('button[aria-label="Enviar"]')
  await new Promise((r) => setTimeout(r, 1500))
  await page.screenshot({
    path: resolve(process.cwd(), "screenshots/rutas", `${suffix}-chat-escalate.png`),
    fullPage: false,
  })
  console.log("✓ chat-escalate " + suffix)

  await ctx.close()
}

await run({ width: 1440, height: 900 }, "desktop")
await run({ width: 375, height: 812 }, "mobile")

await browser.close()
console.log("Done.")
