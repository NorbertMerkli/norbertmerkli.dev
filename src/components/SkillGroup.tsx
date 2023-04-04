import { SkillSet, Tech } from "@/components/svg/logos";
import { PropsWithChildren } from "react";

type SkillGroupProps = PropsWithChildren & {
  skills: Tech[];
  title: string;
};

export const SkillGroup = (props: SkillGroupProps) => (
  <article className="skill-group">
    <SkillSet skills={props.skills} />
    <h2>{props.title}</h2>
    <p>{props.children}</p>
  </article>
);
