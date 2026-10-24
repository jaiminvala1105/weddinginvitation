import { motion, useReducedMotion } from 'framer-motion';

export interface RibbonWrapperProps {
  isUnwrapped: boolean;
  onUnwrap: () => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
}

export function RibbonWrapper({
  isUnwrapped,
  onUnwrap,
  onKeyDown,
}: RibbonWrapperProps) {
  const prefersReducedMotion = useReducedMotion();

  // Animation timing
  const ribbonDuration = prefersReducedMotion ? 0.01 : 1.35;

  return (
    <div
      className="relative z-10 flex items-center justify-center w-full min-h-dvh px-4 py-8"
      onClick={!isUnwrapped ? onUnwrap : undefined}
      onKeyDown={!isUnwrapped ? onKeyDown : undefined}
      role={!isUnwrapped ? 'button' : undefined}
      tabIndex={!isUnwrapped ? 0 : -1}
      aria-label={!isUnwrapped ? 'Tap to untie ribbon and open invitation' : undefined}
      aria-expanded={isUnwrapped}
      style={{ cursor: !isUnwrapped ? 'pointer' : 'default' }}
    >
      {/* Ivory Invitation Card Canvas with gold foiled trim */}
      <motion.div
        className="relative w-full max-w-lg sm:max-w-xl md:max-w-2xl bg-linear-to-b from-[#FFFDF9] via-[#FAF4EB] to-[#F5ECE0] rounded-2xl sm:rounded-3xl shadow-[0_20px_60px_-15px_rgba(26,23,20,0.65),0_0_1px_1px_rgba(201,169,110,0.4)] border border-champagne/45 p-6 sm:p-10 md:p-14 overflow-hidden select-none"
        initial={{ scale: 0.98, opacity: 0.9 }}
        animate={
          isUnwrapped
            ? { scale: 1, opacity: 1, transition: { duration: prefersReducedMotion ? 0.01 : 1.1 } }
            : { scale: 0.98, opacity: 0.95 }
        }
      >
        {/* Subtle decorative inner gold border */}
        <div
          className="absolute inset-3 sm:inset-4 md:inset-5 rounded-xl sm:rounded-2xl border border-champagne/25 pointer-events-none"
          aria-hidden="true"
        />

        {/* Card corner flourishes */}
        <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-champagne/50 pointer-events-none" />
        <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-champagne/50 pointer-events-none" />
        <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-champagne/50 pointer-events-none" />
        <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-champagne/50 pointer-events-none" />

        {/* Background watermark seal */}
        <div
          className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none"
          aria-hidden="true"
        >
          <div className="w-80 h-80 rounded-full border-2 border-champagne flex items-center justify-center">
            <span className="font-serif text-8xl text-maroon font-bold">M&amp;R</span>
          </div>
        </div>

        {/* Invitation Cover Preview / Teaser (visible before ribbon is untied) */}
        <div className="relative z-0 text-center py-6 sm:py-10 flex flex-col items-center">
          <p className="font-serif text-xs sm:text-sm tracking-[0.3em] uppercase text-stone-dark font-medium">
            Royal Wedding Reception
          </p>
          <h2 className="mt-4 font-serif text-2xl sm:text-3xl md:text-4xl text-maroon tracking-wide">
            Mayank &amp; Ruchita
          </h2>
          <div className="w-16 h-px bg-champagne/40 my-4" />
          <p className="text-xs sm:text-sm text-stone font-light tracking-widest uppercase">
            November 2026 • Ahmedabad
          </p>
        </div>

        {/* ========================================================================= */}
        {/* RIBBON LAYER (Loosens, unties, and glides away on tap)                   */}
        {/* ========================================================================= */}
        <div
          className="absolute inset-0 pointer-events-none z-10 overflow-hidden"
          aria-hidden="true"
        >
          {/* Horizontal Satin Ribbon Band with Maroon Edge Trim */}
          <motion.div
            className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-10 sm:h-12 shadow-[0_4px_16px_rgba(74,18,26,0.25)] flex items-center justify-between"
            style={{
              background:
                'linear-gradient(180deg, #FDF9F0 0%, #D4B87A 18%, #C9A96E 52%, #B59355 82%, #8C6D32 100%)',
              borderTop: '1.5px solid #6E1B27',
              borderBottom: '1.5px solid #6E1B27',
            }}
            initial={{ x: 0, opacity: 1 }}
            animate={
              isUnwrapped
                ? {
                    x: ['0%', '-5%', '115%'],
                    rotate: [0, -3, 8],
                    opacity: [1, 0.95, 0],
                  }
                : { x: 0, opacity: 1 }
            }
            transition={{
              duration: ribbonDuration,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Satin Sheen Line */}
            <div className="w-full h-1 bg-white/40" />
          </motion.div>

          {/* Vertical Satin Ribbon Band with Maroon Edge Trim */}
          <motion.div
            className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-10 sm:w-12 shadow-[0_4px_16px_rgba(74,18,26,0.25)] flex justify-center"
            style={{
              background:
                'linear-gradient(90deg, #FDF9F0 0%, #D4B87A 18%, #C9A96E 52%, #B59355 82%, #8C6D32 100%)',
              borderLeft: '1.5px solid #6E1B27',
              borderRight: '1.5px solid #6E1B27',
            }}
            initial={{ y: 0, opacity: 1 }}
            animate={
              isUnwrapped
                ? {
                    y: ['0%', '-6%', '-120%'],
                    rotate: [0, 2, -6],
                    opacity: [1, 0.95, 0],
                  }
                : { y: 0, opacity: 1 }
            }
            transition={{
              duration: ribbonDuration,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Satin Sheen Line */}
            <div className="h-full w-1 bg-white/40" />
          </motion.div>

          {/* Center Rosette / Bow Knot with Royal Wax Seal Accent */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center"
            initial={{ scale: 1, rotate: 0, opacity: 1 }}
            animate={
              isUnwrapped
                ? {
                    scale: [1, 1.25, 0.7, 0],
                    rotate: [0, -15, 45, 90],
                    opacity: [1, 1, 0.6, 0],
                  }
                : { scale: 1, rotate: 0, opacity: 1 }
            }
            transition={{
              duration: ribbonDuration * 0.85,
              ease: [0.34, 1.56, 0.64, 1],
            }}
          >
            {/* Ribbon Loops (Left & Right) */}
            <div className="relative flex items-center justify-center">
              {/* Left Bow Loop */}
              <div
                className="w-10 sm:w-14 h-7 sm:h-9 rounded-full -mr-3 shadow-md"
                style={{
                  background: 'linear-gradient(135deg, #FDF9F0 0%, #D4B87A 50%, #B59355 100%)',
                  border: '1px solid #6E1B27',
                  transform: 'rotate(-25deg)',
                }}
              />
              {/* Right Bow Loop */}
              <div
                className="w-10 sm:w-14 h-7 sm:h-9 rounded-full -ml-3 shadow-md"
                style={{
                  background: 'linear-gradient(225deg, #FDF9F0 0%, #D4B87A 50%, #B59355 100%)',
                  border: '1px solid #6E1B27',
                  transform: 'rotate(25deg)',
                }}
              />

              {/* Center Maroon & Gold Royal Medallion */}
              <div
                className="absolute w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-lg border-2 border-champagne-light"
                style={{
                  background:
                    'radial-gradient(circle at 35% 35%, #6E1B27 0%, #4A121A 60%, #2D080D 100%)',
                }}
              >
                {/* Gold Embossed Monogram */}
                <span className="font-serif text-champagne text-xs sm:text-sm font-bold tracking-tighter">
                  M&amp;R
                </span>
                {/* Delicate outer dotted ring */}
                <div className="absolute inset-1 rounded-full border border-champagne/40 border-dashed" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tap Cue Hint Overlay (Disappears smoothly on tap) */}
        {!isUnwrapped && (
          <div className="absolute bottom-6 sm:bottom-8 inset-x-0 flex flex-col items-center justify-center z-30 pointer-events-none">
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-charcoal/70 backdrop-blur-md border border-champagne/50 shadow-md">
              <span className="w-2 h-2 rounded-full bg-champagne animate-ping" />
              <p className="font-serif text-[11px] sm:text-xs tracking-[0.2em] uppercase text-ivory font-medium">
                Tap to Untie &amp; Open
              </p>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
