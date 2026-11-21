import { useEffect, useRef } from "react";
import { play } from "ascii-magic-art/runtime/player.js";
import * as piece from "ascii-magic-art/pieces/living-root-bridge.js";

export function LivingRootBridge() {
  const ref = useRef(null);

  useEffect(() => {
    const cleanup = play(ref.current, piece);

    return typeof cleanup === "function" ? cleanup : undefined;
  }, []);

  return (
    <pre
      ref={ref}
      className="w-full max-w-full overflow-hidden"
      style={{
        fontSize: "clamp(3px, 0.65vw, 10px)",
        lineHeight: 1,
        fontFamily: "Menlo, Consolas, monospace",
        margin: 0,
      }}
    />
  );
}
