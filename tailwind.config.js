/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#13679f',
        secondary: '#04C1F3',
      },
      backgroundColor: {
        overall: '#f1faff',
        gradient: 'linear-gradient(90deg, #04C1F3 0%, #13679F 100%)'
      },
      boxShadow: {
        standard: '0px 0px 4px 2px #b1b1b1'
      }
    },
  },
  plugins: [],
}
