import { motion, useReducedMotion } from 'framer-motion';

export function DateCardSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="date-section"
      className="relative w-full flex flex-col items-center justify-center px-4 py-16 sm:py-24 bg-[#F8F1E7] md:bg-[#FFFCF7] overflow-hidden"
      aria-label="Reception date invitation card"
    >
      {/* Background ambient lighting — champagne & subtle maroon glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full opacity-40"
          style={{
            background:
              'radial-gradient(circle, rgba(201,169,110,0.18) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-20"
          style={{
            background:
              'radial-gradient(circle, rgba(74,18,26,0.1) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Main invitation card */}
      <motion.div
        className="invitation-card relative z-10 w-full max-w-[460px] p-6 sm:p-9 rounded-lg flex flex-col items-center text-center shadow-xl"
        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: prefersReducedMotion ? 0.01 : 0.8,
          ease: [0.22, 1, 0.36, 1] as const,
        }}
      >
        {/* Card corner ornaments */}
        <CardCornerOrnament position="top-left" />
        <CardCornerOrnament position="top-right" />
        <CardCornerOrnament position="bottom-left" />
        <CardCornerOrnament position="bottom-right" />

        {/* Auspicious invocation */}
        <div className="mb-3 text-maroon font-serif text-xs sm:text-sm tracking-[0.25em] uppercase font-medium">
          શ્રી ગણેશાય નમઃ
        </div>

        {/* Family invitation line */}
        <p className="text-stone-dark/80 text-xs sm:text-sm tracking-[0.18em] uppercase font-sans mb-3">
          Together with their families
        </p>

        {/* Couple Names */}
        <h2 className="font-serif text-3xl sm:text-4xl text-maroon-dark font-normal leading-tight">
          Mayank <span className="text-champagne-dark font-light italic">&amp;</span> Ruchita
        </h2>

        {/* Delicate divider */}
        <div className="ornament-line w-20 my-4 opacity-70" />

        <p className="font-serif text-xs sm:text-sm tracking-[0.22em] uppercase text-champagne-dark font-medium mb-5">
          Reception Celebration
        </p>

        {/* Date & Event Details Card — displayed directly without interaction */}
        <div className="w-full my-2">
          <div className="relative overflow-hidden w-full rounded-sm border border-champagne/45 shadow-md">
            {/* Elegant metallic gold border accent */}
            <div
              className="w-full py-7 px-5 flex flex-col items-center justify-center rounded-sm bg-gradient-to-b from-[#FFFDF9] via-[#FAF5EE] to-[#FFFDF9] border border-champagne/30"
              style={{
                boxShadow: 'inset 0 0 20px rgba(201,169,110,0.12)',
              }}
            >
              {/* Subtle couple watermark accent visible in the background */}
              <div
                className="absolute right-0 top-0 bottom-0 w-36 pointer-events-none opacity-[0.15] overflow-hidden"
                style={{
                  maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 20%, transparent 95%)',
                  WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 20%, transparent 95%)',
                }}
                aria-hidden="true"
              >
                <img
                  src="/images/couple-watermark.jpg"
                  alt=""
                  className="w-full h-full object-cover object-top filter grayscale contrast-110"
                />
              </div>

              <div className="relative z-10 text-champagne-dark text-[10px] sm:text-xs tracking-[0.28em] uppercase font-serif mb-1 font-semibold">
                Save The Date
              </div>

              {/* Confirmed Date */}
              <div className="relative z-10 font-serif text-xl sm:text-2xl text-maroon-dark tracking-wide my-1 font-medium">
                Friday, 6 November 2026
              </div>

              {/* Confirmed Time */}
              <div className="relative z-10 text-xs sm:text-sm text-maroon font-medium tracking-widest mt-1">
                7:00 PM to 9:00 PM IST
              </div>

              {/* Confirmed Venue */}
              <div className="relative z-10 text-[11px] sm:text-xs text-charcoal/80 tracking-wider mt-2.5 max-w-xs font-normal">
                Golden Era-2 Banquet &amp; Restaurant, Maninagar, Ahmedabad
              </div>
            </div>
          </div>
        </div>

        {/* Warm celebration note */}
        <div className="mt-5 flex flex-col items-center gap-1.5 w-full">
          <span className="text-xs tracking-wider text-maroon font-sans font-medium">
            Friday, 6 November 2026 • We look forward to celebrating with you!
          </span>
        </div>
      </motion.div>
    </section>
  );
}

interface CardCornerOrnamentProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

function CardCornerOrnament({ position }: CardCornerOrnamentProps) {
  const isTop = position.includes('top');
  const isLeft = position.includes('left');

  return (
    <svg
      className="absolute opacity-35 pointer-events-none"
      style={{
        [isTop ? 'top' : 'bottom']: '10px',
        [isLeft ? 'left' : 'right']: '10px',
        transform: `${!isTop ? 'scaleY(-1)' : ''} ${!isLeft ? 'scaleX(-1)' : ''}`.trim(),
      }}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
    >
      <line x1="0" y1="0" x2="0" y2="14" stroke="currentColor" strokeWidth="0.6" className="text-champagne-dark" />
      <line x1="0" y1="0" x2="14" y2="0" stroke="currentColor" strokeWidth="0.6" className="text-champagne-dark" />
      <circle cx="4.5" cy="4.5" r="1.2" className="fill-champagne-dark" />
    </svg>
  );
}
