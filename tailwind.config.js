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
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
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
          DEFAULT: "#001B6A",
        },
        secondary: "#CB2026",
        text: {
          DEFAULT: "#000000",
        },
        border: "#3A4D39",
      },

      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
        custom: `0px 4px 4px 0px rgba(0, 0, 0, 0.25)`,
      },

      animation: {
        shimmer: "shimmer 2s linear infinite",
        meteorEffect: "meteor 5s linear infinite",
      },
      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 200",
          },
        },
        meteor: {
          "0%": { transform: "rotate(45deg) translateX(-500px)", opacity: "0" },
          "70%": { opacity: "0.7" },
          "100%": {
            transform: "rotate(45deg) translateX(0)",
            opacity: "1",
          },
        },
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