"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send, Sparkles, Phone } from "lucide-react"
import { contacto } from "@/content/cueva"
import { cn } from "@/lib/utils"

type Msg = {
  id: string
  role: "user" | "assistant"
  text: string
  escalate?: boolean
  ts: number
}

const SUGERENCIAS = [
  "¿Cuánto cuesta la entrada?",
  "¿Es accesible?",
  "¿Hay parking?",
  "¿Se puede ir con niños?",
] as const

const BIENVENIDA: Msg = {
  id: "welcome",
  role: "assistant",
  text:
    "¡Hola! Soy Pilar, la asistente virtual de la Cueva de la Pileta. Pregúntame por horarios, precios, accesibilidad o cómo llegar. Si no sé algo, te paso con una persona.",
  ts: 0,
}

function wa(text: string): string {
  const phone = contacto.telefonoTel.replace(/[^0-9]/g, "")
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`
}

export function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [unread, setUnread] = useState(true) // pulse hasta abrir 1ª vez
  const [input, setInput] = useState("")
  const [enviando, setEnviando] = useState(false)
  const [messages, setMessages] = useState<Msg[]>([BIENVENIDA])
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Auto-scroll al fondo en cada mensaje
  useEffect(() => {
    const el = scrollRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [messages, enviando])

  // Focus al abrir
  useEffect(() => {
    if (open) {
      setUnread(false)
      const t = setTimeout(() => inputRef.current?.focus(), 250)
      return () => clearTimeout(t)
    }
  }, [open])

  async function enviar(text: string) {
    const t = text.trim()
    if (!t || enviando) return
    const userMsg: Msg = {
      id: crypto.randomUUID(),
      role: "user",
      text: t,
      ts: Date.now(),
    }
    setMessages((m) => [...m, userMsg])
    setInput("")
    setEnviando(true)
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: t }),
      })
      const data = await res.json()
      const reply: Msg = {
        id: crypto.randomUUID(),
        role: "assistant",
        text: data.text || "Disculpa, ha habido un error. ¿Quieres intentarlo otra vez?",
        escalate: !!data.escalate,
        ts: Date.now(),
      }
      setMessages((m) => [...m, reply])
    } catch {
      setMessages((m) => [
        ...m,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          text: "No he podido conectarme. ¿Probamos por WhatsApp?",
          escalate: true,
          ts: Date.now(),
        },
      ])
    } finally {
      setEnviando(false)
    }
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    enviar(input)
  }

  // Última conversación como contexto para el WhatsApp pre-rellenado
  function whatsappLink(): string {
    const lastUser = [...messages].reverse().find((m) => m.role === "user")
    const txt = lastUser
      ? `Hola, quiero más info. Mi duda: ${lastUser.text}`
      : "Hola, quiero más info sobre la visita a la Cueva de la Pileta."
    return wa(txt)
  }

  return (
    <>
      {/* Botón flotante */}
      <button
        type="button"
        aria-label={open ? "Cerrar chat" : "Abrir chat de ayuda"}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "fixed z-[60] bottom-5 right-5 md:bottom-6 md:right-6",
          "size-14 md:size-16 rounded-full shadow-[0_10px_40px_rgba(26,95,150,0.45)]",
          "flex items-center justify-center text-white",
          "bg-gradient-to-br from-brand-blue to-brand-blue-dark hover:scale-105 transition-transform"
        )}
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="x"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <X className="size-6" />
            </motion.span>
          ) : (
            <motion.span
              key="m"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <MessageCircle className="size-6 md:size-7" fill="currentColor" strokeWidth={0} />
            </motion.span>
          )}
        </AnimatePresence>
        {/* Punto pulse cuando no se ha abierto */}
        {!open && unread && (
          <span aria-hidden className="absolute top-1 right-1 flex size-3.5">
            <span className="animate-ping absolute inline-flex size-full rounded-full bg-brand-sun opacity-75" />
            <span className="relative inline-flex size-3.5 rounded-full bg-brand-sun border-2 border-white" />
          </span>
        )}
      </button>

      {/* Panel del chat */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.21, 0.45, 0.27, 0.9] }}
            className={cn(
              "fixed z-[60] right-3 left-3 bottom-24",
              "md:right-6 md:left-auto md:bottom-28 md:w-[400px]",
              "max-h-[min(640px,calc(100vh-7rem))]",
              "flex flex-col rounded-2xl bg-white border border-brand-blue/15",
              "shadow-[0_24px_80px_-20px_rgba(0,0,0,0.4)] overflow-hidden"
            )}
            role="dialog"
            aria-label="Chat con Pilar, asistente de la Cueva de la Pileta"
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3.5 bg-gradient-to-br from-brand-blue to-brand-blue-dark text-white">
              <span className="relative size-10 rounded-full bg-white/20 flex items-center justify-center">
                <Sparkles className="size-5 text-brand-sun" />
                <span className="absolute bottom-0 right-0 size-2.5 rounded-full bg-brand-green border-2 border-white" />
              </span>
              <div className="flex-1 min-w-0">
                <p className="font-display text-base leading-tight">Pilar</p>
                <p className="text-[0.7rem] text-white/80">
                  Asistente · Responde al instante
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Cerrar"
                className="size-8 rounded-full hover:bg-white/15 flex items-center justify-center transition-colors"
              >
                <X className="size-4" />
              </button>
            </div>

            {/* Mensajes */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-brand-off"
            >
              {messages.map((m) => (
                <Bubble key={m.id} msg={m} whatsappLink={whatsappLink()} />
              ))}
              {enviando && (
                <div className="flex items-end gap-2">
                  <div className="rounded-2xl bg-white border border-brand-blue/15 px-4 py-3 shadow-brand-sm">
                    <div className="flex gap-1">
                      <Dot delay={0} />
                      <Dot delay={0.15} />
                      <Dot delay={0.3} />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sugerencias (solo si todavía no hay mensaje del usuario) */}
            {messages.every((m) => m.role !== "user") && (
              <div className="px-4 pt-3 pb-1 border-t border-brand-blue/10 bg-white">
                <p className="text-[0.7rem] font-semibold uppercase tracking-widest text-brand-text-muted mb-2">
                  Sugerencias
                </p>
                <div className="flex flex-wrap gap-2">
                  {SUGERENCIAS.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => enviar(s)}
                      className="text-xs rounded-full border border-brand-blue/25 bg-brand-blue-light/40 text-brand-blue hover:bg-brand-blue hover:text-white px-3 py-1.5 transition-colors"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <form
              onSubmit={onSubmit}
              className="flex items-center gap-2 px-3 py-3 border-t border-brand-blue/10 bg-white"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribe tu pregunta…"
                maxLength={500}
                disabled={enviando}
                className="flex-1 h-10 px-3 rounded-lg border-[1.5px] border-brand-blue/20 focus:outline-none focus:border-brand-blue text-sm"
              />
              <button
                type="submit"
                disabled={!input.trim() || enviando}
                aria-label="Enviar"
                className="size-10 rounded-lg bg-brand-blue hover:bg-brand-blue-dark text-white disabled:opacity-40 flex items-center justify-center transition-colors"
              >
                <Send className="size-4" />
              </button>
            </form>

            <p className="text-[0.65rem] text-brand-text-muted text-center px-4 pb-2 bg-white">
              ¿Prefieres una persona?{" "}
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand-green hover:underline"
              >
                Hablar por WhatsApp
              </a>
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function Bubble({ msg, whatsappLink }: { msg: Msg; whatsappLink: string }) {
  const isUser = msg.role === "user"
  return (
    <div className={cn("flex", isUser ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed shadow-brand-sm",
          isUser
            ? "bg-brand-blue text-white rounded-br-md"
            : "bg-white border border-brand-blue/15 text-brand-text rounded-bl-md"
        )}
      >
        <p className="whitespace-pre-wrap">{msg.text}</p>
        {!isUser && msg.escalate && (
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 rounded-lg bg-brand-green hover:bg-emerald-600 text-white px-3 py-1.5 text-xs font-semibold transition-colors"
          >
            <Phone className="size-3.5" />
            Hablar por WhatsApp
          </a>
        )}
      </div>
    </div>
  )
}

function Dot({ delay }: { delay: number }) {
  return (
    <motion.span
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 0.9, repeat: Infinity, delay, ease: "easeInOut" }}
      className="size-1.5 rounded-full bg-brand-blue/60"
    />
  )
}
