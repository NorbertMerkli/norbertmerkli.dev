import { SkillGroupContent } from "@/content/skills";
import { PassiveIcon } from "./svg";

type SkillGroupProps = {
  content: SkillGroupContent;
};

export const SkillGroup = ({ content }: SkillGroupProps) => (
  <article className="flex flex-col gap-6 text-center">
    <div className="flex flex-row justify-center gap-4">
      {content.skills.map((skill) => (
        <PassiveIcon key={skill} icon={skill} />
      ))}
    </div>
    <h2 className="font-serif text-xl text-primary dark:text-white">
      {content.title ? content.title : content.skills.join(", ")}
    </h2>
    <p>{content.description}</p>
  </article>
);
