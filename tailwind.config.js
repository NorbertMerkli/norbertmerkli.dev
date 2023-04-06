const { fontFamily } = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        serif: ["Libre Baskerville", ...fontFamily.serif],
        sans: ["Nunito", ...fontFamily.sans],
      },
      colors: {
        primary: colors.sky[500],
        secondary: colors.sky[200],
        black: colors.slate[700],
        darkgray: colors.slate[400],
        lightgray: colors.slate[300],
        white: colors.sky[50],
        gradient: {
          start: {
            light: colors.sky[100],
            dark: colors.slate[800],
          },
          end: {
            light: colors.slate[100],
            dark: colors.slate[700],
          },
        },
      },
    },
  },
  plugins: [],
};
