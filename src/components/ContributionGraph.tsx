import { Suspense } from "react";

export const ContributionGraph = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="inline-flex flex-col gap-1 md:gap-2">
        <Suspense fallback={<Loading />}>
          {/* @ts-expect-error Async Server Component */}
          <Graph />
        </Suspense>
      </div>
    </div>
  );
};

const Loading = ({ error }: { error?: Error }) => {
  const placeholderValues: number[] = new Array(53 * 7).fill(0);

  return (
    <>
      <ul className="inline-grid grid-flow-col grid-rows-7 gap-[2px] lg:gap-1">
        {placeholderValues.map((value, i) => (
          <li key={i}>
            <div
              className={
                "graph-cell " +
                [
                  "bg-white dark:bg-gradient-end-dark",
                  "bg-sky-300 dark:bg-sky-700",
                  "bg-sky-500 dark:bg-sky-500",
                  "bg-sky-700 dark:bg-sky-300",
                  "bg-sky-900 dark:bg-white",
                ][value]
              }
            ></div>
          </li>
        ))}
      </ul>
      <div className="flex flex-row items-center justify-between text-xs text-darkgray md:text-sm">
        <p>
          {error ? error.message : "Loading cotribution data from GitHub..."}
        </p>
      </div>
    </>
  );
};

const Graph = async () => {
  try {
    const { dailyContributions, totalContributions } =
      await getContributionData();

    return (
      <>
        <ul className="inline-grid grid-flow-col grid-rows-7 gap-[2px] lg:gap-1">
          {dailyContributions.map((contributionData, i) => (
            <li key={i}>
              <div
                className={
                  "graph-cell " +
                  [
                    "bg-white dark:bg-gradient-end-dark",
                    "bg-sky-300 dark:bg-sky-700",
                    "bg-sky-500 dark:bg-sky-500",
                    "bg-sky-700 dark:bg-sky-300",
                    "bg-sky-900 dark:bg-white",
                  ][contributionData]
                }
              ></div>
            </li>
          ))}
        </ul>
        <div className="flex flex-row items-center justify-between text-xs text-darkgray md:text-sm">
          <p>{totalContributions} contributions in the last year</p>
          <section className="inline-flex flex-row items-center gap-2">
            <p>Less</p>
            <div className="inline-flex flex-row items-center gap-[2px] lg:gap-1">
              <div className="graph-cell bg-white dark:bg-gradient-end-dark"></div>
              <div className="graph-cell bg-sky-300 dark:bg-sky-700"></div>
              <div className="graph-cell bg-sky-500 dark:bg-sky-500"></div>
              <div className="graph-cell bg-sky-700 dark:bg-sky-300"></div>
              <div className="graph-cell bg-sky-900 dark:bg-white"></div>
            </div>
            <p>More</p>
          </section>
        </div>
      </>
    );
  } catch (error) {
    return <Loading error={error as Error} />;
  }
};

function scrapeDailyContributions(markup: string): number[] {
  const matches = [
    ...markup.matchAll(/data-date="\d{4}-\d{2}-\d{2}" data-level="\d/g),
  ];

  if (matches.length === 0)
    throw new Error("Missing contribution details in the GitHub response");

  const dailyContributions = matches.map((match) => {
    const matchValue = match[0];
    const contributionStat = matchValue.slice(-1);

    return Number.parseInt(contributionStat);
  });

  return dailyContributions;
}

function scrapeTotalContributionCount(markup: string): number {
  const match = markup.match(/\d+\s+contributions\s+in\s+the\s+last\s+year/);

  if (!match)
    throw new Error("Missing contribution summary in the GitHub response");

  const matchValue = match[0];
  const totalContributions = matchValue.split(" ")[0];

  return Number.parseInt(totalContributions as string);
}

async function getContributionData() {
  let responseStatus;

  try {
    let response = await fetch(
      "https://github.com/users/NorbertMerkli/contributions",
      { next: { revalidate: 60 * 60 * 24 } }
    );

    if (!response.ok) {
      responseStatus = response.status;

      throw new Error();
    }

    const markup = await response.text();

    return {
      dailyContributions: scrapeDailyContributions(markup),
      totalContributions: scrapeTotalContributionCount(markup),
    };
  } catch (error) {
    throw new Error(
      "Error while fetching contribution data from GitHub" +
        (responseStatus ? ` (status: ${responseStatus})` : "")
    );
  }
}