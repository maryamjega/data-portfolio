"use client"
import { useState } from "react"
import { AnimatedItem } from "@/components/animated-section"

const timeline = [
  {
    period: "Apr 2026 - Present",
    company: "L'Oréal",
    role: "Brandstorm",
    desc: "Analyzed customer and sales data, identified growth opportunities, and built dashboards to support data-driven decision-making across teams.",
    tag: "Analytics · Growth",
  },
  {
    period: "Apr 2025 - Present",
    company: "FedEx",
    role: "Sales and Customer Analytics Intern",
    desc: "Analyzed customer and sales data, identified growth opportunities, and built dashboards to support data-driven decision-making across teams.",
    tag: "Analytics · Growth",
  },
  {
    period: "May 2025 - Jul 2025",
    company: "McKinsey",
    role: "Forward Program",
    desc: "Developed structured problem-solving and analytical thinking skills, applying them to real-world business scenarios and case-based challenges.",
    tag: "Consulting · Problem Solving",
  },
  {
    period: "Sep 2024 - Dec 2024",
    company: "Kitopi",
    role: "Financial Planning and Analysis Intern",
    desc: "Worked with financial and operational data, supported forecasting, and delivered insights to improve performance and decision-making.",
    tag: "Finance · Strategy",
  },
   {
    period: "Sep 2024",
    company: "Seas and Trees Film Festival",
    role: "MC",
    desc: "Hosted and facilitated sessions at the Seas and Trees Film Festival, engaging audiences and supporting conversations around environmental sustainability.",
    tag: "Sustainability · Public Speaking",
  },
  {
    period: "Aug 2024 - Oct 2024",
    company: "Middlesex University Dubai",
    role: "Consultant",
    desc: "Advised on partnership and outreach initiatives, supporting strategy, stakeholder engagement, and regional expansion.",
    tag: "Operations · Partnerships",
  },
  {
    period: "Feb 2024 - Feb 2025",
    company: "Unipreneur",
    role: "Youth Ambassador | Partnerships",
    desc: "Led multi-channel campaigns to boost visibility of social entrepreneurship initiatives and drove cross-team engagement.",
    tag: "Leadership · Marketing",
  },
  {
    period: "Jan 2024 - Mar 2024",
    company: "Boutique Startup",
    role: "Data Analysis Intern",
    desc: "Led multi-channel campaigns to boost visibility of social entrepreneurship initiatives and drove cross-team engagement.",
    tag: "Leadership · Marketing",
  },
  {
    period: "Summer 2023",
    company: "Advertisement Firm Dubai",
    role: "Business Analysis Intern",
    desc: "Cleaned and structured legal datasets, created SQL queries for internal reporting and operations.",
    tag: "Data · Analytics",
  },
  {
    period: "Summer 2022",
    company: "Nigerian National Oil Company",
    role: "Data Intern",
    desc: "Led multi-channel campaigns to boost visibility of social entrepreneurship initiatives and drove cross-team engagement.",
    tag: "Leadership · Marketing",
  },
]

function TimelineRow({ item, index }: { item: typeof timeline[0]; index: number }) {
  const [hovered, setHovered] = useState(false)
  return (
    <AnimatedItem index={index} staggerMs={90}>
      <div
        className="grid gap-0 relative pl-[28px] py-[34px] transition-all duration-200 exp-row"
        style={{
          gridTemplateColumns: "180px 1fr",
          borderTop: "1px solid rgba(0,0,0,0.07)",
          cursor: "default",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Timeline dot */}
        <div
          className="absolute left-[-6px] top-[40px] w-[13px] h-[13px] rounded-full transition-all duration-200"
          style={{
            background: hovered ? "#111" : "#ccc",
            border: hovered ? "2px solid #111" : "2px solid rgba(0,0,0,0.15)",
            boxShadow: hovered ? "0 0 6px rgba(0,0,0,0.15)" : "none",
          }}
        />

        {/* Left: period + company */}
        <div className="pt-1">
          <div
            className="text-[11px] tracking-[1.5px] mb-1"
            style={{
              fontFamily: "var(--font-ibm-plex-mono,'IBM Plex Mono'),monospace",
              color: "#555",
            }}
          >
            {item.period}
          </div>
          <div
            className="text-[11px] tracking-[1px]"
            style={{
              fontFamily: "var(--font-ibm-plex-mono,'IBM Plex Mono'),monospace",
              color: "#777",
            }}
          >
            {item.company}
          </div>
        </div>

        {/* Right: role + desc + tag */}
        <div>
          <div
            className="text-[22px] font-bold mb-[10px] transition-colors duration-200"
            style={{
              fontFamily: "var(--font-syne,'Syne'),sans-serif",
              color: hovered ? "#444" : "#111",
            }}
          >
            {item.role}
          </div>
          <div className="text-sm mb-4 max-w-[520px] leading-[1.7]" style={{ color: "#555" }}>
            {item.desc}
          </div>
          <span
            className="text-[9px] px-[10px] py-[5px] tracking-[1.5px] uppercase"
            style={{
              fontFamily: "var(--font-ibm-plex-mono,'IBM Plex Mono'),monospace",
              background: "transparent",
              color: "#888",
              border: "1px solid rgba(0,0,0,0.12)",
              borderRadius: 0,
            }}
          >
            {"[ "}{item.tag}{" ]"}
          </span>
        </div>
      </div>
    </AnimatedItem>
  )
}

export function Experience() {
  return (
    <section
      id="experience"
      style={{
        padding: "clamp(60px,10vw,140px) clamp(20px,6vw,80px)",
        background: "#f7f3ee",
        borderTop: "1px solid rgba(0,0,0,0.07)",
      }}
    >
      <div className="mb-14">
        <div className="section-tag">Work Experience</div>
        <div
          className="font-black leading-none"
          style={{
            fontFamily: "var(--font-syne,'Syne'),sans-serif",
            fontSize: "clamp(38px,4.5vw,62px)",
            letterSpacing: "-2.5px",
          }}
        >
          The journey.
        </div>
      </div>

      {/* Timeline container */}
      <div
        className="relative max-w-[860px]"
        style={{ borderLeft: "1px solid rgba(0,0,0,0.12)", paddingLeft: "28px" }}
      >
        {timeline.map((item, i) => (
          <TimelineRow key={item.role} item={item} index={i} />
        ))}
      </div>
      <style>{`
        @media (max-width: 600px) {
          .exp-row {
            grid-template-columns: 1fr !important;
            gap: 6px !important;
          }
        }
      `}</style>
    </section>
  )
}
