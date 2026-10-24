import { useState, useEffect } from 'react';
import { Entrance } from './components/Entrance';
import { DateCardSection } from './components/DateCardSection';
import { CoupleIntroSection } from './components/CoupleIntroSection';
import { ReceptionDetailsSection } from './components/ReceptionDetailsSection';
import { VenueDirectionsSection } from './components/VenueDirectionsSection';
import { ClosingSection } from './components/ClosingSection';
import { MusicController } from './components/MusicController';

export default function App() {
  const [doorsOpened, setDoorsOpened] = useState(false);
  const [musicRequested, setMusicRequested] = useState(false);

  // Lock natural window scroll until the palace doors are tapped open
  useEffect(() => {
    if (!doorsOpened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [doorsOpened]);

  return (
    <main className="w-full bg-[#F8F1E7] md:bg-[#FFFCF7] text-charcoal min-h-dvh">
      {/* 1. Royal Palace Entrance */}
      <Entrance
        onOpen={() => {
          setDoorsOpened(true);
          setMusicRequested(true);
        }}
      />

      {/* 2. Reception Date Card */}
      <DateCardSection />

      {/* 3. Editorial Couple Introduction */}
      <CoupleIntroSection />

      {/* 4. Reception Details */}
      <ReceptionDetailsSection />

      {/* 5. Venue & Directions */}
      <VenueDirectionsSection />

      {/* 6. Closing Message & Return to Top */}
      <ClosingSection />

      {/* Persistent Background Music & Toggle */}
      <MusicController playRequested={musicRequested} />
    </main>
  );
}
