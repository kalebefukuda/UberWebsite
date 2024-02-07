/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'uber':"url('/src/assets/bguber.png')",
        'city':"url('/src/assets/bg-city.png')",
      }
    },
  },
  plugins: [],
}