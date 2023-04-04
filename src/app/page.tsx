import Image from "next/image";

import heroIllustration from "@public/hero-illustration.svg";
import { SkillGroup } from "@components/SkillGroup";

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
      <section className="page-section">
        <h3>Skills</h3>
        <SkillGroup skills={["HTML", "CSS"]} title={"HTML, CSS"}>
          I write semantic HTML to optimize sites for search engines and make
          them more accessible to everyone. I found it equally important to add
          responsive styling to make the content easily consumable on every
          screen size.
        </SkillGroup>
        <SkillGroup
          skills={["Bootstrap", "TailwindCSS"]}
          title={"Bootstrap, TailwindCSS"}
        >
          I used Bootstrap to speed up the implementation of responsive designs
          and solve cross-browser compatibility issues. It&apos;s a great
          framework, but I don&apos;t like the fact that I need to put a lot of
          unnecessary HTML elements into my code just because of the way it
          works. That&apos;s why I was so happy when I found TailwindCSS. Its
          unopinionated nature and postprocessing features gave me the
          flexibility and speed I expect from a CSS framework.
        </SkillGroup>
        <SkillGroup
          skills={["JavaScript", "TypeScript"]}
          title={"JavaScript, TypeScript"}
        >
          I like JavaScript (ES6+) because it lets me write elegant solutions
          with its many syntactic sugars. Although it&apos;s a great language,
          it doesn&apos;t provide type safety out of the box. This is where
          TypeScript comes into the picture. It ensures that I never ship
          type-related bugs into production.
        </SkillGroup>
        <SkillGroup skills={["ReactJS", "NextJS"]} title={"React, Next"}>
          With React I can write robust frontends fast due to its declarative
          style. JSX lets me keep my markup and logic together while the hooks
          give me an elegant solution to handle state changes. It is just a UI
          library, so I need Next. It sets up file-based routing, per-page
          rendering strategies, asset optimization, and a lot more
          automatically.
        </SkillGroup>
        <SkillGroup
          skills={["NodeJS", "NPM", "Yarn", "PNPM", "Webpack"]}
          title={"Node, package managers and Webpack"}
        >
          Although Node is a server-side runtime for JavaScript, I use it as a
          development environment for front-end projects. I like to manage my
          packages with Yarn because it&apos;s faster than NPM. Recently
          I&apos;m experimenting with PNPM. It handles disk space more
          effectively and it has great monorepo support. It seems a good choice
          for the future. When I&apos;m done, I use Webpack to bundle my code,
          transpile, and minify it for production. Off course, I don&apos;t use
          it directly. Although I made some experimentation with it, Next and
          even React provide reasonable default settings so I don&apos;t need to
          touch it. But that doesn&apos;t mean I&apos;m afraid of it...
        </SkillGroup>
        <SkillGroup
          skills={["Bash", "Linux", "Apple", "Docker", "Git", "GitHub"]}
          title={"Development environment and version control"}
        >
          I started on Linux, mainly with Debian-based distros. I still have it
          on my desktop machine. I used Bash every day for development tasks,
          therefore, the basic operations like file, folder manipulation, and
          navigation became second nature. Later I switched to MacOS because of
          its better support for commercial software. Git is the other tool I
          use every time for version control and I store my source code on
          GitHub. I know the basics but I never worked on enterprise-grade
          applications so I still have a lot to learn about workflow and
          collaboration. Last but not least there is Docker. I never had to
          build my own infrastructure for deployment so I use it only for
          instant isolated development environments.
        </SkillGroup>
        <SkillGroup
          skills={["SQL", "PostgreSQL", "Prisma"]}
          title={"SQL, PostgreSQL, Prisma"}
        >
          What kind of developer would I be without any knowledge of databases?
          Of course, I know SQL. I got my experience with PostgreSQL. I
          understand that a fixed schema and predefined relations make this type
          of data storage really powerful but migration between different types
          of databases or changing the schema can be extremely hard and painful.
          This is the reason I learned Prisma. An ORM that makes these tasks a
          lot easier. I don&apos;t even need to use SQL directly due to its
          auto-generated client library. As a full-stack developer who mainly
          concentrates on the front end, Prisma is a beautiful abstraction above
          the data layer in the stack.
        </SkillGroup>
        <SkillGroup skills={["ExpressJS", "JestJS"]} title={"Express, Jest"}>
          To be honest, these are the frameworks I rarely use. Nowadays,
          serverless architectures are really popular. As long as I don&apos;t
          need anything stateful on the backend, Next gives me everything I need
          out of the box. For this reason, I never had to use Express
          extensively. Maybe this will change in the future. Actually, I&apos;m
          planning to deepen my knowledge about the server side of the stack but
          until now I focused mainly on the front end. The other thing I have
          little experience with is Jest. I played with it because testing is an
          important part of the development process. I don&apos;t find it
          complicated. I know about its basic assertion functions and the way I
          can organize my tests so the report will be more readable. It would be
          easy to get familiar with the rest of the framework but I had more
          important things to learn first.
        </SkillGroup>
      </section>
    </>
  );
}
