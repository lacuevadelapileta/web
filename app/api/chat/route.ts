import { NextResponse } from "next/server"
import { fallbackAnswer } from "@/lib/chat/fallback"

export const runtime = "nodejs"

type Body = {
  message?: string
}

export async function POST(req: Request) {
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
