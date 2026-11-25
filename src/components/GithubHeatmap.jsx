import { useEffect, useMemo, useRef, useState } from "react";
import { play } from "ascii-magic-art/runtime/player.js";
import { meta, createGitHubHeatmap } from "./arts/github-heatmap.js";

export function GithubHeatmap() {
  const ref = useRef(null);
  const [stats, setStats] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchGitHubStats() {
      try {
        const response = await fetch(
          "https://portfolio-1-kappa-azure.vercel.app/api/github",
        );

        if (!response.ok) {
          throw new Error("Could not fetch GitHub statistics.");
        }

        const data = await response.json();

        if (!data.success) {
          throw new Error(data.message || "GitHub request failed.");
        }

        setStats(data);
      } catch (err) {
        setError(err.message);
      }
    }

    fetchGitHubStats();
  }, []);

  const piece = useMemo(() => {
    if (!stats) return null;

    return {
      meta,
      default: () => createGitHubHeatmap(stats),
    };
  }, [stats]);

  useEffect(() => {
    if (!ref.current || !piece) return;

    return play(ref.current, piece, {
      look: { look: "squares", gamma: 0.55 },
    });
  }, [piece]);

  if (error) {
    return <p className="text-red-400">{error}</p>;
  }

  if (!stats) {
    return <p className="text-gray-400">Loading GitHub activity...</p>;
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

      <div className="flex justify-end ">
        <a
          href="https://github.com/SayyadShekshavali"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-white hover:underline"
        >
          Visit GitHub Profile ↗
        </a>
      </div>
    </div>
  );
}
