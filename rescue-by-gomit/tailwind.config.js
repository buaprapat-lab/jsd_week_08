/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        flicker: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.3 },
        },
        heroGlow: {
          "0%, 100%": {
            filter:
              "drop-shadow(0 0 15px rgba(255, 255, 255, 0.8)) brightness(1.2)",
          },
          "50%": {
            filter:
              "drop-shadow(0 0 30px rgba(255, 255, 0, 0.9)) brightness(1.5)",
          },
        },
      },
      animation: {
        flicker: "flicker 0.15s infinite",
        heroGlow: "heroGlow 2s infinite",
      },
    },
  },
};
