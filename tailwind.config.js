/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#7B2CBF",
        "secondary": "#C77DFF",
        "borcol": "#846C9C"
      },
      fontFamily: {
        "monty": ["Montserrat", "sans-serif"],
      },
      screens: {
        "sm": {
          min: "300px",
          max: "640px"
        },
        "md": {
          min: "640px",
          max: "1280px"
        },
        "lg": {
          min: "1280px",
        }
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}
