"use client";

import {
  ThemeContext,
  ThemeContextType,
} from "@components/providers/ThemeProvider";
import { EventHandler, MouseEvent, TouchEvent, useContext } from "react";
import * as Icon from "./icons";

export type UIicon = keyof typeof Icon;

type InteractiveIconProps = {
  icon: UIicon;
  onClick: EventHandler<MouseEvent | TouchEvent>;
};

const IconButton = ({ icon, onClick }: InteractiveIconProps) => {
  const IconComponent = Icon[icon];

  return (
    <button className="icon-button" onClick={onClick}>
      <IconComponent />
    </button>
  );
};

export const ThemeSwitch = () => {
  const { isDark, switchTheme } = useContext(ThemeContext) as ThemeContextType;

  return (
    <IconButton
      icon={isDark ? "LightMode" : "DarkMode"}
      onClick={switchTheme}
    />
  );
};
