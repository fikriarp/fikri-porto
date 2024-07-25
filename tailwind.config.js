/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
      },
      clipPath: {
        hexagon:
          "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        frame:
          "polygon(0% 0%, 0% 100%, 2% 100%, 25% 25%, 75% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0%)",
      },
    },
  },
  plugins: [require("tailwind-clip-path")],
};
