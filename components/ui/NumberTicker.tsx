"use client"

import { useEffect, useRef, useState } from "react"
import {
  useMotionValue,
  useSpring,
  type SpringOptions,
} from "framer-motion"

type Props = {
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
  formatThousands?: boolean
  delayMs?: number
  className?: string
}

export function NumberTicker({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  formatThousands = false,
  delayMs = 150,
  className,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const mv = useMotionValue(0)
  const config: SpringOptions = { damping: 32, stiffness: 90, mass: 1 }
  const spring = useSpring(mv, config)
  const [display, setDisplay] = useState(() =>
    formatThousands
      ? (0).toLocaleString("es-ES", { minimumFractionDigits: decimals })
      : (0).toFixed(decimals)
  )

  // Kick off animation shortly after mount — robust to SSR and screenshot tools
  useEffect(() => {
    const t = setTimeout(() => mv.set(value), delayMs)
    return () => clearTimeout(t)
  }, [mv, value, delayMs])

  useEffect(() => {
    const unsub = spring.on("change", (latest) => {
      const fixed = Number(latest).toFixed(decimals)
      if (formatThousands) {
        setDisplay(
          parseFloat(fixed).toLocaleString("es-ES", {
            maximumFractionDigits: decimals,
            minimumFractionDigits: decimals,
          })
        )
      } else {
        setDisplay(fixed)
      }
    })
    return () => unsub()
  }, [spring, decimals, formatThousands])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  )
}
