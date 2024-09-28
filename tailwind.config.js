/** @type {import('tailwindcss').Config} */

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

export default {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    // Screen Size as per need
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1200px',
    },

    extend: {

      fontFamily: {
        primary: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        overpass: ['Overpass', 'sans-serif'],
        rose: ['Palanquin+Dark', 'sans-serif'],
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },

      colors: {
        primary: {
          DEFAULT: "#fafafa",
        },
        secondary: "#000000",
        text: {
          DEFAULT: "#757575",
          heading: '#333333',
        },
        border: "#3A4D39",
      },

      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
        custom: `0px 4px 4px 0px rgba(0, 0, 0, 0.25)`,
      },
    },
  },
  plugins: [addVaraibleForColors],
}

function addVaraibleForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme('colors'));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ':root': newVars
  })
}