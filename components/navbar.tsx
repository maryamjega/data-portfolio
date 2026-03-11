"use client"

import { useState, useEffect, useCallback } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"

const navLinks = [
  { label: "About",      href: "#about",      id: "about",       external: false },
  { label: "Projects",   href: "#projects",   id: "projects",    external: false },
  { label: "Skills",     href: "#skills",     id: "skills",      external: false },
  { label: "Wins",       href: "/hackathons", id: "wins",        external: true  },
  { label: "Experience", href: "#experience", id: "experience",  external: false },
  { label: "Contact",    href: "#contact",    id: "contact",     external: false },
]

export function Navbar() {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const [stuck, setStuck] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setStuck(window.scrollY > 80)
      const ids = ["home", ...navLinks.map(l => l.id)]
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i])
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(ids[i])
          break
        }
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  const scrollTo = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (!isHome) return
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }, [isHome])

  const linkColor = (id: string) => {
    if (isHome && activeSection === id) return "#111010"
    return stuck ? "rgba(240,235,227,0.45)" : "rgba(17,16,16,0.5)"
  }
  const linkHover = stuck ? "#f0ebe3" : "#111010"

  return (
    <>
      {/* Floating hamburger mobile only */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        className="lg:hidden"
        style={{
          position: "fixed",
          top: 20, right: 20,
          zIndex: 802,
          background: isOpen ? "rgba(20,20,20,0.95)" : "rgba(247,243,238,0.92)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: isOpen ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(17,16,16,0.12)",
          borderRadius: 10,
          cursor: "pointer",
          padding: "10px 12px",
          display: "flex",
          flexDirection: "column",
          gap: 5,
          transition: "background 0.25s, border-color 0.25s",
        }}
      >
        {[0, 1, 2].map(i => (
          <span
            key={i}
            style={{
              display: "block",
              width: 22, height: 2,
              background: isOpen ? "#f0ebe3" : "#111010",
              borderRadius: 2,
              transition: "transform 0.2s, opacity 0.2s, background 0.25s",
              transform: isOpen && i === 0 ? "rotate(45deg) translate(5px, 5px)" : isOpen && i === 2 ? "rotate(-45deg) translate(5px, -5px)" : "none",
              opacity: isOpen && i === 1 ? 0 : 1,
            }}
          />
        ))}
      </button>

      <header
        className="max-lg:hidden"
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 800,
          background: stuck ? "rgba(12,12,12,0.97)" : "transparent",
          backdropFilter: stuck ? "blur(24px)" : "none",
          WebkitBackdropFilter: stuck ? "blur(24px)" : "none",
          borderBottom: stuck ? "1px solid rgba(255,255,255,0.07)" : "none",
          transition: "background 0.3s, border-color 0.3s",
        }}
      >
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 88px",
            height: 64,
          }}
          className="max-lg:px-6"
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-syne,'Syne'),sans-serif",
              fontWeight: 800,
              fontSize: 17,
              textDecoration: "none",
              color: stuck ? "#f0ebe3" : "#111010",
              letterSpacing: "-0.5px",
              transition: "color 0.3s",
            }}
          >
            A<span style={{ color: "#111010" }}>.</span>IC
          </Link>

          {/* Desktop links */}
          <ul
            style={{ display: "flex", alignItems: "center", gap: 2, listStyle: "none", margin: 0, padding: 0 }}
            className="max-lg:hidden"
          >
            {navLinks.map(link => {
              const active = isHome && activeSection === link.id
              const sharedStyle = {
                display: "block",
                padding: "6px 14px",
                fontFamily: "var(--font-ibm-plex-mono,'IBM Plex Mono'),monospace",
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "1.2px",
                textTransform: "uppercase" as const,
                textDecoration: "none",
                color: linkColor(link.id),
                transition: "color 0.2s",
              }
              return (
                <li key={link.href}>
                  {link.external ? (
                    <Link
                      href={link.href}
                      style={sharedStyle}
                      onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = linkHover }}
                      onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = linkColor(link.id) }}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={isHome ? link.href : `/${link.href}`}
                      onClick={e => scrollTo(e, link.id)}
                      style={sharedStyle}
                      onMouseEnter={e => { if (!active) (e.currentTarget as HTMLAnchorElement).style.color = linkHover }}
                      onMouseLeave={e => { if (!active) (e.currentTarget as HTMLAnchorElement).style.color = linkColor(link.id) }}
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              )
            })}
          </ul>

          {/* CV button */}
          <div className="max-lg:hidden">
            <a
              href="/Resume Alae Ibnou Cheikh.pdf"
              download
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "8px 18px",
                borderRadius: 8,
                fontFamily: "var(--font-ibm-plex-mono,'IBM Plex Mono'),monospace",
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "1px",
                textDecoration: "none",
                background: "#111010",
                color: "#fff",
                transition: "background 0.2s, transform 0.15s",
                textTransform: "uppercase",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.03)" }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "" }}
            >
              Download CV
            </a>
          </div>


        </nav>
      </header>

      {/* Mobile sidebar */}
      <div
        className="lg:hidden"
        style={{ position: "fixed", inset: 0, zIndex: 801, pointerEvents: isOpen ? "auto" : "none" }}
      >
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.55)",
            opacity: isOpen ? 1 : 0,
            transition: "opacity 0.25s",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0, left: 0, bottom: 0,
            width: 280,
            background: "#0c0c0c",
            borderRight: "1px solid rgba(255,255,255,0.07)",
            transform: isOpen ? "translateX(0)" : "translateX(-100%)",
            transition: "transform 0.3s cubic-bezier(0.16,1,0.3,1)",
            padding: "72px 32px 40px",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {/* Sidebar logo */}
          <div style={{ marginBottom: 24, paddingBottom: 20, borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              style={{
                fontFamily: "var(--font-syne,'Syne'),sans-serif",
                fontWeight: 800,
                fontSize: 20,
                textDecoration: "none",
                color: "#f0ebe3",
                letterSpacing: "-0.5px",
              }}
            >
              A<span style={{ opacity: 0.4 }}>.</span>IC
            </Link>
          </div>

          {navLinks.map((link, i) => {
            const mobileSharedStyle = {
              display: "flex",
              alignItems: "center",
              gap: 16,
              padding: "12px 0",
              borderBottom: "1px solid rgba(255,255,255,0.05)",
              textDecoration: "none",
              color: activeSection === link.id ? "#ffffff" : "rgba(240,235,227,0.65)",
              fontFamily: "var(--font-syne,'Syne'),sans-serif",
              fontWeight: 700,
              fontSize: 18,
              transition: "color 0.2s",
            }
            const num = <span style={{ fontFamily: "var(--font-ibm-plex-mono,'IBM Plex Mono'),monospace", fontSize: 10, color: "#333" }}>0{i}</span>
            return link.external ? (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                style={mobileSharedStyle}
              >
                {num}{link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={isHome ? link.href : `/${link.href}`}
                onClick={e => scrollTo(e, link.id)}
                style={mobileSharedStyle}
              >
                {num}{link.label}
              </a>
            )
          })}

          {/* CV button in sidebar */}
          <div style={{ marginTop: "auto", paddingTop: 32 }}>
            <a
              href="/Resume Alae Ibnou Cheikh.pdf"
              download
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "12px 24px",
                borderRadius: 8,
                fontFamily: "var(--font-ibm-plex-mono,'IBM Plex Mono'),monospace",
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "1px",
                textDecoration: "none",
                background: "#f0ebe3",
                color: "#111010",
                textTransform: "uppercase",
              }}
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
