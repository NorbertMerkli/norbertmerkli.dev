import { ProjectSummary } from "@content/projects";
import { PassiveIcon } from "./svg";

type ProjectCardPropsType = {
  project: ProjectSummary;
};

export const ProjectCard = ({
  project: { name, description, skills, url, repositoryLink },
}: ProjectCardPropsType) => {
  return (
    <div className="flex flex-col gap-4 rounded-lg border border-lightgray p-4 dark:border-secondary">
      <h1 className="font-serif text-primary dark:text-white">{name}</h1>
      <p>{description}</p>
      <div className="flex flex-row gap-4">
        {skills.map((skill) => (
          <PassiveIcon key={skill} icon={skill} />
        ))}
      </div>
      <div className="button-row">
        <a href={url} target="_blank" className="primary-button">
          Watch it live
        </a>
        <a href={repositoryLink} target="_blank" className="outlined-button">
          Read the code
        </a>
      </div>
    </div>
  );
};
