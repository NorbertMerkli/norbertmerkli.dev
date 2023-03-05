const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Libre Baskerville", ...fontFamily.serif],
        sans: ["Nunito", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
