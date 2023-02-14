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
      animation: {
        rolodex: 'rollUp 10s infinite cubic-bezier(.75,0,.25,1)',
      },
      keyframes: {
        rollUp: {
          '0%' : {transform: 'translateY(0)'},
          '14.29%' : {transform: 'translateY(-2.5rem)'},
          '28.57%' : {transform: 'translateY(-5rem)'},
          '42.86%' : {transform: 'translateY(-7.5rem)'},
          '57.14%' : {transform: 'translateY(-10rem)'},
          '71.43%' : {transform: 'translateY(-12.5rem)'},
          '85.71%' : {transform: 'translateY(-15rem)'},
          '100%' : {transform: 'translateY(-17.5rem)'},
        }
      },
    },
  },
  variants:{
    entend: {},
  },
  plugins: [],
};
