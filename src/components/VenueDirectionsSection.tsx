import { motion, useReducedMotion } from 'framer-motion';

export interface VenueDirectionsSectionProps {
  venueName?: string;
  venueAddress?: string;
  mapEmbedUrl?: string;
}

const CONFIRMED_VENUE_NAME = 'Golden Era-2 Banquet & Restaurant';
const CONFIRMED_VENUE_ADDRESS =
  'First Floor, Ratilal Patel Hall, Golden Era 2, Bhairavnath Road, Maninagar, Ahmedabad, Gujarat 380028';
const CONFIRMED_MAP_EMBED_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.7076350292623!2d72.5970794!3d22.9977761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85089a5ccca7%3A0x401e35c2f9fe5154!2sGolden%20Era-2%20Banquet%20%26%20Restaurant!5e0!3m2!1sen!2sin!4v1792821444660!5m2!1sen!2sin';
const GOOGLE_MAPS_DIRECTIONS_URL =
  'https://www.google.com/maps/dir/?api=1&destination=Golden+Era-2+Banquet+%26+Restaurant,+First+Floor,+Ratilal+Patel+Hall,+Bhairavnath+Road,+Maninagar,+Ahmedabad,+Gujarat+380028';

export function VenueDirectionsSection({
  venueName = CONFIRMED_VENUE_NAME,
  venueAddress = CONFIRMED_VENUE_ADDRESS,
  mapEmbedUrl = CONFIRMED_MAP_EMBED_SRC,
}: VenueDirectionsSectionProps = {}) {
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

  const handleGetDirections = () => {
    window.open(GOOGLE_MAPS_DIRECTIONS_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="venue-directions-section"
      className="relative w-full flex flex-col items-center justify-center px-4 py-16 sm:py-24 bg-[#F8F1E7] md:bg-[#FFFCF7] overflow-hidden"
      aria-label="Venue location and directions"
    >
      {/* Background ambient lighting — champagne & subtle maroon glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] rounded-full opacity-35"
          style={{
            background:
              'radial-gradient(ellipse, rgba(201,169,110,0.18) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[750px] h-[450px] rounded-full opacity-20"
          style={{
            background:
              'radial-gradient(ellipse, rgba(74,18,26,0.12) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Main Venue Card */}
      <motion.div
        className="invitation-card relative z-10 w-full max-w-3xl rounded-xl p-6 sm:p-10 md:p-12 flex flex-col items-center text-center shadow-xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        {/* Decorative corner accents */}
        <VenueCornerOrnament position="top-left" />
        <VenueCornerOrnament position="top-right" />
        <VenueCornerOrnament position="bottom-left" />
        <VenueCornerOrnament position="bottom-right" />

        {/* Auspicious header */}
        <motion.div
          variants={itemVariants}
          className="text-maroon font-serif text-xs sm:text-sm tracking-[0.28em] uppercase font-medium mb-2"
        >
          સ્થળ અને દિશા નિર્દેશ
        </motion.div>

        {/* Section title */}
        <motion.h2
          variants={itemVariants}
          className="font-serif text-3xl sm:text-4xl md:text-5xl text-maroon-dark font-normal leading-tight tracking-wide"
        >
          Find Our Celebration
        </motion.h2>

        {/* Sub-header */}
        <motion.div
          variants={itemVariants}
          className="mt-1.5 text-champagne-dark font-serif text-xs sm:text-sm tracking-[0.2em] uppercase font-medium"
        >
          Mayank &amp; Ruchita • Reception Venue
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

        {/* Venue Information Cards — matching Reception Details presentation */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 w-full text-left mb-6"
        >
          {/* 1. Venue Name Card */}
          <div className="relative overflow-hidden p-4 sm:p-5 rounded-lg frosted-glass-card flex items-start gap-3.5 hover:border-champagne/60 transition-colors">
            {/* Real photo layer visible through translucent card */}
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
                {venueName}
              </p>
              <span className="block text-[11px] text-stone-dark mt-0.5 font-medium">
                First Floor, Ratilal Patel Hall
              </span>
            </div>
          </div>

          {/* 2. Full Address Card */}
          <div className="relative overflow-hidden p-4 sm:p-5 rounded-lg frosted-glass-card flex items-start gap-3.5 hover:border-champagne/60 transition-colors">
            <div className="relative z-10 p-2 rounded-md bg-maroon/10 border border-champagne/40 text-maroon shrink-0 mt-0.5">
              <LocationPinIcon />
            </div>
            <div className="relative z-10">
              <span className="block text-[10px] sm:text-xs text-champagne-dark font-serif uppercase tracking-[0.2em] font-semibold">
                Full Address
              </span>
              <p className="font-serif text-sm sm:text-base text-charcoal mt-0.5 font-normal tracking-wide leading-snug">
                {venueAddress}
              </p>
              <span className="block text-[11px] text-stone-dark mt-0.5 font-medium">
                Ahmedabad, Gujarat 380028
              </span>
            </div>
          </div>
        </motion.div>

        {/* Short directions message */}
        <motion.p
          variants={itemVariants}
          className="text-xs sm:text-sm text-stone-dark leading-relaxed max-w-xl mb-6 font-normal"
        >
          We look forward to welcoming you with warmth and joy. Find your route to the reception venue using the interactive map below or tap for direct navigation.
        </motion.p>

        {/* Dedicated Responsive Google Map Embed */}
        <motion.div
          variants={itemVariants}
          className="w-full rounded-lg border border-champagne/40 overflow-hidden relative shadow-md bg-white/60"
        >
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] max-h-[380px]">
            <iframe
              src={mapEmbedUrl}
              title="Golden Era-2 Banquet & Restaurant Location Map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              className="w-full h-full filter contrast-105"
            />
          </div>
        </motion.div>

        {/* Action Controls */}
        <motion.div
          variants={itemVariants}
          className="mt-8 pt-5 border-t border-champagne/25 w-full flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Get Directions Button */}
          <button
            id="get-directions-btn"
            type="button"
            onClick={handleGetDirections}
            className="w-full sm:w-auto px-7 py-2.5 border border-champagne bg-ivory text-maroon hover:bg-champagne/15 font-serif text-xs tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-2 select-none cursor-pointer shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne"
            aria-label="Open Google Maps directions for Golden Era-2 Banquet & Restaurant in a new tab"
          >
            <span>Get Directions</span>
            <span aria-hidden="true">↗</span>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* Icons */
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


function VenueCornerOrnament({ position }: { position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }) {
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
