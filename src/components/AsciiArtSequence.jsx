import React, { useEffect, useState } from "react";
import { RainforestFallsMist } from "./arts/RainforestFallsMist.jsx";
import { HarbourNeonSkylineArt } from "./arts/HarbourNeonSkylineArt.jsx";
import { LivingRootBridge } from "./arts/LivingRootBridge.jsx";

const artworks = [RainforestFallsMist, HarbourNeonSkylineArt, LivingRootBridge];

export default function AsciiArtSequence() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % artworks.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const ActiveArtwork = artworks[activeIndex];

  return (
    <div className="relative w-full overflow-hidden">
      <div key={activeIndex} className="ascii-art-transition">
        <ActiveArtwork />
      </div>
    </div>
  );
}
