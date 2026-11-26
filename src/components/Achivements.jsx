import React from "react";
import Radar from "./Radar.jsx";

const Achivements = () => {
  return (
    <section className="w-full px-0 py-10  ">
      <div className="max-w-[780px] mx-auto border-4 border-black">
        <h2 className="text-2xl font-semibold text-neutral-900 mb-6">
          Achievements
        </h2>

        <div
          className="m-10 "
          style={{ width: "100%", height: "400px", position: "relative" }}
        >
          <Radar
            color="#3ef09a"
            mode="sweep"
            speed={1}
            trail={0.35}
            scale={0.9}
            ringCount={6}
            spokeCount={12}
            targets={6}
            clutter={0.35}
            mouseInteraction
            ticks
            glow={1}
            tilt={0}
            centerX={0.5}
            centerY={0.5}
            brightness={1}
            gridOpacity={1}
            lineWidth={1}
            grain={0.03}
            fade={0}
            opacity={1}
            intro
            lightMode={false}
          />
        </div>
      </div>
    </section>
  );
};

export default Achivements;
