/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '768px',
      'md': '828px',
      'lg': '1228px',
      'thirteen': '1300px',
      'xl': '1524px',
      'sixteen':'1600px',
      'xxl': '1920px'
    }
  },
  plugins: [],
}