import { useEffect, useRef } from "react";
import { play } from "ascii-magic-art/runtime/player.js";
import * as piece from "ascii-magic-art/pieces/harbour-neon-skyline.js";

export function HarbourNeonSkylineArt() {
  const ref = useRef(null);

  useEffect(() => {
    const cleanup = play(ref.current, piece);
    return typeof cleanup === "function" ? cleanup : undefined;
  }, []);

  return (
    <pre
      ref={ref}
      className="block w-fit max-w-full overflow-hidden"
      style={{
        fontSize: "clamp(3px, 7vw, 10px)",
        lineHeight: 1,
        fontFamily: "Menlo, Consolas, monospace",
        transform: "scaleX(1)",
        transformOrigin: "center center",
        margin: 0,
      }}
    />
  );
}
