/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '550px',
      'sm': '744px',
      'md': '950px',
      'xl': '1128px',
      '2xl': '1640px',
      '3xl': '1880px',
    },
    extend: {
      screens: {
        'xxl': '1440px',
      },
    },
  },
  plugins: [],
}

