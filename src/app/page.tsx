import Image from "next/image";

import heroIllustration from "@public/hero-illustration.svg";
import { SkillGroup } from "@components/SkillGroup";
import { GitHub, LinkedIn } from "@/components/svg/logos/logos";
import { PageSection } from "@/components/PageSection";
import * as content from "@/content";

export default function Home() {
  return (
    <>
      <section className="page-section bg-gradient h-screen">
        <h1>
          I&apos;m <span className="text-primary">Norbert</span> Merkli
        </h1>
        <h2 className="text-darkgray dark:text-white">
          A full-stack web developer.
        </h2>
        <p className=" my-8 text-center text-xl">
          Welcome to my site. Here I showcase my skills and share what I&apos;m
          learning about different technologies.
        </p>
        <Image src={heroIllustration} alt="Illustration of a developer" />
      </section>

      <PageSection title="Skills">
        <div className="flex flex-col gap-12">
          {content.skills.map((skill) => (
            <SkillGroup key={skill.description} content={skill} />
          ))}
        </div>
      </PageSection>

      <PageSection title="Contact">
        <h2 className="font-serif dark:text-white">Norbert Merkli</h2>
        <h4 className="text-darkgray dark:text-secondary">Szentgotthárd, HU</h4>
        <div className="flex flex-row justify-center gap-8 py-8">
          <a
            href="https://www.linkedin.com/in/norbert-merkli-588703250/"
            target="_blank"
            className="icon-button"
          >
            <LinkedIn />
          </a>
          <a
            href="https://github.com/NorbertMerkli"
            target="_blank"
            className="icon-button"
          >
            <GitHub />
          </a>
        </div>
      </PageSection>
    </>
  );
}
