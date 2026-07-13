"use client"

import { motion, type MotionProps } from "framer-motion"
import { type ReactNode } from "react"

type Props = MotionProps & {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
}

export function RevealOnScroll({
  children,
  delay = 0,
  y = 24,
  className,
  ...rest
}: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.21, 0.45, 0.27, 0.9] }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
