"use client"

import { type ReactNode } from "react"
import { cn } from "@/lib/utils"

type Props = {
  children: ReactNode
  speed?: number // segundos por ciclo
  className?: string
  pauseOnHover?: boolean
  reverse?: boolean
}

export function Marquee({
  children,
  speed = 40,
  className,
  pauseOnHover = true,
  reverse = false,
}: Props) {
  return (
    <div
      className={cn(
        "relative flex w-full overflow-hidden",
        pauseOnHover && "group",
        className
      )}
      style={{ "--duration": `${speed}s` } as React.CSSProperties}
    >
      <div
        className={cn(
          "flex shrink-0 items-center gap-8 px-4 animate-marquee",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
          reverse && "[animation-direction:reverse]"
        )}
      >
        {children}
      </div>
      <div
        aria-hidden
        className={cn(
          "flex shrink-0 items-center gap-8 px-4 animate-marquee",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
          reverse && "[animation-direction:reverse]"
        )}
      >
        {children}
      </div>
    </div>
  )
}
