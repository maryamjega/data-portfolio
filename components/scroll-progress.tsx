"use client"

import { useEffect, useRef } from "react"

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      const bar = barRef.current
      if (!bar) return
      const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100
      bar.style.width = Math.min(pct, 100) + "%"
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return <div ref={barRef} className="progress-bar" style={{ width: "0%" }} />
}
