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
      },
      boxShadow: {
        standard: '0px 0px 4px 2px #b1b1b1'
      },     
    },
  },
  plugins: [],
}
