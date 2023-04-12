"use client";

import { ThemeSwitch } from "@components/ThemeSwitch";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { Logo } from "./Logo";

export const Navbar = () => {
  const scrollThreshold = 20;

  const { scrollY } = useScroll();
  const [isPageStart, setIsPageStart] = useState(scrollY.get() < 40);

  useMotionValueEvent(scrollY, "change", (value) => {
    if (scrollY.get() < scrollThreshold && !isPageStart) setIsPageStart(true);
    if (scrollY.get() > scrollThreshold && isPageStart) setIsPageStart(false);
  });

  return (
    <div
      className={
        "fixed top-0 z-50 w-full border-b border-lightgray shadow-md shadow-lightgray/50 duration-100 dark:border-gradient-start-dark dark:shadow-gradient-start-dark/50" +
        (isPageStart
          ? " border-none bg-transparent shadow-none"
          : " border-b bg-gradient-end-light shadow-md dark:bg-gradient-end-dark")
      }
    >
      <nav className="safe-area flex h-14 flex-row items-center justify-between">
        <Logo />
        <ThemeSwitch />
      </nav>
    </div>
  );
};
