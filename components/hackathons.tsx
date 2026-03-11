"use client"

import Link from "next/link"
import { AnimatedItem } from "@/components/animated-section"

const cards = [
  {
    place: "2nd",
    prize: "Runner-Up",
    event: "Fashion × AI Hackathon",
    title: "Retail Therapist",
    subtitle: "Behaviour-Aware Wardrobe Intelligence",
    summary:
      "A behaviour-aware shopping companion that scans your style preferences, mood, and occasion needs to generate ranked outfit recommendations. Built with live product data via API and a rule-based scoring engine that detects wardrobe gaps and outfit compatibility. Includes an Outfit Calendar module to shift the shopping mindset from reactive to intentional.",
    tags: ["API Integration", "Rule-Based Scoring", "UX"],
  },
  {
    place: "3rd",
    prize: "£2k Hugging Face Credits",
    event: "Women in AI Hackathon",
    title: "Soul Echo",
    subtitle: "AI-Powered Emotional Reflection App",
    summary:
      "An AI-powered app that lets you record voice notes during emotional moments, then have a conversation with your past self using your own cloned voice. Built with ElevenLabs for voice cloning and natural speech generation, creating a deeply personal reflection experience. Won 3rd place and £2k in Hugging Face credits out of a highly competitive field.",
    tags: ["ElevenLabs", "Voice Cloning", "Emotional AI"],
  },
]

export function Hackathons() {
  return (
    <section
      id="hackathons"
      style={{
        padding: "clamp(60px,10vw,140px) clamp(20px,6vw,80px)",
        background: "#f7f3ee",
        borderTop: "1px solid rgba(0,0,0,0.07)",
      }}
    >
      {/* Header */}
      <AnimatedItem index={0}>
        <div className="flex justify-between items-end mb-16 max-md:flex-col max-md:items-start max-md:gap-4">
          <div>
            <div className="section-tag">Hackathon Wins</div>
            <div
              className="font-black leading-none"
              style={{
                fontFamily: "var(--font-syne,'Syne'),sans-serif",
                fontSize: "clamp(38px,4.5vw,62px)",
                letterSpacing: "-2.5px",
                color: "#111",
              }}
            >
              The wins.
            </div>
          </div>
          <Link
            href="/hackathons"
            className="inline-flex items-center gap-[5px] text-[10px] tracking-[1.5px] uppercase transition-colors duration-200"
            style={{
              fontFamily: "var(--font-ibm-plex-mono,'IBM Plex Mono'),monospace",
              color: "#999",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#111010")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#999")}
          >
            Full details
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </Link>
        </div>
      </AnimatedItem>

      {/* Cards */}
      <div className="grid gap-6 max-lg:grid-cols-1" style={{ gridTemplateColumns: "1fr 1fr" }}>
        {cards.map((card, i) => (
          <AnimatedItem key={card.title} index={i + 1} staggerMs={80}>
            <div
              className="flex flex-col h-full"
              style={{
                background: "#fff",
                border: "1px solid rgba(0,0,0,0.07)",
                padding: "36px",
              }}
            >
              {/* Top: place + event */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "baseline",
                    gap: 8,
                    padding: "7px 14px",
                    border: "1px solid rgba(0,0,0,0.12)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-syne,'Syne'),sans-serif",
                      fontWeight: 800,
                      fontSize: 26,
                      color: "#111",
                      lineHeight: 1,
                    }}
                  >
                    {card.place}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-ibm-plex-mono,'IBM Plex Mono'),monospace",
                      fontSize: 9,
                      color: "#888",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                    }}
                  >
                    {card.prize}
                  </span>
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-ibm-plex-mono,'IBM Plex Mono'),monospace",
                    fontSize: 9,
                    color: "#999",
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    textAlign: "right",
                    lineHeight: 1.5,
                    marginTop: 4,
                  }}
                >
                  {card.event}
                </div>
              </div>

              {/* Title */}
              <div
                className="font-black leading-tight mb-1"
                style={{
                  fontFamily: "var(--font-syne,'Syne'),sans-serif",
                  fontSize: "clamp(20px,2vw,26px)",
                  letterSpacing: "-0.8px",
                  color: "#111",
                }}
              >
                {card.title}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-ibm-plex-mono,'IBM Plex Mono'),monospace",
                  fontSize: 9,
                  color: "#999",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  marginBottom: 20,
                }}
              >
                {card.subtitle}
              </div>

              {/* Summary */}
              <p
                style={{
                  fontSize: 13,
                  color: "#555",
                  lineHeight: 1.85,
                  flex: 1,
                  marginBottom: 24,
                }}
              >
                {card.summary}
              </p>

              {/* Footer */}
              <div
                className="flex items-center justify-between gap-3 flex-wrap pt-5"
                style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}
              >
                <div className="flex gap-[5px] flex-wrap">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: "var(--font-ibm-plex-mono,'IBM Plex Mono'),monospace",
                        fontSize: 8,
                        color: "#666",
                        border: "1px solid rgba(0,0,0,0.09)",
                        padding: "3px 8px",
                        letterSpacing: "0.5px",
                        textTransform: "uppercase",
                        background: "rgba(0,0,0,0.02)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href="/hackathons"
                  className="inline-flex items-center gap-1 text-[12px] font-bold transition-colors duration-200"
                  style={{
                    fontFamily: "var(--font-syne,'Syne'),sans-serif",
                    color: "#888",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#111010")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#888")}
                >
                  Read more
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </Link>
              </div>
            </div>
          </AnimatedItem>
        ))}
      </div>
    </section>
  )
}
