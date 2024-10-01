/** @type {import('tailwindcss').Config} */

import { transform } from 'typescript';

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
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '2rem'
      }
    },

    extend: {

      fontFamily: {
        primary: ["Inter", "sans-serif"],
        poppins: ["Lobster Two", "sans-serif"],
        overpass: ['Concert One', 'sans-serif'],
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
      animation: {
        'ping-large': "ping-large 1s ease-in-out infinite",
        'move-left': "move-left 20s  linear infinite"
      },
      keyframes: {
        'ping-large': {
          '75%, 100%': {
            transform: 'scale(3)',
            opacity: '0',
          }
        },
        'move-left': {
          '0%': {
            transform: 'translateX(0%)'
          },
          '100%': {
            transform: 'translateX(-50%)'
          }
        }
      }
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