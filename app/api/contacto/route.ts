import { NextResponse } from "next/server"
import { Resend } from "resend"
import { contacto } from "@/content/cueva"

export const runtime = "nodejs"

type Body = {
  nombre?: string
  email?: string
  mensaje?: string
}

// Mismo límite que /api/chat: best-effort en memoria, suficiente para
// frenar spam sin depender de infraestructura externa.
const RATE_LIMIT = 5
const RATE_WINDOW_MS = 60_000
const hits = new Map<string, { count: number; resetAt: number }>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = hits.get(ip)
  if (!entry || now > entry.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS })
    return false
  }
  entry.count++
  return entry.count > RATE_LIMIT
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown"
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "rate_limited" }, { status: 429 })
  }

  let body: Body
  try {
    body = (await req.json()) as Body
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 })
  }

  const nombre = (body.nombre ?? "").trim().slice(0, 100)
  const email = (body.email ?? "").trim().slice(0, 200)
  const mensaje = (body.mensaje ?? "").trim().slice(0, 3000)

  if (nombre.length < 2 || !EMAIL_RE.test(email) || mensaje.length < 10) {
    return NextResponse.json({ error: "invalid_fields" }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error("RESEND_API_KEY no configurada — no se puede enviar el email de contacto")
    return NextResponse.json({ error: "email_not_configured" }, { status: 500 })
  }

  const resend = new Resend(apiKey)

  try {
    const { error } = await resend.emails.send({
      from: "Web Cueva de la Pileta <web@cuevadelapileta.com>",
      to: contacto.email,
      replyTo: email,
      subject: `Nuevo mensaje de contacto — ${nombre}`,
      html: `
        <p><strong>Nombre:</strong> ${escapeHtml(nombre)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${escapeHtml(mensaje).replace(/\n/g, "<br>")}</p>
      `,
    })

    if (error) {
      console.error("Error enviando email de contacto:", error)
      return NextResponse.json({ error: "send_failed" }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("Excepción enviando email de contacto:", err)
    return NextResponse.json({ error: "send_failed" }, { status: 502 })
  }
}
