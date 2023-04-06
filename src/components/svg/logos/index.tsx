import * as Logo from "./logos";

export type Tech = keyof typeof Logo;

type SkillIconProps = { tech: Tech };

export const SkillIcon = ({ tech }: SkillIconProps) => {
  const LogoComponent = Logo[tech];

  return (
    <div className="skill-icon">
      <LogoComponent />
    </div>
  );
};

type SkillSetProps = { skills: Tech[] };

export const SkillSet = ({ skills }: SkillSetProps) => (
  <div className="skill-set">
    {skills.map((skill) => (
      <SkillIcon key={skill} tech={skill} />
    ))}
  </div>
);
