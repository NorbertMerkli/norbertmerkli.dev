import { IconName } from "@components/svg";

export type ProjectSummary = {
  name: string;
  description: string;
  skills: IconName[];
  url: string;
  repositoryLink: string;
};

export const projects: ProjectSummary[] = [
  {
    name: "norbertmerkli.dev",
    description: "My developer portfolio. You are watching it right now.",
    skills: ["TypeScript", "React", "Next", "TailwindCSS"],
    url: "https://norbertmerkli.dev",
    repositoryLink: "https://github.com/NorbertMerkli/norbertmerkli.dev",
  },
];
