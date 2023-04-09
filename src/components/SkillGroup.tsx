import { SkillGroupContent } from "@/content/skills";
import { PassiveIcon } from "./svg";

type SkillGroupProps = {
  content: SkillGroupContent;
};

export const SkillGroup = ({ content }: SkillGroupProps) => (
  <article className="card col-span-2 row-span-1 flex flex-col gap-6 text-center lg:col-span-1 lg:row-span-2">
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
