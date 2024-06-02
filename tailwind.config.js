/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line no-undef
const defaultTheme = require("tailwindcss/defaultTheme")

// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      grey: { DEFAULT: "#f5f7fb", dark: "#383e48", light: "#AAAAB3" },
      white: "#ffffff",
      pink: { DEFAULT: "#ff297c", dark: "#E6256C", light: "#ff297c66" },
      purple: "#E100B4",
    },
    screens: {
      sm: "320px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
}
