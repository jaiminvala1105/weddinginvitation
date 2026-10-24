import { motion, useReducedMotion } from 'framer-motion';

export function ClosingSection() {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.18,
        delayChildren: prefersReducedMotion ? 0 : 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const handleReturnToTop = () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  };

  return (
    <section
      id="closing-section"
      className="relative w-full flex flex-col items-center justify-center px-4 py-16 sm:py-24 bg-[#F8F1E7] md:bg-[#FFFCF7] overflow-hidden select-none"
      aria-label="Closing gratitude and reception message"
      role="region"
    >
      {/* Background ambient lighting — champagne & subtle maroon glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] rounded-full opacity-35"
          style={{
            background:
              'radial-gradient(ellipse, rgba(201,169,110,0.2) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[750px] h-[450px] rounded-full opacity-20"
          style={{
            background:
              'radial-gradient(ellipse, rgba(74,18,26,0.12) 0%, transparent 70%)',
          }}
        />

        {/* Soft couple portrait watermark (Mobile 24% opacity; desktop 16% mix-blend-multiply) */}
        <div
          className="absolute -right-6 sm:-right-4 md:-right-8 bottom-0 w-[270px] sm:w-[360px] md:w-[440px] h-[70%] sm:h-[80%] pointer-events-none opacity-[0.24] md:opacity-[0.16] md:mix-blend-multiply overflow-hidden"
          style={{
            maskImage:
              'radial-gradient(ellipse at 75% 70%, rgba(0,0,0,1) 30%, rgba(0,0,0,0.3) 65%, transparent 95%)',
            WebkitMaskImage:
              'radial-gradient(ellipse at 75% 70%, rgba(0,0,0,1) 30%, rgba(0,0,0,0.3) 65%, transparent 95%)',
          }}
        >
          <img
            src="/images/couple-watermark.jpg"
            alt=""
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-top filter grayscale contrast-115 sepia-[0.2]"
          />
        </div>
      </div>

      {/* Main Closing Card */}
      <motion.div
        className="invitation-card relative z-10 w-full max-w-2xl rounded-xl p-7 sm:p-12 md:p-14 flex flex-col items-center text-center shadow-xl overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        {/* Subtle photo accent watermark inside closing card on mobile */}
        <div
          className="absolute -right-6 -bottom-6 w-48 h-48 pointer-events-none opacity-[0.12] sm:opacity-[0.06] overflow-hidden"
          style={{
            maskImage: 'radial-gradient(circle at 70% 70%, rgba(0,0,0,1) 20%, transparent 85%)',
            WebkitMaskImage: 'radial-gradient(circle at 70% 70%, rgba(0,0,0,1) 20%, transparent 85%)',
          }}
          aria-hidden="true"
        >
          <img
            src="/images/ruchita-portrait.jpg"
            alt=""
            className="w-full h-full object-cover object-top filter grayscale contrast-110"
          />
        </div>

        {/* Decorative corner accents */}
        <ClosingCornerOrnament position="top-left" />
        <ClosingCornerOrnament position="top-right" />
        <ClosingCornerOrnament position="bottom-left" />
        <ClosingCornerOrnament position="bottom-right" />

        {/* Auspicious top crown motif */}
        <motion.div variants={itemVariants} className="mb-4">
          <svg
            width="100"
            height="22"
            viewBox="0 0 100 22"
            fill="none"
            aria-hidden="true"
            className="mx-auto"
          >
            <line x1="0" y1="11" x2="36" y2="11" stroke="currentColor" strokeWidth="0.6" className="text-champagne/45" />
            <path
              d="M44 4 L50 11 L44 18 M56 4 L50 11 L56 18"
              stroke="currentColor"
              strokeWidth="0.6"
              className="text-champagne-dark"
            />
            <circle cx="50" cy="11" r="1.5" className="fill-champagne-dark" />
            <line x1="64" y1="11" x2="100" y2="11" stroke="currentColor" strokeWidth="0.6" className="text-champagne/45" />
          </svg>
        </motion.div>

        {/* Auspicious header phrase */}
        <motion.div
          variants={itemVariants}
          className="text-maroon font-serif text-xs sm:text-sm tracking-[0.28em] uppercase font-medium mb-3"
        >
          ॥ સ્નેહ અને કૃતજ્ઞતા ॥
        </motion.div>

        {/* Prominent couple heading */}
        <motion.h2
          variants={itemVariants}
          className="font-serif text-3xl sm:text-5xl md:text-6xl text-maroon-dark font-normal leading-tight tracking-wide"
        >
          Mayank <span className="text-champagne-dark font-light italic mx-1">&amp;</span> Ruchita
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="font-serif text-xs sm:text-sm tracking-[0.24em] uppercase text-champagne-dark font-medium mt-2"
        >
          Reception Celebration
        </motion.p>

        {/* Ornamental divider */}
        <motion.div
          variants={itemVariants}
          className="my-6 sm:my-8 flex items-center justify-center gap-3 w-full"
        >
          <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent to-champagne/60" />
          <span className="text-champagne-dark text-xs" aria-hidden="true">✦</span>
          <span className="w-1.5 h-1.5 rounded-full bg-maroon-light border border-champagne/50" aria-hidden="true" />
          <span className="text-champagne-dark text-xs" aria-hidden="true">✦</span>
          <div className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent to-champagne/60" />
        </motion.div>

        {/* Bilingual Closing Message */}
        <div className="max-w-xl w-full space-y-4 mb-8 sm:mb-10">
          {/* Gujarati Message */}
          <motion.p
            variants={itemVariants}
            className="text-charcoal/90 text-sm sm:text-base leading-relaxed tracking-wider font-normal"
            lang="gu"
          >
            “આપની ઉપસ્થિતિ અને આશીર્વાદ અમારા માટે અમૂલ્ય છે. આ શુભ પ્રસંગે આપનું હાર્દિક સ્વાગત છે.”
          </motion.p>

          {/* English Message */}
          <motion.p
            variants={itemVariants}
            className="font-serif text-sm sm:text-base text-stone-dark leading-relaxed tracking-wide italic font-normal"
          >
            “Your presence and blessings mean the world to us. We look forward to celebrating this special evening with you.”
          </motion.p>
        </div>

        {/* Sign-off */}
        <motion.div variants={itemVariants} className="mb-8">
          <p className="font-serif text-xs sm:text-sm text-champagne-dark uppercase tracking-[0.22em] font-medium">
            With love,
          </p>
          <p className="font-serif text-lg sm:text-xl text-maroon-dark tracking-wide mt-1 font-medium">
            Mayank &amp; Ruchita
          </p>
        </motion.div>

        {/* Bottom floral accent */}
        <motion.div variants={itemVariants} className="mb-8 opacity-60">
          <svg width="60" height="12" viewBox="0 0 60 12" fill="none" aria-hidden="true">
            <circle cx="30" cy="6" r="2" stroke="currentColor" strokeWidth="0.5" className="text-champagne-dark" />
            <line x1="0" y1="6" x2="24" y2="6" stroke="currentColor" strokeWidth="0.5" className="text-champagne-dark" />
            <line x1="36" y1="6" x2="60" y2="6" stroke="currentColor" strokeWidth="0.5" className="text-champagne-dark" />
          </svg>
        </motion.div>

        {/* Return to Top Action Button */}
        <motion.div variants={itemVariants} className="pt-6 border-t border-champagne/25 w-full flex justify-center">
          <button
            id="return-to-top-btn"
            type="button"
            onClick={handleReturnToTop}
            className="px-8 py-2.5 border border-champagne bg-ivory text-maroon font-serif text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:bg-champagne/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne cursor-pointer select-none shadow-xs"
            aria-label="Return to the top of the invitation"
          >
            Return to Top ↑
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}

function ClosingCornerOrnament({ position }: { position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }) {
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
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      aria-hidden="true"
    >
      <line x1="0" y1="0" x2="0" y2="18" stroke="currentColor" strokeWidth="0.6" className="text-champagne" />
      <line x1="0" y1="0" x2="18" y2="0" stroke="currentColor" strokeWidth="0.6" className="text-champagne" />
      <circle cx="6" cy="6" r="1.5" className="fill-champagne" />
    </svg>
  );
}
