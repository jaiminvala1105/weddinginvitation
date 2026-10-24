import { useEffect, useRef, useState, useCallback } from 'react';

interface MusicControllerProps {
  playRequested: boolean;
}

export function MusicController({ playRequested }: MusicControllerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeIntervalRef = useRef<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStartedOnce, setHasStartedOnce] = useState(false);
  const [isAudioAvailable, setIsAudioAvailable] = useState(true);

  const clearFade = () => {
    if (fadeIntervalRef.current !== null) {
      window.clearInterval(fadeIntervalRef.current);
      fadeIntervalRef.current = null;
    }
  };

  const fadeIn = useCallback((targetVolume = 0.25, durationMs = 1200) => {
    const audio = audioRef.current;
    if (!audio) return;
    clearFade();

    audio.volume = 0;
    const stepTime = 50;
    const steps = Math.max(1, Math.floor(durationMs / stepTime));
    const stepVolume = targetVolume / steps;

    fadeIntervalRef.current = window.setInterval(() => {
      if (!audioRef.current) {
        clearFade();
        return;
      }
      const nextVol = Math.min(targetVolume, audioRef.current.volume + stepVolume);
      audioRef.current.volume = nextVol;
      if (nextVol >= targetVolume) {
        clearFade();
      }
    }, stepTime);
  }, []);

  const playAudio = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
          fadeIn(0.25, 1200);
        })
        .catch(() => {
          setIsPlaying(false);
        });
    }
  }, [fadeIn]);

  const pauseAudio = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    clearFade();
    audio.pause();
    setIsPlaying(false);
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  };

  // Create single audio instance
  useEffect(() => {
    const audio = new Audio('/audio/wedding-instrumental.mp3');
    audio.loop = true;
    audio.preload = 'metadata';
    audio.volume = 0.25;

    const handleError = () => {
      setIsAudioAvailable(false);
      setIsPlaying(false);
    };

    const handleEnded = () => {
      setIsPlaying(false);
    };

    audio.addEventListener('error', handleError);
    audio.addEventListener('ended', handleEnded);
    audioRef.current = audio;

    return () => {
      clearFade();
      audio.removeEventListener('error', handleError);
      audio.removeEventListener('ended', handleEnded);
      audio.pause();
      audio.src = '';
      audioRef.current = null;
    };
  }, []);

  // Trigger playback when requested from Explore Invitation
  useEffect(() => {
    if (playRequested && !hasStartedOnce && isAudioAvailable) {
      setHasStartedOnce(true);
      playAudio();
    }
  }, [playRequested, hasStartedOnce, isAudioAvailable, playAudio]);

  if (!isAudioAvailable) {
    return null;
  }

  // Floating music toggle matching ivory, champagne-gold, and maroon theme
  return (
    <div
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 pointer-events-auto"
      role="region"
      aria-label="Background music controls"
    >
      <button
        type="button"
        onClick={togglePlay}
        className="group relative flex items-center gap-2.5 px-3 py-2 sm:px-3.5 sm:py-2 rounded-full border border-champagne/45 bg-[#F8F1E7]/90 md:bg-[#FFFCF7]/90 backdrop-blur-md shadow-md text-charcoal transition-all duration-300 hover:border-champagne/90 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne cursor-pointer select-none"
        aria-label={isPlaying ? 'Pause background music' : 'Play background music'}
        aria-pressed={isPlaying}
        title={isPlaying ? 'Pause music' : 'Play music'}
      >
        {/* Animated equalizer bars / music note indicator */}
        <div className="flex items-end justify-center gap-0.5 h-3.5 w-3.5" aria-hidden="true">
          <span
            className={`w-0.5 bg-maroon rounded-full transition-all duration-300 ${
              isPlaying ? 'animate-pulse h-3' : 'h-1.5 opacity-60'
            }`}
          />
          <span
            className={`w-0.5 bg-champagne-dark rounded-full transition-all duration-300 delay-75 ${
              isPlaying ? 'animate-pulse h-3.5' : 'h-2.5 opacity-60'
            }`}
          />
          <span
            className={`w-0.5 bg-maroon rounded-full transition-all duration-300 delay-150 ${
              isPlaying ? 'animate-pulse h-2' : 'h-1.5 opacity-60'
            }`}
          />
        </div>

        {/* Text label */}
        <span className="font-serif text-[11px] sm:text-xs tracking-wider text-charcoal uppercase">
          {isPlaying ? 'Music On' : 'Music Off'}
        </span>

        {/* Subtle glowing ring indicator when playing */}
        {isPlaying && (
          <span
            className="absolute inset-0 rounded-full border border-champagne/40 animate-ping pointer-events-none opacity-40"
            aria-hidden="true"
          />
        )}
      </button>
    </div>
  );
}
