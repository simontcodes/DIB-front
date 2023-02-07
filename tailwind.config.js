/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'seashell': {
          200: '#F7D6D0',
          300: '#F0B4A9',
          400: '#EA9282',
          500: '#E36F5A',
          600: '#DC4D33',
          700: '#C13921',
          800: '#992E1A',
        },
      },
    },
  },
  variants:{
    entend: {},
  },
  plugins: [],
};
