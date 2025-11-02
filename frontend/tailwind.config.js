/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        brown: {
          DEFAULT: 'rgb(107, 79, 63)',    // <- changed to RGB
        },
        blush: {
          DEFAULT: 'rgb(247, 202, 201)',
        },
        ivory: {
          DEFAULT: 'rgb(255, 248, 231)',
        },
        beige: {
          DEFAULT: 'rgb(230, 211, 179)',
        },
      },
    },
  },
  plugins: [],
};
