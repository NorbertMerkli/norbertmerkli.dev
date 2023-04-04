import Image from "next/image";

import heroIllustration from "@public/hero-illustration.svg";

export default function Home() {
  return (
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
  );
}
