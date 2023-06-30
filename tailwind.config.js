/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontaFamily: {
        notoSerifHebrew: ['Noto Serif Hebrew', 'sans-serif'],
        Roboto: ['Roboto', 'sans-serif'],

      },
      colors: {
        'bg-btn': '#1df504'
      }
    },
    /* screens */
    screens: {
      '2xl': { 'max': '1535px' },
      // => @media (max-width: 1535px) { ... }

      'xl': { 'max': '1279px' },
      // => @media (max-width: 1279px) { ... }

      'lg': { 'max': '1024px' },
      // => @media (max-width: 1023px) { ... }

      'md': { 'max': '768px' },
      // => @media (max-width: 767px) { ... }

      'sm': { 'max': '640px' },
      // => @media (max-width: 639px) { ... }

      // => @media (max-width: 320px) { ... }
      'xs': {'max': '320px'}
    }
  },
  plugins: [],
}

