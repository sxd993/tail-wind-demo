/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wavey: {
          '0%': {
            transform: 'scaleY(0.5)'
          },
          '50%': {
            transform: 'scaleY(1.5)'
          },
          '100%': {
            transform: 'scaleY(0.5)'
          }
        }
      },
      animation: {
        wavey1: 'wavey 1s linear infinite',
        wavey2: 'wavey 1.2s linear infinite',
        wavey3: 'wavey 1.1s linear infinite'
      },
      fontFamily: {
        'quicksand': ['Quicksand', 'sans-serif']
      },
    },
  },
  plugins: [],
};
