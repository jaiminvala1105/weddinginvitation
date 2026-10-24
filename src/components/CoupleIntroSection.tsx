import { motion, useReducedMotion } from 'framer-motion';

export function CoupleIntroSection() {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.16,
        delayChildren: prefersReducedMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section
      id="couple-intro-section"
      className="relative w-full flex flex-col items-center justify-center px-4 py-16 sm:py-24 bg-[#F8F1E7] md:bg-[#FFFCF7] overflow-hidden"
      aria-label="Couple introduction"
    >
      {/* Background ambient lighting — champagne & subtle maroon glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] rounded-full opacity-35"
          style={{
            background:
              'radial-gradient(ellipse, rgba(201,169,110,0.18) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[700px] h-[450px] rounded-full opacity-20"
          style={{
            background:
              'radial-gradient(ellipse, rgba(74,18,26,0.1) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Main Editorial Presentation Card */}
      <motion.div
        className="invitation-card relative z-10 w-full max-w-4xl rounded-xl p-5 sm:p-10 md:p-12 flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        {/* Decorative corner accents */}
        <FrameCornerOrnament position="top-left" />
        <FrameCornerOrnament position="top-right" />
        <FrameCornerOrnament position="bottom-left" />
        <FrameCornerOrnament position="bottom-right" />

        {/* Couple Photograph with Royal Framing */}
        <motion.div
          variants={itemVariants}
          className="relative w-full max-w-[340px] sm:max-w-[380px] lg:w-[45%] flex-shrink-0"
        >
          {/* Layered luxury matting & gold frame */}
          <div
            className="relative p-2.5 sm:p-3 rounded-lg shadow-2xl"
            style={{
              background:
                'linear-gradient(145deg, #FFFEF7 0%, #F5EFEB 100%)',
              border: '1px solid rgba(201, 169, 110, 0.5)',
              boxShadow:
                '0 12px 35px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(74, 18, 26, 0.35)',
            }}
          >
            {/* Inner maroon velvet border */}
            <div className="relative overflow-hidden rounded-md border border-maroon/40 bg-charcoal">
              <img
                src="/images/couple-portrait.png"
                alt="Mayank and Ruchita together in elegant wedding attire"
                className="w-full h-auto max-h-[460px] object-cover object-top block"
                loading="lazy"
              />
              {/* Subtle warm vignette on the portrait edges */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  boxShadow:
                    'inset 0 0 25px rgba(26, 23, 20, 0.4), inset 0 0 0 1px rgba(201, 169, 110, 0.2)',
                }}
                aria-hidden="true"
              />
            </div>

            {/* Corner metallic filigree on photo mat */}
            <PhotoMatOrnament position="top-left" />
            <PhotoMatOrnament position="top-right" />
            <PhotoMatOrnament position="bottom-left" />
            <PhotoMatOrnament position="bottom-right" />
          </div>
        </motion.div>

        {/* Text Content */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Auspicious invocation / tagline */}
          <motion.div
            variants={itemVariants}
            className="mb-2 text-champagne-dark font-serif text-xs sm:text-sm tracking-[0.25em] uppercase font-medium"
          >
            A Journey of Love &amp; Togetherness
          </motion.div>

          {/* Gujarati blessing phrase */}
          <motion.div
            variants={itemVariants}
            className="text-stone-dark text-xs sm:text-sm tracking-[0.16em] mb-4 font-light"
            lang="gu"
          >
            જીવનભરનો સાથ • સ્નેહ અને સમર્પણ
          </motion.div>

          {/* Couple Names */}
          <motion.h2
            variants={itemVariants}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-maroon-dark font-normal leading-tight tracking-wide"
          >
            Mayank <span className="text-champagne-dark font-light italic">&amp;</span> Ruchita
          </motion.h2>

          {/* Ornamental divider */}
          <motion.div
            variants={itemVariants}
            className="my-5 flex items-center justify-center lg:justify-start gap-3 w-full"
          >
            <div className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent to-champagne/60" />
            <span className="text-champagne-dark text-xs" aria-hidden="true">✦</span>
            <span className="w-1.5 h-1.5 rounded-full bg-maroon-light border border-champagne/50" aria-hidden="true" />
            <span className="text-champagne-dark text-xs" aria-hidden="true">✦</span>
            <div className="h-px w-12 sm:w-16 bg-gradient-to-l from-transparent to-champagne/60" />
          </motion.div>

          {/* Reception dedication paragraph */}
          <motion.p
            variants={itemVariants}
            className="font-serif text-sm sm:text-base text-charcoal leading-relaxed max-w-xl font-light tracking-wide mb-4"
          >
            As we step into a lifetime of shared dreams and boundless happiness,
            we invite you to join us in celebrating our wedding reception.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="font-sans text-xs sm:text-sm text-stone-dark leading-relaxed max-w-lg tracking-wider"
          >
            Your warm blessings, gracious presence, and cherished company will fill
            our celebration with joy, laughter, and lasting memories.
          </motion.p>

          {/* Subtle footer note */}
          <motion.div
            variants={itemVariants}
            className="mt-6 sm:mt-8 pt-5 border-t border-champagne/25 w-full flex items-center justify-center lg:justify-start gap-2"
          >
            <span className="text-champagne-dark text-xs tracking-[0.2em] uppercase font-serif font-medium">
              Reception Invitation
            </span>
            <span className="text-champagne-dark/50" aria-hidden="true">•</span>
            <span className="text-stone-dark text-xs tracking-wider font-sans">
              Mayank &amp; Ruchita
            </span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

interface FrameCornerOrnamentProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

function FrameCornerOrnament({ position }: FrameCornerOrnamentProps) {
  const isTop = position.includes('top');
  const isLeft = position.includes('left');

  return (
    <svg
      className="absolute opacity-25 pointer-events-none"
      style={{
        [isTop ? 'top' : 'bottom']: '14px',
        [isLeft ? 'left' : 'right']: '14px',
        transform: `${!isTop ? 'scaleY(-1)' : ''} ${!isLeft ? 'scaleX(-1)' : ''}`.trim(),
      }}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <line x1="0" y1="0" x2="0" y2="20" stroke="currentColor" strokeWidth="0.6" className="text-champagne" />
      <line x1="0" y1="0" x2="20" y2="0" stroke="currentColor" strokeWidth="0.6" className="text-champagne" />
      <circle cx="7" cy="7" r="1.5" className="fill-champagne" />
    </svg>
  );
}

function PhotoMatOrnament({ position }: FrameCornerOrnamentProps) {
  const isTop = position.includes('top');
  const isLeft = position.includes('left');

  return (
    <div
      className="absolute w-2 h-2 pointer-events-none"
      style={{
        [isTop ? 'top' : 'bottom']: '6px',
        [isLeft ? 'left' : 'right']: '6px',
        borderTop: isTop ? '1px solid #C9A96E' : 'none',
        borderBottom: !isTop ? '1px solid #C9A96E' : 'none',
        borderLeft: isLeft ? '1px solid #C9A96E' : 'none',
        borderRight: !isLeft ? '1px solid #C9A96E' : 'none',
      }}
      aria-hidden="true"
    />
  );
}
