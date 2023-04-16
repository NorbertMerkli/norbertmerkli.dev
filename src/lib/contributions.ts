type ContributionData = {
  dailyContributions: number[];
  totalContributions: number;
};

export type GitHubResponse = {
  data?: ContributionData;
  error?: Error;
};

export async function fetchContributionData(): Promise<GitHubResponse> {
  try {
    let response = await fetch(
      "https://github.com/users/NorbertMerkli/contributions",
      {
        signal: AbortSignal.timeout(5000),
        next: { revalidate: 60 * 60 * 24 },
      }
    );

    if (!response.ok) throw new Error("ResponseError");

    const markup = await response.text();

    const data = {
      dailyContributions: scrapeDailyContributions(markup),
      totalContributions: scrapeTotalContributions(markup),
    };

    return { data, error: undefined };
  } catch (error) {
    return { data: undefined, error: error as Error };
  }
}

function scrapeDailyContributions(markup: string): number[] {
  const matches = [
    ...markup.matchAll(/data-date="\d{4}-\d{2}-\d{2}" data-level="\d/g),
  ];

  if (matches.length === 0) throw new Error("ScrapingError");

  const dailyContributions = matches.map((match) => {
    const matchValue = match[0];
    const contributionLevel = matchValue.slice(-1);

    return Number.parseInt(contributionLevel);
  });

  return dailyContributions;
}

function scrapeTotalContributions(markup: string): number {
  const match = markup.match(/\d+\s+contributions\s+in\s+the\s+last\s+year/);

  if (!match) throw new Error("ScrapingError");

  const matchValue = match[0];
  const totalContributions = matchValue.split(" ")[0];

  return Number.parseInt(totalContributions);
}
