import { ThemeSwitch } from "@components/ThemeSwitch";

export const Navbar = () => (
  <div className="fixed top-0 z-50 w-full border-b border-lightgray bg-gradient-end-light px-2 shadow-md shadow-lightgray/50 dark:border-gradient-start-dark dark:bg-gradient-end-dark dark:shadow-gradient-start-dark/50">
    <nav className="safe-area flex h-14 flex-row items-center justify-between">
      <ThemeSwitch />
    </nav>
  </div>
);
