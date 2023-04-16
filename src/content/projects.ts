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
    description: "My developer portfolio",
    skills: ["TypeScript", "React", "Next", "TailwindCSS"],
    url: "https://norbertmerkli.dev",
    repositoryLink: "https://github.com/NorbertMerkli/norbertmerkli.dev",
  },
  {
    name: "simple-chat",
    description: "A simple video-chat app",
    skills: ["TypeScript", "React", "Next", "TailwindCSS"],
    url: "https://simple-chat.norbertmerkli.dev",
    repositoryLink: "https://github.com/NorbertMerkli/simple-chat",
  },
  {
    name: "whiteboard",
    description: "A simple whiteboard app",
    skills: ["TypeScript", "React", "Next", "TailwindCSS"],
    url: "https://whiteboard.norbertmerkli.dev",
    repositoryLink: "https://github.com/NorbertMerkli/whiteboard",
  },
];
