import { NextResponse } from "next/server"
import { fallbackAnswer } from "@/lib/chat/fallback"

export const runtime = "nodejs"

type Body = {
  message?: string
}

// Límite básico de peticiones por IP (best-effort: vive en memoria de la
// función, se reinicia si Vercel recicla la instancia — suficiente para
// frenar spam de un mismo origen sin depender de infraestructura externa).
const RATE_LIMIT = 20
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

  const message = (body.message ?? "").trim().slice(0, 500)
  if (!message) {
    return NextResponse.json({ error: "empty_message" }, { status: 400 })
  }

  // Simulamos latencia de "está pensando" para que se sienta natural.
  await new Promise((r) => setTimeout(r, 350))

  const { text, escalate, confidence } = fallbackAnswer(message)
  return NextResponse.json({
    text,
    escalate,
    confidence,
  })
}
