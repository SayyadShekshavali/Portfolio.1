import { Grid, palette } from "ascii-magic-art/lib/kit.js";

export const meta = {
  slug: "github-heatmap",
  name: "GitHub Activity",
  category: "live-data",
  note: "GitHub contribution statistics",
  tags: ["github", "heatmap", "activity"],
  cols: 112,
  rows: 14,
  fps: 30,
  palette: palette([
    "#e6edf3",
    "#8b949e",
    "#21262d",
    "#450a0a",
    "#991b1b",
    "#dc2626",
    "#f87171",
    "#ffffff",
    "#30363d",
  ]),
};

const WEEKS = 52;
const X0 = 6;
const Y0 = 2;

export function createGitHubHeatmap(stats) {
  const g = new Grid(meta.cols, meta.rows);

  const totalContributions = Number(stats.totalContributions) || 0;

  const totalRepos = Number(stats.totalRepos) || 0;
  const totalStars = Number(stats.totalStars) || 0;

  const N = WEEKS * 7;
  const speed = 60;

  // Generate decorative activity levels.
  const levels = Array.from({ length: N }, () => {
    const value = Math.random();

    if (value < 0.25) return 0;
    if (value < 0.5) return 1;
    if (value < 0.72) return 2;
    if (value < 0.9) return 3;

    return 4;
  });

  return (t) => {
    g.clear();

    const elapsed = Math.max(0, t);
    const upto = Math.min(N, Math.floor(elapsed * speed));

    // Top statistics.
    g.text(
      X0,
      0,
      `${totalContributions.toLocaleString("en-US")} contributions`,
      "0",
    );

    g.text(X0 + 36, 0, `${totalRepos} repositories`, "6");

    // 52-week activity grid.
    // Same positioning as LeetCode.
    for (let d = 0; d < N; d++) {
      const week = Math.floor(d / 7);
      const dayOfWeek = d % 7;

      const x = X0 + week * 2;
      const y = Y0 + dayOfWeek;

      if (d < upto) {
        const fresh = upto - d;
        const color = fresh < 3 ? "7" : String(2 + levels[d]);

        g.set(x, y, "■", color);
      } else {
        g.set(x, y, "■", "2");
      }
    }

    // Weekday labels.
    ["", "Mon", "", "Wed", "", "Fri", ""].forEach((label, i) => {
      if (label) {
        g.text(1, Y0 + i, label, "1");
      }
    });

    // GitHub footer.
    const footerY = Y0 + 8;

    g.text(X0, footerY, "GitHub activity", "1");

    g.text(X0, footerY + 2, "Repositories", "1");
    g.text(X0 + 13, footerY + 2, String(totalRepos), "6");

    g.text(X0 + 27, footerY + 2, "Total stars", "1");
    g.text(X0 + 38, footerY + 2, String(totalStars), "6");

    // Activity legend.
    const legendX = meta.cols - 26;

    g.text(legendX, footerY, "Less", "1");

    for (let k = 0; k < 5; k++) {
      g.set(legendX + 5 + k * 2, footerY, "■", String(2 + k));
    }

    g.text(legendX + 16, footerY, "More", "1");

    return g.frame();
  };
}
