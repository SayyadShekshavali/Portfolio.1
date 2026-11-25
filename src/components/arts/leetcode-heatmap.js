import { Grid, palette } from "ascii-magic-art/lib/kit.js";

export const meta = {
  slug: "leetcode-heatmap",
  name: "LeetCode Activity",
  category: "live-data",
  note: "LeetCode submission activity",
  tags: ["leetcode", "heatmap", "activity"],
  cols: 112,
  rows: 14,
  fps: 30,
  palette: palette([
    "#e6edf3",
    "#8b949e",
    "#21262d",
    "#0e4429",
    "#006d32",
    "#26a641",
    "#39d353",
    "#ffffff",
    "#30363d",
  ]),
};

const WEEKS = 52;
const X0 = 6;
const Y0 = 2;
const DAY_MS = 86400000;

function dateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export function createLeetCodeHeatmap(stats) {
  const g = new Grid(meta.cols, meta.rows);

  // Convert the backend's daily activity into a date -> submissions lookup.
  const activity = new Map(
    (stats.dailySubmissions || []).map((item) => [
      item.date,
      Number(item.submissions),
    ]),
  );

  // Build the most recent 364 days.
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const startDate = new Date(today);
  startDate.setDate(today.getDate() - (WEEKS * 7 - 1));

  const days = [];

  for (let i = 0; i < WEEKS * 7; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);

    const key = dateKey(date);

    days.push({
      date: key,
      submissions: activity.get(key) || 0,
    });
  }

  const maxDaily = Math.max(1, ...days.map((day) => day.submissions));

  const levels = days.map((day) => {
    if (day.submissions === 0) return 0;

    if (day.submissions <= 2) return 2;
    if (day.submissions <= 5) return 3;
    return 4;
  });

  const cumulative = [];
  let total = 0;

  for (const day of days) {
    total += day.submissions;
    cumulative.push(total);
  }

  // Keep the same day-by-day animation.
  const speed = 60;
  const N = days.length;

  return (t) => {
    g.clear();

    const elapsed = Math.max(0, t);
    const upto = Math.min(N, Math.floor(elapsed * speed));

    const shown = upto > 0 ? cumulative[upto - 1] : 0;

    g.text(X0, 0, `${shown.toLocaleString("en-US")} submissions`, "0");

    g.text(X0 + 36, 0, `${stats.solved.total} problems solved`, "6");

    const startWeekday = startDate.getDay();

    for (let d = 0; d < N; d++) {
      const week = Math.floor((startWeekday + d) / 7);
      const dayOfWeek = (startWeekday + d) % 7;

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

    ["", "Mon", "", "Wed", "", "Fri", ""].forEach((label, i) => {
      if (label) g.text(1, Y0 + i, label, "1");
    });

    const footerY = Y0 + 8;

    g.text(X0, footerY, "LeetCode activity", "1");
    g.text(X0, footerY + 2, "Max streak", "1");
    g.text(X0 + 11, footerY + 2, `${stats.maxStreak} days`, "6");

    g.text(X0 + 27, footerY + 2, "Easy", "1");
    g.text(X0 + 33, footerY + 2, String(stats.solved.easy), "6");

    g.text(X0 + 43, footerY + 2, "Medium", "1");
    g.text(X0 + 52, footerY + 2, String(stats.solved.medium), "6");

    g.text(X0 + 65, footerY + 2, "Hard", "1");
    g.text(X0 + 71, footerY + 2, String(stats.solved.hard), "6");

    const legendX = meta.cols - 26;

    g.text(legendX, footerY, "Less", "1");

    for (let k = 0; k < 5; k++) {
      g.set(legendX + 5 + k * 2, footerY, "■", String(2 + k));
    }

    g.text(legendX + 16, footerY, "More", "1");

    return g.frame();
  };
}
