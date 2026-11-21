const LEETCODE_API = "https://leetcode.com/graphql/";
const USERNAME = "SayyadShekshavali";

export async function getLeetCodeDashboard(req, res) {
  const query = `
    query userProfile($username: String!) {
      matchedUser(username: $username) {
        username
        submitStats {
          acSubmissionNum {
            difficulty
            count
            submissions
          }
        }
        userCalendar {
          streak
          submissionCalendar
        }
      }
    }
  `;

  try {
    const response = await fetch(LEETCODE_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Referer: "https://leetcode.com/",
      },
      body: JSON.stringify({
        query,
        variables: { username: USERNAME },
      }),
    });

    if (!response.ok) {
      throw new Error(`LeetCode HTTP error: ${response.status}`);
    }

    const result = await response.json();

    if (result.errors?.length) {
      throw new Error(result.errors.map((e) => e.message).join("; "));
    }

    const profile = result.data?.matchedUser;

    if (!profile) {
      return res.status(404).json({
        success: false,
        message: "LeetCode profile not found.",
      });
    }

    const stats = profile.submitStats.acSubmissionNum;

    const solved = Object.fromEntries(
      stats
        .filter((item) => item.difficulty !== "All")
        .map((item) => [item.difficulty.toLowerCase(), item.count]),
    );

    const calendar = JSON.parse(
      profile.userCalendar.submissionCalendar || "{}",
    );

    const totalSubmissions = Object.values(calendar).reduce(
      (total, count) => total + Number(count),
      0,
    );
    const dailySubmissions = Object.entries(calendar)
      .map(([timestamp, count]) => ({
        date: new Date(Number(timestamp) * 1000).toISOString().slice(0, 10),
        submissions: Number(count),
      }))
      .sort((a, b) => a.date.localeCompare(b.date));

    const activeDates = Object.entries(calendar)
      .filter(([, count]) => Number(count) > 0)
      .map(([timestamp]) => new Date(Number(timestamp) * 1000))
      .sort((a, b) => a - b);

    let maxStreak = 0;
    let currentStreak = 0;
    let previousDate = null;

    for (const date of activeDates) {
      const day = Date.UTC(
        date.getUTCFullYear(),
        date.getUTCMonth(),
        date.getUTCDate(),
      );

      const difference = previousDate ? (day - previousDate) / 86400000 : null;

      currentStreak = difference === 1 ? currentStreak + 1 : 1;
      maxStreak = Math.max(maxStreak, currentStreak);
      previousDate = day;
    }

    res.json({
      success: true,
      username: profile.username,
      totalSubmissions,
      maxStreak,
      dailySubmissions,
      solved: {
        easy: solved.easy || 0,
        medium: solved.medium || 0,
        hard: solved.hard || 0,
        total: (solved.easy || 0) + (solved.medium || 0) + (solved.hard || 0),
      },
    });
  } catch (error) {
    console.error("LeetCode stats error:", error);

    res.status(500).json({
      success: false,
      message: "Unable to fetch LeetCode statistics.",
      error: error.message,
    });
  }
}
