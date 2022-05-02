const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "planet-benson-2": ["PlanetBenson2", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#E7F8F9",
          100: "#D2F1F4",
          200: "#A5E4E8",
          300: "#74D5DC",
          400: "#48C8D1",
          500: "#2DAAB3",
          600: "#24888F",
          700: "#1B656A",
          800: "#124649",
          900: "#092325",
        },
        secondary: colors.pink,
      },
    },
  },
  plugins: [],
};
