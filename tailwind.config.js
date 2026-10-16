/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Plus Jakarta Sans', 'sans-serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
      colors: {
        ink: '#091e36',
        navy: '#071d35',
        skybrand: '#229e58',
        powder: '#edf7ff',
      },
      boxShadow: {
        soft: '0 20px 60px rgba(9, 30, 54, .08)',
        premium: '0 30px 75px rgba(3, 18, 37, .18)',
      },
    },
  },
  plugins: [],
};
