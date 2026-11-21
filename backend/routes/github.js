const USERNAME = "SayyadShekshavali";

async function githubGraphQL(query) {
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  const result = await response.json();

  if (!response.ok || result.errors) {
    throw new Error(
      result.errors?.[0]?.message || "GitHub GraphQL request failed",
    );
  }

  return result.data;
}

export async function getGitHubDashboard(req, res) {
  try {
    if (!process.env.GITHUB_TOKEN) {
      throw new Error("GITHUB_TOKEN is missing from backend/.env");
    }

    const headers = {
      Accept: "application/vnd.github+json",
      "User-Agent": "Portfolio-Backend",
    };

    // Get public repository count
    const profileResponse = await fetch(
      `https://api.github.com/users/${USERNAME}`,
      { headers },
    );

    if (!profileResponse.ok) {
      throw new Error(`GitHub profile error: ${profileResponse.status}`);
    }

    const profile = await profileResponse.json();

    // Get repositories and total stars
    const reposResponse = await fetch(
      `https://api.github.com/users/${USERNAME}/repos?per_page=100&type=owner`,
      { headers },
    );

    if (!reposResponse.ok) {
      throw new Error(`GitHub repositories error: ${reposResponse.status}`);
    }

    const repositories = await reposResponse.json();

    const totalStars = repositories.reduce(
      (total, repo) => total + repo.stargazers_count,
      0,
    );

    // Get all contribution years
    const yearsData = await githubGraphQL(`
      query {
        user(login: "${USERNAME}") {
          contributionsCollection {
            contributionYears
          }
        }
      }
    `);

    const years = yearsData.user.contributionsCollection.contributionYears;

    // Fetch only the total contribution count for each year
    const yearQueries = years.map(
      (year) => `
        y${year}: user(login: "${USERNAME}") {
          contributionsCollection(
            from: "${year}-01-01T00:00:00Z"
            to: "${year}-12-31T23:59:59Z"
          ) {
            totalRepositoriesWithContributedCommits
            contributionCalendar {
              totalContributions
            }
          }
        }
      `,
    );

    const calendarData = await githubGraphQL(`
      query {
        ${yearQueries.join("\n")}
      }
    `);

    let totalContributions = 0;

    for (const year of years) {
      totalContributions +=
        calendarData[`y${year}`].contributionsCollection.contributionCalendar
          .totalContributions;
    }

    res.json({
      success: true,
      username: USERNAME,
      totalRepos: profile.public_repos,
      totalStars,
      totalContributions,
    });
  } catch (error) {
    console.error("GitHub stats error:", error);

    res.status(500).json({
      success: false,
      message: "Unable to fetch GitHub statistics.",
      error: error.message,
    });
  }
}
