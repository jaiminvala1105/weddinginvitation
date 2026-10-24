import { motion, useReducedMotion } from 'framer-motion';

export interface WelcomeRevealProps {
  onExplore?: () => void;
}

export function WelcomeReveal({ onExplore }: WelcomeRevealProps = {}) {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.22,
        delayChildren: prefersReducedMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.85,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const handleScrollToNext = () => {
    onExplore?.();
    const next = document.getElementById('date-section');
    if (next) {
      next.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <motion.div
      className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 sm:px-6 py-10 text-center pointer-events-auto"
      variants={containerVariants}
      initial="hidden"
      animate="show"
      role="region"
      aria-label="Welcome announcement"
    >
      <div className="my-auto flex flex-col items-center justify-center max-w-2xl w-full">
        {/* Top royal crown / crest ornament */}
        <motion.div variants={itemVariants} className="mb-4 sm:mb-6">
          <svg
            width="90"
            height="20"
            viewBox="0 0 90 20"
            fill="none"
            aria-hidden="true"
            className="mx-auto"
          >
            <line x1="0" y1="10" x2="32" y2="10" stroke="currentColor" strokeWidth="0.6" className="text-champagne/45" />
            <path
              d="M40 3 L45 10 L40 17 M50 3 L45 10 L50 17"
              stroke="currentColor"
              strokeWidth="0.6"
              className="text-champagne/70"
            />
            <circle cx="45" cy="10" r="1.5" className="fill-champagne" />
            <line x1="58" y1="10" x2="90" y2="10" stroke="currentColor" strokeWidth="0.6" className="text-champagne/45" />
          </svg>
        </motion.div>

        {/* Names */}
        <motion.h1
          variants={itemVariants}
          className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-wide text-ivory text-shadow-warm leading-tight select-none"
        >
          Mayank{' '}
          <span className="text-champagne font-light italic mx-1 sm:mx-2">&amp;</span>{' '}
          Ruchita
        </motion.h1>

        {/* Divider */}
        <motion.div variants={itemVariants} className="ornament-line w-20 sm:w-28 my-5 sm:my-7 opacity-80" />

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="font-serif text-sm sm:text-base md:text-lg tracking-[0.25em] uppercase text-champagne/85 font-medium"
        >
          Reception Invitation
        </motion.p>

        {/* Gujarati text */}
        <motion.p
          variants={itemVariants}
          className="mt-2.5 text-xs sm:text-sm tracking-[0.16em] text-ivory/60 font-light"
          lang="gu"
        >
          રિસેપ્શન આમંત્રણ
        </motion.p>

        {/* Scroll action button */}
        <motion.div variants={itemVariants} className="mt-10 sm:mt-14 flex flex-col items-center">
          <button
            id="explore-btn"
            type="button"
            className="group relative px-7 sm:px-9 py-2.5 sm:py-3 border border-champagne/35 bg-charcoal/40 backdrop-blur-xs text-champagne font-serif text-xs sm:text-sm tracking-[0.22em] uppercase transition-all duration-300 hover:border-champagne/75 hover:bg-champagne/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne/60 cursor-pointer select-none"
            onClick={handleScrollToNext}
            aria-label="Scroll down to view invitation details"
          >
            <span className="relative z-10 flex items-center gap-2">
              <span>Explore Invitation</span>
              <span aria-hidden="true">↓</span>
            </span>
            <span className="absolute bottom-0 left-0 h-px w-0 bg-champagne transition-all duration-500 group-hover:w-full" />
          </button>
        </motion.div>

        {/* Bottom ornament */}
        <motion.div variants={itemVariants} className="mt-6 opacity-35">
          <svg width="48" height="10" viewBox="0 0 48 10" fill="none" aria-hidden="true">
            <circle cx="24" cy="5" r="1.5" stroke="currentColor" strokeWidth="0.5" className="text-champagne" />
            <line x1="0" y1="5" x2="18" y2="5" stroke="currentColor" strokeWidth="0.5" className="text-champagne" />
            <line x1="30" y1="5" x2="48" y2="5" stroke="currentColor" strokeWidth="0.5" className="text-champagne" />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
}
