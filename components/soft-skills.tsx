"use client"
import { useState } from "react"
import { AnimatedItem } from "@/components/animated-section"

const cards = [
  {
    title: "Creative Problem Solving",
    desc: "Designing and building thoughtful solutions by combining data, intuition, and experimentation.",
  },
  {
    title: "Communication",
    desc: "Framing data and technical insights in a way that drives clear business decisions.",
  },
  {
    title: "Collaboration",
    desc: "Cross-functional teamwork across engineering, design, business, and research.",
  },
  {
    title: "Analytical Thinking",
    desc: "Breaking down complex problems into structured approaches and actionable insights.",
  },
  {
    title: "Adaptability",
    desc: "Quickly learning and applying new tools, concepts, and technologies in evolving environments.",
  },
  {
    title: "Cross-Cultural Communication",
    desc: "Communicating effectively across different cultures and backgrounds, supported by fluency in multiple languages.",
  },
]

function SoftCard({ card, index }: { card: typeof cards[0]; index: number }) {
  const [hovered, setHovered] = useState(false)
  return (
    <AnimatedItem index={index} staggerMs={80}>
      <div
        className="rounded-[14px] px-6 py-7 h-full transition-all duration-[250ms] cursor-default"
        style={{
          background: "#ffffff",
          border: "1px solid rgba(0,0,0,0.07)",
          borderTop: hovered ? "1px solid rgba(0,0,0,0.25)" : "1px solid rgba(0,0,0,0.07)",
          transform: hovered ? "translateY(-5px)" : "",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className="text-[17px] font-bold mb-2"
          style={{ fontFamily: "var(--font-syne,'Syne'),sans-serif", color: "#111010" }}
        >
          {card.title}
        </div>
        <div
          className="text-[13px] leading-[1.6]"
          style={{ color: "#525252" }}
        >
          {card.desc}
        </div>
      </div>
    </AnimatedItem>
  )
}

export function SoftSkills() {
  return (
    <section
      id="softskills"
      style={{
        padding: "clamp(60px,10vw,140px) clamp(20px,6vw,80px)",
        background: "#f0ebe3",
        borderTop: "1px solid rgba(0,0,0,0.07)",
      }}
    >
      <div className="mb-14">
        <div className="section-tag">Soft Skills</div>
        <div
          className="font-black leading-none"
          style={{
            fontFamily: "var(--font-syne,'Syne'),sans-serif",
            fontSize: "clamp(38px,4.5vw,62px)",
            letterSpacing: "-2.5px",
          }}
        >
          Beyond the code.
        </div>
      </div>

      <div className="grid gap-[14px] max-lg:grid-cols-2 max-md:grid-cols-1" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
        {cards.map((card, i) => (
          <SoftCard key={card.title} card={card} index={i} />
        ))}
      </div>
    </section>
  )
}
