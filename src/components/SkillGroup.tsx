import { SkillSet } from "@/components/svg/logos";
import { SkillGroupContent } from "@/content/skills";

type SkillGroupProps = {
  content: SkillGroupContent;
};

export const SkillGroup = ({ content }: SkillGroupProps) => (
  <article className="flex flex-col gap-6 text-center">
    <SkillSet skills={content.skills} />
    <h2 className="font-serif text-xl text-primary dark:text-white">
      {content.title ? content.title : content.skills.join(", ")}
    </h2>
    <p>{content.description}</p>
  </article>
);
