import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { UpArrow } from "./svg/icons";

export const Logo = () => {
  const targetID = "#page-top";
  const scrollProgressThreshold = 0.2;

  const { scrollYProgress } = useScroll();
  const [target, setTarget] = useState("");

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    if (value > scrollProgressThreshold && target !== targetID)
      setTarget(targetID);
    if (value < scrollProgressThreshold && target === targetID) setTarget("");
  });

  return (
    <>
      <a
        href={target}
        className={
          "inline-flex h-8 w-8 items-center justify-center rounded-lg border-2 border-black dark:border-white" +
          (target ? " pointer-events-auto" : " pointer-events-none")
        }
        tabIndex={target ? 0 : -1}
        aria-label="Back to the top of the page"
        title="Back to the top of the page"
      >
        <svg
          className="h-4 w-4 fill-primary dark:fill-secondary"
          fillRule="evenodd"
          strokeLinejoin="round"
          strokeMiterlimit="2"
          clipRule="evenodd"
          viewBox="0 0 24 22"
        >
          <path
            fillRule="nonzero"
            d="M17.278 21.058 5.318 4.023H5.21v11.609c0 .9.032 1.61.095 2.132s.198.927.405 1.215c.207.288.495.477.864.567.369.09.85.144 1.444.162v1.08H0v-1.08c.666-.018 1.201-.076 1.606-.175.405-.1.72-.284.945-.554.225-.27.374-.652.446-1.147.072-.495.108-1.165.108-2.011V4.968c0-.756-.036-1.381-.108-1.876-.072-.495-.207-.887-.405-1.175a1.57 1.57 0 0 0-.85-.607c-.37-.117-.86-.194-1.472-.23V0h7.532l10.88 15.605h.108V5.157c0-.882-.032-1.588-.095-2.12-.063-.53-.198-.94-.405-1.228a1.446 1.446 0 0 0-.864-.567c-.369-.09-.85-.144-1.444-.162V0H24v1.08c-.666.018-1.201.077-1.606.176-.405.099-.72.283-.945.553-.225.27-.374.657-.446 1.161-.072.504-.108 1.17-.108 1.998v16.09h-3.617Z"
          />
        </svg>
      </a>
      <BackToTopButton target={target} />
    </>
  );
};

const BackToTopButton = ({ target }: { target: string }) => (
  <a
    href={target}
    className={
      "icon-container fixed right-6 border border-primary bg-primary shadow-lg shadow-black/50 duration-200 hover:border-white dark:shadow-[#000]/50 sm:right-8" +
      (target ? " bottom-6 sm:bottom-8" : " -bottom-12")
    }
    aria-label="Back to the top of the page"
    title="Back to the top of the page"
  >
    <UpArrow />
  </a>
);
