/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        neutral: {
          DEFAULT: '#ffffff',
          dark: '#242929',
        },
        primary: {
          DEFAULT: '#000000',
          dark: '#bbbdbd',
        },
        secondary: {
          DEFAULT: '#949799',
          dark: '#919d9d',
        },
      },
      fontFamily: {
        heading: ['Cormorant Garamond', 'serif'],
        paragraph: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}