"use client"

import { useEffect, useRef } from "react"

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mx = 0, my = 0, rx = 0, ry = 0

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      dot.style.left = mx - 3.5 + "px"
      dot.style.top = my - 3.5 + "px"
    }

    document.addEventListener("mousemove", onMove)

    let rafId: number
    const loop = () => {
      rx += (mx - rx - 15) * 0.12
      ry += (my - ry - 15) * 0.12
      ring.style.left = rx + "px"
      ring.style.top = ry + "px"
      rafId = requestAnimationFrame(loop)
    }
    loop()

    return () => {
      document.removeEventListener("mousemove", onMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="c-dot" />
      <div ref={ringRef} className="c-ring" />
    </>
  )
}
