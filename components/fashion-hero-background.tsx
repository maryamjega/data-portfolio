"use client"

// Grayscale fashion background component - Zara-style product grid
export function FashionHeroBackground() {
  return (
    <>
      {/* Background animated layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid scrolling container */}
        <div className="absolute inset-0 opacity-40 blur-[1px]">
          {/* Grid of product squares - continuous scroll */}
          <div className="absolute inset-0 h-[200%] animate-scroll-slow">
            <div className="grid grid-cols-4 gap-3 p-4 h-full">
              {/* Generate 40 product card placeholders */}
              {Array.from({ length: 40 }).map((_, i) => {
                // Vary the heights and colors for visual interest
                const heights = [
                  'h-24', 'h-28', 'h-32', 'h-24', 
                  'h-28', 'h-24', 'h-32', 'h-28',
                  'h-24', 'h-30', 'h-28', 'h-24'
                ]
                const colors = [
                  'from-white/40 to-slate/30',
                  'from-slate/35 to-slate/20',
                  'from-white/35 to-slate/25',
                  'from-slate/30 to-white/20',
                  'from-white/38 to-slate/28',
                  'from-slate/32 to-slate/18'
                ]
                const height = heights[i % heights.length]
                const color = colors[i % colors.length]
                
                return (
                  <div 
                    key={i}
                    className={`${height} bg-gradient-to-br ${color} rounded-sm flex items-center justify-center text-white/30 text-xs font-light`}
                  >
                    {/* Minimal product placeholder */}
                    <div className="text-center">
                      <div className="text-[10px] opacity-50">PRODUCT</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Gradient fade overlays - top and bottom */}
        <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background via-background/70 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background via-background/70 to-transparent pointer-events-none" />

        {/* Side fades */}
        <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>

      {/* CSS animations */}
      <style jsx>{`
        @media (prefers-reduced-motion: no-preference) {
          @keyframes scroll-slow {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(-50%);
            }
          }

          @keyframes scroll-medium {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(-50%);
            }
          }

          @keyframes scroll-medium-fast {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(-50%);
            }
          }

          @keyframes scroll-fast {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(-50%);
            }
          }

          .animate-scroll-slow {
            animation: scroll-slow 50s linear infinite;
          }

          .animate-scroll-medium {
            animation: scroll-medium 40s linear infinite;
          }

          .animate-scroll-medium-fast {
            animation: scroll-medium-fast 35s linear infinite;
          }

          .animate-scroll-fast {
            animation: scroll-fast 30s linear infinite;
          }
        }
      `}</style>
    </>
  )
}
