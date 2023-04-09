import { ThemeSwitch } from "@components/ThemeSwitch";

export const Navbar = () => (
  <nav className="fixed top-0 flex h-14 w-full flex-row items-center justify-between px-2">
    <ThemeSwitch />
  </nav>
);
