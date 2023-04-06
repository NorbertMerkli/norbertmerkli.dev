"use client";

import { useContext } from "react";
import {
  ThemeContext,
  ThemeContextType,
} from "@components/providers/ThemeProvider";
import { IconButton } from "@components/svg/icons";

export const ThemeSwitch = () => {
  const { isDark, switchTheme } = useContext(ThemeContext) as ThemeContextType;

  return (
    <IconButton
      icon={isDark ? "LightMode" : "DarkMode"}
      onClick={switchTheme}
    />
  );
};
