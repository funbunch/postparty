/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'md': '828px',
      'lg': '1228px',
      'xl': '1400px'
    }
  },
  plugins: [],
}