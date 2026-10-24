import { motion, useReducedMotion } from 'framer-motion';

export function ReceptionDetailsSection() {
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
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.75,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section
      id="reception-details-section"
      className="relative w-full flex flex-col items-center justify-center px-4 py-16 sm:py-24 bg-[#F8F1E7] md:bg-[#FFFCF7] overflow-hidden"
      aria-label="Reception event details"
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

        {/* Soft watermark portrait (Mobile 22% opacity with clean warm tint; desktop 16% mix-blend-multiply) */}
        <div
          className="absolute -right-6 sm:-right-6 md:-right-10 bottom-0 w-[260px] sm:w-[320px] md:w-[420px] h-[70%] sm:h-[80%] pointer-events-none opacity-[0.22] md:opacity-[0.16] md:mix-blend-multiply overflow-hidden"
          style={{
            maskImage:
              'radial-gradient(ellipse at 75% 65%, rgba(0,0,0,1) 30%, rgba(0,0,0,0.3) 65%, transparent 95%)',
            WebkitMaskImage:
              'radial-gradient(ellipse at 75% 65%, rgba(0,0,0,1) 30%, rgba(0,0,0,0.3) 65%, transparent 95%)',
          }}
        >
          <img
            src="/images/ruchita-portrait.jpg"
            alt=""
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-top filter grayscale contrast-115 sepia-[0.2]"
          />
        </div>

        {/* Soft couple watermark portrait placed on left side (Mobile 20% opacity; desktop 15% mix-blend-multiply) */}
        <div
          className="absolute -left-10 sm:-left-12 md:-left-16 top-6 sm:top-14 w-[240px] sm:w-[300px] md:w-[360px] h-[65%] sm:h-[75%] pointer-events-none opacity-[0.20] md:opacity-[0.15] md:mix-blend-multiply overflow-hidden"
          style={{
            maskImage:
              'radial-gradient(ellipse at 35% 45%, rgba(0,0,0,1) 30%, rgba(0,0,0,0.3) 65%, transparent 95%)',
            WebkitMaskImage:
              'radial-gradient(ellipse at 35% 45%, rgba(0,0,0,1) 30%, rgba(0,0,0,0.3) 65%, transparent 95%)',
          }}
        >
          <img
            src="/images/couple-watermark.jpg"
            alt=""
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-center filter grayscale contrast-115 sepia-[0.2]"
          />
        </div>
      </div>

      {/* Main Reception Details Card */}
      <motion.div
        className="invitation-card relative z-10 w-full max-w-3xl rounded-xl p-6 sm:p-10 md:p-12 flex flex-col items-center text-center shadow-xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        {/* Decorative corner accents */}
        <DetailsCornerOrnament position="top-left" />
        <DetailsCornerOrnament position="top-right" />
        <DetailsCornerOrnament position="bottom-left" />
        <DetailsCornerOrnament position="bottom-right" />

        {/* Auspicious header */}
        <motion.div
          variants={itemVariants}
          className="text-maroon font-serif text-xs sm:text-sm tracking-[0.28em] uppercase font-medium mb-2"
        >
          ॥ શ્રી ગણેશાય નમઃ ॥
        </motion.div>

        {/* Section title */}
        <motion.h2
          variants={itemVariants}
          className="font-serif text-3xl sm:text-4xl md:text-5xl text-maroon-dark font-normal leading-tight tracking-wide"
        >
          Reception Invitation
        </motion.h2>

        {/* Sub-header couple badge */}
        <motion.div
          variants={itemVariants}
          className="mt-1.5 text-champagne-dark font-serif text-sm sm:text-base tracking-[0.2em] uppercase font-medium"
        >
          Mayank <span className="italic font-light">&amp;</span> Ruchita
        </motion.div>

        {/* Ornamental divider */}
        <motion.div
          variants={itemVariants}
          className="my-5 sm:my-6 flex items-center justify-center gap-3 w-full"
        >
          <div className="h-px w-14 sm:w-20 bg-gradient-to-r from-transparent to-champagne/60" />
          <span className="text-champagne-dark text-xs" aria-hidden="true">✦</span>
          <span className="w-1.5 h-1.5 rounded-full bg-maroon-light border border-champagne/50" aria-hidden="true" />
          <span className="text-champagne-dark text-xs" aria-hidden="true">✦</span>
          <div className="h-px w-14 sm:w-20 bg-gradient-to-l from-transparent to-champagne/60" />
        </motion.div>

        {/* Bilingual Welcome Message */}
        <div className="max-w-2xl w-full mb-8 space-y-3">
          {/* Gujarati Invitation Message */}
          <motion.p
            variants={itemVariants}
            className="text-charcoal/90 text-xs sm:text-sm leading-relaxed tracking-wider font-normal"
            lang="gu"
          >
            શ્રી ગણેશજી અને વડીલોના શુભ આશીર્વાદથી, અમારા લગ્ન રિસેપ્શનના આ મંગલમય પ્રસંગે
            આપનું સહકુટુંબ સ્નેહભર્યું સ્વાગત છે. આપની ઉપસ્થિતિ અમારા આનંદમાં અભિવૃદ્ધિ કરશે.
          </motion.p>

          {/* English Invitation Message */}
          <motion.p
            variants={itemVariants}
            className="font-serif text-xs sm:text-sm text-stone-dark leading-relaxed tracking-wide italic font-normal"
          >
            With the divine blessings of our elders and Almighty, we cordially invite you
            to celebrate an evening of dinner, music, and joy as we mark the wedding reception of Mayank and Ruchita.
          </motion.p>
        </div>

        {/* Details Grid: Date, Time, Venue Name, Venue Address */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 w-full text-left"
        >
          {/* 1. Date Card (frosted glass with photo clearly visible through the card) */}
          <div className="relative overflow-hidden p-4 sm:p-5 rounded-lg frosted-glass-card flex items-start gap-3.5 hover:border-champagne/60 transition-colors">
            {/* Real photo layer visible through the translucent card */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.24] md:opacity-[0.14] overflow-hidden"
              style={{
                maskImage: 'linear-gradient(135deg, rgba(0,0,0,1) 30%, rgba(0,0,0,0.2) 80%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(135deg, rgba(0,0,0,1) 30%, rgba(0,0,0,0.2) 80%, transparent 100%)',
              }}
              aria-hidden="true"
            >
              <img
                src="/images/couple-watermark.jpg"
                alt=""
                className="w-full h-full object-cover object-[center_20%] filter grayscale contrast-115 sepia-[0.15]"
              />
            </div>
            <div className="relative z-10 p-2 rounded-md bg-maroon/10 border border-champagne/40 text-maroon shrink-0 mt-0.5">
              <CalendarIcon />
            </div>
            <div className="relative z-10">
              <span className="block text-[10px] sm:text-xs text-champagne-dark font-serif uppercase tracking-[0.2em] font-semibold">
                Reception Date
              </span>
              <p className="font-serif text-base sm:text-lg text-maroon-dark mt-0.5 font-medium tracking-wide">
                6 November 2026
              </p>
              <span className="block text-[11px] text-stone-dark mt-0.5 font-medium">
                Friday Evening
              </span>
            </div>
          </div>

          {/* 2. Time Card (frosted glass with subtle photo accent) */}
          <div className="relative overflow-hidden p-4 sm:p-5 rounded-lg frosted-glass-card flex items-start gap-3.5 hover:border-champagne/60 transition-colors">
            <div
              className="absolute right-0 top-0 bottom-0 w-32 pointer-events-none opacity-[0.18] md:opacity-[0.10] overflow-hidden"
              style={{
                maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 15%, transparent 95%)',
                WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 15%, transparent 95%)',
              }}
              aria-hidden="true"
            >
              <img
                src="/images/ruchita-portrait.jpg"
                alt=""
                className="w-full h-full object-cover object-top filter grayscale contrast-110"
              />
            </div>
            <div className="relative z-10 p-2 rounded-md bg-maroon/10 border border-champagne/40 text-maroon shrink-0 mt-0.5">
              <ClockIcon />
            </div>
            <div className="relative z-10">
              <span className="block text-[10px] sm:text-xs text-champagne-dark font-serif uppercase tracking-[0.2em] font-semibold">
                Reception Time
              </span>
              <p className="font-serif text-base sm:text-lg text-maroon-dark mt-0.5 font-medium tracking-wide">
                7:00 PM to 9:00 PM IST
              </p>
              <span className="block text-[11px] text-stone-dark mt-0.5 font-medium">
                Evening reception &amp; dinner
              </span>
            </div>
          </div>

          {/* 3. Venue Name Card (frosted glass with portrait visible through the card) */}
          <div className="relative overflow-hidden p-4 sm:p-5 rounded-lg frosted-glass-card flex items-start gap-3.5 hover:border-champagne/60 transition-colors">
            {/* Real photo layer visible through the translucent card */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.22] md:opacity-[0.14] overflow-hidden"
              style={{
                maskImage: 'linear-gradient(135deg, rgba(0,0,0,1) 30%, rgba(0,0,0,0.2) 80%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(135deg, rgba(0,0,0,1) 30%, rgba(0,0,0,0.2) 80%, transparent 100%)',
              }}
              aria-hidden="true"
            >
              <img
                src="/images/ruchita-portrait.jpg"
                alt=""
                className="w-full h-full object-cover object-top filter grayscale contrast-115 sepia-[0.15]"
              />
            </div>
            <div className="relative z-10 p-2 rounded-md bg-maroon/10 border border-champagne/40 text-maroon shrink-0 mt-0.5">
              <PalaceIcon />
            </div>
            <div className="relative z-10">
              <span className="block text-[10px] sm:text-xs text-champagne-dark font-serif uppercase tracking-[0.2em] font-semibold">
                Venue Name
              </span>
              <p className="font-serif text-base sm:text-lg text-maroon-dark mt-0.5 font-medium tracking-wide">
                Golden Era-2 Banquet &amp; Restaurant
              </p>
              <span className="block text-[11px] text-stone-dark mt-0.5 font-medium">
                First Floor, Ratilal Patel Hall
              </span>
            </div>
          </div>

          {/* 4. Full Address Card (frosted glass) */}
          <div className="relative overflow-hidden p-4 sm:p-5 rounded-lg frosted-glass-card flex items-start gap-3.5 hover:border-champagne/60 transition-colors">
            <div className="relative z-10 p-2 rounded-md bg-maroon/10 border border-champagne/40 text-maroon shrink-0 mt-0.5">
              <LocationPinIcon />
            </div>
            <div className="relative z-10">
              <span className="block text-[10px] sm:text-xs text-champagne-dark font-serif uppercase tracking-[0.2em] font-semibold">
                Full Address
              </span>
              <p className="font-serif text-sm sm:text-base text-charcoal mt-0.5 font-normal tracking-wide leading-snug">
                First Floor, Ratilal Patel Hall, Golden Era 2, Bhairavnath Road, Maninagar, Ahmedabad, Gujarat 380028
              </p>
              <span className="block text-[11px] text-stone-dark mt-0.5 font-medium">
                Ahmedabad, Gujarat 380028
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* SVG Icons */
function CalendarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" />
      <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" />
      <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" />
      <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="currentColor" />
      <polyline points="12 6 12 12 16 14" stroke="currentColor" />
    </svg>
  );
}

function PalaceIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M3 21h18M5 21V9l7-4 7 4v12M9 21v-6h6v6M9 9h.01M15 9h.01" stroke="currentColor" />
    </svg>
  );
}

function LocationPinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" />
      <circle cx="12" cy="10" r="3" stroke="currentColor" />
    </svg>
  );
}

function DetailsCornerOrnament({ position }: { position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }) {
  const isTop = position.includes('top');
  const isLeft = position.includes('left');

  return (
    <svg
      className="absolute opacity-25 pointer-events-none"
      style={{
        [isTop ? 'top' : 'bottom']: '12px',
        [isLeft ? 'left' : 'right']: '12px',
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
