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

  return (
    <div className="w-full flex justify-center items-center overflow-hidden">
      {artworks.map((Artwork, index) => (
        <div
          key={index}
          className={`w-full flex justify-center items-center ${
            activeIndex === index ? "block" : "hidden"
          }`}
        >
          <div className="w-fit max-w-full bg-black">
            <Artwork />
          </div>
        </div>
      ))}
    </div>
  );
}
