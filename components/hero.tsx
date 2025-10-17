"use client"

import type React from "react"

import Link from "next/link"
import { GL } from "./gl"
import { Button } from "./ui/button"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { px } from "./utils"

export function Hero() {
  const [hovering, setHovering] = useState(false)

  const handleBackgroundClick = (e: React.MouseEvent) => {
    // Only trigger if clicking on the background div itself, not its children
    if (e.target === e.currentTarget) {
      setHovering(true)
      setTimeout(() => setHovering(false), 1000)
    }
  }
  // </CHANGE>

  return (
    <div className="flex flex-col h-svh justify-between cursor-pointer" onClick={handleBackgroundClick}>
      {/* </CHANGE> */}
      <GL hovering={hovering} />

      <div className="pb-16 mt-auto text-center relative">
        <Link href="https://neo.7on.ai" target="_blank" rel="noopener noreferrer">
          <CallNeoButton className="mb-6" />
        </Link>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-sentient">
          Unlock your <br />
          <i className="font-light">future</i> growth
        </h1>
        <p className="font-mono text-sm sm:text-base text-foreground/60 text-balance mt-8 max-w-[440px] mx-auto">
          Welcome to the era of having your own Jarvis
        </p>

        <Link className="contents max-sm:hidden" href="https://join.7on.ai" target="_blank" rel="noopener noreferrer">
          <Button className="mt-14" onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
            JOIN WAITLIST
          </Button>
        </Link>
        <Link className="contents sm:hidden" href="https://join.7on.ai" target="_blank" rel="noopener noreferrer">
          <Button
            size="sm"
            className="mt-14"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            JOIN WAITLIST
          </Button>
        </Link>
      </div>
    </div>
  )
}

const CallNeoButton = ({ className }: { className?: string }) => {
  const polyRoundness = 6
  const hypotenuse = polyRoundness * 2
  const hypotenuseHalf = polyRoundness / 2 - 1.5

  return (
    <div
      style={
        {
          "--poly-roundness": px(polyRoundness),
        } as React.CSSProperties
      }
      className={cn(
        "bg-[#262626]/50 transform-gpu font-medium text-foreground/50 backdrop-blur-xs font-mono text-sm inline-flex items-center justify-center px-3 h-8 border border-border [clip-path:polygon(var(--poly-roundness)_0,calc(100%_-_var(--poly-roundness))_0,100%_var(--poly-roundness),100%_calc(100%_-_var(--poly-roundness)),calc(100%_-_var(--poly-roundness))_100%,var(--poly-roundness)_100%,0_calc(100%_-_var(--poly-roundness)),0_var(--poly-roundness))] hover:bg-[#262626]/70 transition-colors cursor-pointer",
        className,
      )}
    >
      <span
        style={{ "--h": px(hypotenuse), "--hh": px(hypotenuseHalf) } as React.CSSProperties}
        className="absolute inline-block w-[var(--h)] top-[var(--hh)] left-[var(--hh)] h-[2px] -rotate-45 origin-top -translate-x-1/2 bg-border"
      />
      <span
        style={{ "--h": px(hypotenuse), "--hh": px(hypotenuseHalf) } as React.CSSProperties}
        className="absolute w-[var(--h)] top-[var(--hh)] right-[var(--hh)] h-[2px] bg-border rotate-45 translate-x-1/2"
      />
      <span
        style={{ "--h": px(hypotenuse), "--hh": px(hypotenuseHalf) } as React.CSSProperties}
        className="absolute w-[var(--h)] bottom-[var(--hh)] left-[var(--hh)] h-[2px] bg-border rotate-45 -translate-x-1/2"
      />
      <span
        style={{ "--h": px(hypotenuse), "--hh": px(hypotenuseHalf) } as React.CSSProperties}
        className="absolute w-[var(--h)] bottom-[var(--hh)] right-[var(--hh)] h-[2px] bg-border -rotate-45 translate-x-1/2"
      />
      <span className="inline-block size-2.5 rounded-full bg-[#FF6B5B] mr-2 shadow-glow shadow-[#FF6B5B]/50" />
      CALL NEO
    </div>
  )
}
