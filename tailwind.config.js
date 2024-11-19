/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Poppins": ['"Poppins"', ...defaultTheme.fontFamily.sans],
      },
      colors : {
        "orange" : "#fcaf4a",
        "cyan" : "#45d3d3",
        "blue" : "#549ef2",
        "darkBlue" : "#4c4e61",
        "lightGray" : "#fafafa",
        "red" : "#ea5353",
        "gray" : "#a3a5ae",
      }
    },
  },
  plugins: [],
}