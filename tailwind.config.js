/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        infinite: "fadeIn 2s infinite",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".scrollbar-transparent::-webkit-scrollbar": {
          width: "8px",
        },
        ".scrollbar-transparent::-webkit-scrollbar-track": {
          background: "transparent",
        },
        ".scrollbar-transparent::-webkit-scrollbar-thumb": {
          background: "rgba(0, 0, 0, 0)", // Adjust the color and transparency here
          borderRadius: "4px",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
    require("tailwind-clip-path"),
  ],
};
