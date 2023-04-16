import { Suspense } from "react";

import { fetchContributionData, GitHubResponse } from "@lib/contributions";

export const ContributionGraph = async () => {
  const { data, error } = await fetchContributionData();

  return (
    <div className="flex items-center justify-center">
      <div className="inline-flex flex-col gap-1 md:gap-2">
        <Suspense fallback={<Graph />}>
          <Graph data={data} error={error} />
        </Suspense>
      </div>
    </div>
  );
};

const colorVariations = [
  "bg-white dark:bg-gradient-end-dark",
  "bg-sky-300 dark:bg-sky-700",
  "bg-sky-500 dark:bg-sky-500",
  "bg-sky-700 dark:bg-sky-300",
  "bg-sky-900 dark:bg-white",
];

type DataGridPropsType = {
  data: number[];
};

const DataGrid = ({ data }: DataGridPropsType) => {
  return (
    <ul className="inline-grid grid-flow-col grid-rows-7 gap-[2px] lg:gap-1">
      {data.map((value, i) => (
        <li key={i}>
          <div className={"graph-cell " + colorVariations[value]}></div>
        </li>
      ))}
    </ul>
  );
};

const placeholderData = new Array(53 * 7).fill(0);

const Graph = ({ data, error }: GitHubResponse) => {
  if (error)
    return (
      <>
        <DataGrid data={placeholderData} />
        <p className="caption">
          Error while fetching contribution data from GitHub
        </p>
      </>
    );

  if (data)
    return (
      <>
        <DataGrid data={data.dailyContributions} />
        <div className="caption flex flex-row items-center justify-between">
          <p>{data.totalContributions} contributions in the last year</p>
          <section className="inline-flex flex-row items-center gap-2">
            <p>Less</p>
            <div className="inline-flex flex-row items-center gap-[2px] lg:gap-1">
              {colorVariations.map((colorVariation) => (
                <div
                  key={colorVariation}
                  className={"graph-cell " + colorVariation}
                ></div>
              ))}
            </div>
            <p>More</p>
          </section>
        </div>
      </>
    );

  return (
    <>
      <DataGrid data={placeholderData} />
      <p className="caption">Fetching contribution data from GitHub...</p>
    </>
  );
};
