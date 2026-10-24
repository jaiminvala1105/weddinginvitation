import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { RibbonWrapper } from './RibbonWrapper';
import { WelcomeReveal } from './WelcomeReveal';

export interface EntranceProps {
  onOpen?: () => void;
  onExplore?: () => void;
}

export function Entrance({ onOpen, onExplore }: EntranceProps = {}) {
  const [isUnwrapped, setIsUnwrapped] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [ribbonGone, setRibbonGone] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const ribbonDuration = prefersReducedMotion ? 0.01 : 1.35;
  const welcomeDelay = prefersReducedMotion ? 0.05 : 0.85;

  const handleUnwrap = useCallback(() => {
    if (isUnwrapped) return;
    setIsUnwrapped(true);
    onOpen?.();
  }, [isUnwrapped, onOpen]);

  useEffect(() => {
    if (!isUnwrapped) return;
    const welcomeTimer = setTimeout(() => setShowWelcome(true), welcomeDelay * 1000);
    const ribbonTimer = setTimeout(
      () => setRibbonGone(true),
      (ribbonDuration + (prefersReducedMotion ? 0.05 : 0.2)) * 1000,
    );
    return () => {
      clearTimeout(welcomeTimer);
      clearTimeout(ribbonTimer);
    };
  }, [isUnwrapped, welcomeDelay, ribbonDuration, prefersReducedMotion]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (!isUnwrapped && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault();
        handleUnwrap();
      }
    },
    [isUnwrapped, handleUnwrap],
  );

  return (
    <section
      id="entrance"
      className="relative w-full min-h-dvh overflow-hidden bg-charcoal-deep select-none flex items-center justify-center"
      aria-label="Wedding invitation entrance"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] rounded-full opacity-20"
          style={{
            background:
              'radial-gradient(ellipse, rgba(201,169,110,0.4) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full opacity-10"
          style={{
            background:
              'radial-gradient(ellipse, rgba(201,169,110,0.25) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Video or static background (revealed on unwrapping) */}
      <AnimatePresence>
        {isUnwrapped && (
          <motion.div
            className="absolute inset-0 z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: prefersReducedMotion ? 0.01 : 1.2,
              delay: prefersReducedMotion ? 0 : 0.2,
            }}
          >
            <VideoBackground />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Ribbon-wrapped Invitation Presentation */}
      {!ribbonGone && (
        <RibbonWrapper
          isUnwrapped={isUnwrapped}
          onUnwrap={handleUnwrap}
          onKeyDown={handleKeyDown}
        />
      )}

      {/* Welcome content */}
      <AnimatePresence>
        {showWelcome && <WelcomeReveal onExplore={onExplore} />}
      </AnimatePresence>

      {/* Bottom gradient blend into warm ivory foundation */}
      <div
        className="absolute bottom-0 inset-x-0 h-24 sm:h-32 pointer-events-none z-[8] bg-gradient-to-b from-transparent to-[#F8F1E7] md:to-[#FFFCF7] opacity-60"
        aria-hidden="true"
      />
    </section>
  );
}

function VideoBackground() {
  const [videoFailed, setVideoFailed] = useState(false);

  if (videoFailed) {
    return <StaticFallback />;
  }

  return (
    <>
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/royal-entrance.mp4"
        autoPlay
        muted
        loop
        playsInline
        onError={() => setVideoFailed(true)}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(180deg, rgba(26,23,20,0.72) 0%, rgba(26,23,20,0.45) 45%, rgba(26,23,20,0.55) 75%, rgba(26,23,20,0.85) 100%),
            radial-gradient(ellipse at 50% 50%, transparent 25%, rgba(26,23,20,0.45) 100%)
          `,
        }}
      />
    </>
  );
}

function StaticFallback() {
  return (
    <div
      className="absolute inset-0"
      style={{
        background: `
          radial-gradient(ellipse at 50% 25%, rgba(201,169,110,0.14) 0%, transparent 55%),
          radial-gradient(ellipse at 30% 75%, rgba(201,169,110,0.07) 0%, transparent 45%),
          radial-gradient(ellipse at 70% 65%, rgba(201,169,110,0.07) 0%, transparent 45%),
          linear-gradient(180deg, #1A1714 0%, #2A2520 45%, #1A1714 100%)
        `,
      }}
      aria-hidden="true"
    />
  );
}
