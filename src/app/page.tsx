import Image from "next/image";

import * as content from "@content/index";
import heroIllustration from "@public/hero-illustration.svg";
import { PageSection } from "@components/PageSection";
import { SkillGroup } from "@components/SkillGroup";
import { IconLink } from "@components/svg";
import { ContributionGraph } from "@/components/ContributionGraph";
import { ProjectCard } from "@/components/ProjectSummary";

export default function Home() {
  return (
    <>
      <header
        id="home"
        className="safe-area flex h-screen snap-start scroll-m-0 scroll-p-0 flex-col gap-8 pb-20 pt-6 lg:flex-row lg:gap-16"
      >
        <section className="flex-none self-center text-center lg:flex-1 lg:text-left">
          <h1 className="font-serif text-6xl sm:text-7xl">
            I&apos;m <span className="text-primary">Norbert</span> Merkli
          </h1>
          <h2 className="mt-4 text-xl text-darkgray dark:text-white">
            A full-stack web developer.
          </h2>
          <p className="my-8 text-xl">
            This is my site where I showcase my skills and share what I&apos;m
            learning about different technologies.
          </p>
          <a
            href="#contact"
            className="primary-button"
            aria-label="Go to the contact section"
            title="Go to the contact section"
          >
            Contact me
          </a>
        </section>
        <div className="relative z-0 flex-1">
          <Image
            fill={true}
            src={heroIllustration}
            alt="Illustration of a developer"
            priority={true}
          />
        </div>
      </header>

      <PageSection id="skills" title="Skills">
        <div className="grid grid-cols-2 grid-rows-[8] gap-12 lg:gap-4">
          {content.skills.map((skill) => (
            <SkillGroup key={skill.description} content={skill} />
          ))}
        </div>
      </PageSection>

      <PageSection id="projects" title="Projects">
        {/* @ts-expect-error Async Server Component */}
        <ContributionGraph />
        <div className="mt-12 flex flex-col gap-6">
          {content.projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </PageSection>

      <PageSection id="contact" title="Contact">
        <h2 className="text-center font-serif text-xl dark:text-white">
          Norbert Merkli
        </h2>
        <h3 className="text-center text-darkgray dark:text-secondary">
          Szentgotthárd, HU
        </h3>
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
