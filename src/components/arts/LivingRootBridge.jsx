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
      className="block w-fit max-w-full overflow-hidden bg-black text-white"
      style={{
        fontSize: "clamp(3px, 0.7vw, 6px)",
        lineHeight: 1,
        fontFamily: "Menlo, Consolas, monospace",
        margin: 0,
        padding: 0,
      }}
    />
  );
}
