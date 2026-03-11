'use client'

import { useRef, useEffect } from 'react'

export function PolaroidStack() {
  const stageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!stageRef.current) return
    const cards = Array.from(stageRef.current.querySelectorAll<HTMLElement>('.polaroid'))
    const zOrder = [1, 2, 3]
    const handlers: Array<() => void> = []

    cards.forEach((p, i) => {
      const handler = () => {
        cards.forEach((c, j) => {
          c.style.zIndex = j === i ? '10' : String(zOrder[j])
        })
        setTimeout(() => {
          const maxZ = Math.max(...zOrder)
          zOrder[i] = maxZ + 1
          cards.forEach((c, j) => {
            c.style.zIndex = String(zOrder[j])
          })
        }, 500)
      }
      handlers.push(handler)
      p.addEventListener('click', handler)
    })

    return () => {
      cards.forEach((p, i) => p.removeEventListener('click', handlers[i]))
    }
  }, [])

  return (
    <div ref={stageRef}>
      <style>{`
        .polaroid-stage {
          position: relative;
          height: 420px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 56px 0;
        }
        .polaroid {
          position: absolute;
          width: 220px;
          background: #fff;
          padding: 12px 12px 42px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.14), 0 2px 8px rgba(0,0,0,0.08);
          cursor: pointer;
          user-select: none;
          transition: transform 0.5s cubic-bezier(0.34,1.2,0.64,1), box-shadow 0.3s ease;
        }
        .p-back { transform: rotate(-8deg) translate(-18px, 14px); z-index: 1; }
        .p-mid  { transform: rotate(4deg)  translate(22px, -6px);  z-index: 2; }
        .p-top  { transform: rotate(-2deg) translate(-4px, 4px);   z-index: 3; }
        .p-top::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, #e0005e, #ff2d78);
        }
        .p-img-area {
          width: 100%;
          aspect-ratio: 4/5;
          overflow: hidden;
          background: #f0ebe3;
        }
        .p-img-area img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          filter: contrast(1.04) saturate(0.88);
        }
        .p-blank {
          background: linear-gradient(145deg, #c8b8a8 0%, #a89880 40%, #c0aa90 70%, #d4bca4 100%);
        }
        .p-cap {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 9px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #999;
          text-align: center;
          margin-top: 10px;
        }
        .p-back:hover {
          transform: rotate(-8deg) translate(-18px, 14px) translateY(-12px) scale(1.03);
          box-shadow: 0 20px 56px rgba(0,0,0,0.18), 0 4px 12px rgba(0,0,0,0.1);
          z-index: 10;
        }
        .p-mid:hover {
          transform: rotate(4deg) translate(22px, -6px) translateY(-12px) scale(1.03);
          box-shadow: 0 20px 56px rgba(0,0,0,0.18), 0 4px 12px rgba(0,0,0,0.1);
          z-index: 10;
        }
        .p-top:hover {
          transform: rotate(-2deg) translate(-4px, 4px) translateY(-12px) scale(1.03);
          box-shadow: 0 20px 56px rgba(0,0,0,0.18), 0 4px 12px rgba(0,0,0,0.1);
          z-index: 10;
        }
        .polaroid-hint {
          text-align: center;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 10px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #666;
          margin-bottom: 56px;
        }
      `}</style>

      <div className="polaroid-stage">
        {/* Back card decorative depth */}
        <div className="polaroid p-back">
          <div className="p-img-area p-blank"></div>
          <div className="p-cap">More to come</div>
        </div>

        {/* Hackathon photo middle */}
        <div className="polaroid p-mid">
          <div className="p-img-area">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/hackathon.jpg"
              alt="Hackathon with my team"
              onError={(e) => e.currentTarget.parentElement?.classList.add('p-blank')}
            />
          </div>
          <div className="p-cap">Hackathon</div>
        </div>

        {/* Running photo top (shown first) */}
        <div className="polaroid p-top">
          <div className="p-img-area">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/marathon.jpg"
              alt="Running a half marathon"
              onError={(e) => e.currentTarget.parentElement?.classList.add('p-blank')}
            />
          </div>
          <div className="p-cap">Half Marathon · Race 7</div>
        </div>
      </div>

      <div className="polaroid-hint">Hover to lift · Click to swap</div>
    </div>
  )
}
