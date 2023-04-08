"use client";

import {
  PropsWithChildren,
  createContext,
  useState,
  useEffect,
  useCallback,
} from "react";

export const ThemeContext = createContext({});

export type ThemeContextType = {
  isDark: boolean;
  switchTheme: () => void;
};

function getTheme(): boolean {
  const lastTheme = localStorage.theme;

  const darkTheme =
    lastTheme === undefined
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
      : lastTheme === "dark";

  darkTheme
    ? document.documentElement.classList.add("dark")
    : document.documentElement.classList.remove("dark");

  return darkTheme;
}

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [isDark, setDark] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    setDark(getTheme());
  }, []);

  const switchTheme = useCallback(
    () =>
      setDark((lastValue) => {
        const newValue = !lastValue;

        if (newValue) {
          localStorage.theme = "dark";
          document.documentElement.classList.add("dark");
        } else {
          localStorage.theme = "light";
          document.documentElement.classList.remove("dark");
        }

        return newValue;
      }),
    []
  );

  return (
    <ThemeContext.Provider value={{ isDark, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
