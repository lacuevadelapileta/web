"use client"

import dynamic from "next/dynamic"

// Carga diferida: evita que Framer Motion del ChatWidget compita por el
// hilo principal durante la hidratación inicial de las 9 páginas del sitio.
const ChatWidget = dynamic(
  () => import("@/components/chat/ChatWidget").then((m) => m.ChatWidget),
  { ssr: false }
)

export function ChatWidgetLazy() {
  return <ChatWidget />
}
