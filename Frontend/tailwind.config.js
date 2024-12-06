/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pandaWhite: "#F7F6F3",
        pandaBlack: "#1E1E1E",
        themeDarkGreen: "#16423C",
        themeGreen: "#6A9C89",
        themeCream: "#F3EADD",
        themePink: "#FFC1CC",
        themeRed: "#BC002D",
        themePurple: "#663854",
      },
      fontFamily: {
        Darumadrop: ["Darumadrop One", "sans-serif"],
      },
      textStroke: {
        black: "0.5px #1E1E1E",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-outline-black": {
          "-webkit-text-stroke": "0.5px #1E1E1E",
        },
      });
    },
  ],
  plugins: [require("tailwindcss-animate")],
};
