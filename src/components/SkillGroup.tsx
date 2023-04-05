import { SkillSet } from "@/components/svg/logos";
import { SkillGroupContent } from "@/content/skills";

type SkillGroupProps = {
  content: SkillGroupContent;
};

export const SkillGroup = ({ content }: SkillGroupProps) => (
  <article className="skill-group">
    <SkillSet skills={content.skills} />
    <h2>{content.title ? content.title : content.skills.join(", ")}</h2>
    <p>{content.description}</p>
  </article>
);
