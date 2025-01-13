/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkGrey: "rgb(174 169 177);",
        primaryBlue: "rgb(96 166 231);",
        accent2: "rgb(179 208 242)",
        accent: "#60A6E7",
      },
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
      },
    },
  },
  plugins: [],
};
