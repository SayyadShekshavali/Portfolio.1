import { useEffect, useMemo, useRef, useState } from "react";
import { play } from "ascii-magic-art/runtime/player.js";

import { meta, createLeetCodeHeatmap } from "./leetcode-heatmap.js";

export function HeatmapGrid() {
  const ref = useRef(null);
  const [stats, setStats] = useState(null);
  const [error, setError] = useState("");

  // Fetch LeetCode data from your backend.
  useEffect(() => {
    async function fetchStats() {
      try {
        const response = await fetch(
          "https://portfolio-1-kappa-azure.vercel.app/api/leetcode",
        );

        if (!response.ok) {
          throw new Error("Could not fetch LeetCode statistics.");
        }

        const data = await response.json();

        if (!data.success) {
          throw new Error(data.message || "LeetCode request failed.");
        }

        setStats(data);
      } catch (err) {
        setError(err.message);
      }
    }

    fetchStats();
  }, []);

  // Build the piece object expected by the ASCII Magic Art player.
  const piece = useMemo(() => {
    if (!stats) return null;

    return {
      meta,
      default: () => createLeetCodeHeatmap(stats),
    };
  }, [stats]);

  // Start the animation once the data is ready.
  useEffect(() => {
    if (!ref.current || !piece) return;

    return play(ref.current, piece, {
      look: {
        look: "squares",
        gamma: 0.55,
      },
    });
  }, [piece]);

  if (error) {
    return <p>Unable to load LeetCode activity: {error}</p>;
  }

  if (!stats) {
    return <p>Loading LeetCode activity...</p>;
  }

  return (
    <div className="w-full min-w-0">
      <div className="w-full overflow-x-auto overscroll-x-contain pb-0 ">
        <pre
          ref={ref}
          className="block w-max min-w-full"
          style={{
            fontSize: "clamp(9px, 2vw, 19px)",
            lineHeight: 1.2,
            fontFamily: "Menlo, Consolas, monospace",
            whiteSpace: "pre",
            margin: 0,
          }}
        />
      </div>

      <div className="flex justify-end mt-3">
        <a
          href="https://leetcode.com/u/SayyadShekshavali/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs sm:text-sm text-green-400 hover:underline"
        >
          Visit LeetCode Profile ↗
        </a>
      </div>
    </div>
  );
}
