/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#7B2CBF",
        "secondary": "#C77DFF",

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
  plugins: [],
}
