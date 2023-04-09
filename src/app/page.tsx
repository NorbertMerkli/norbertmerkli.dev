import Image from "next/image";

import * as content from "@content/index";
import heroIllustration from "@public/hero-illustration.svg";
import { PageSection } from "@components/PageSection";
import { SkillGroup } from "@components/SkillGroup";
import { IconLink } from "@components/svg";

export default function Home() {
  return (
    <>
      <header className="safe-area flex h-screen flex-col gap-8 py-14 lg:flex-row lg:gap-16">
        <section className="flex-none self-center text-center lg:flex-1">
          <h1 className="font-serif text-6xl sm:text-7xl lg:text-left">
            I&apos;m <span className="text-primary">Norbert</span> Merkli
          </h1>
          <h2 className="mb-8 mt-4 text-xl text-darkgray dark:text-white lg:text-left">
            A full-stack web developer.
          </h2>
          <p className="text-xl lg:text-left">
            Welcome to my site. Here I showcase my skills and share what
            I&apos;m learning about different technologies.
          </p>
        </section>
        <div className="relative flex-1">
          <Image
            fill={true}
            src={heroIllustration}
            alt="Illustration of a developer"
            priority={true}
          />
        </div>
      </header>

      <PageSection title="Skills">
        <div className="flex flex-col gap-12">
          {content.skills.map((skill) => (
            <SkillGroup key={skill.description} content={skill} />
          ))}
        </div>
      </PageSection>

      <PageSection title="Contact">
        <h2 className="text-center font-serif text-xl dark:text-white">
          Norbert Merkli
        </h2>
        <h4 className="text-center text-darkgray dark:text-secondary">
          Szentgotthárd, HU
        </h4>
        <div className="flex flex-row justify-center gap-8 py-8">
          <IconLink
            icon="LinkedIn"
            href="https://www.linkedin.com/in/norbert-merkli-588703250/"
          />
          <IconLink icon="GitHub" href="https://github.com/NorbertMerkli" />
        </div>
      </PageSection>
    </>
  );
}
