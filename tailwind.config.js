/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'palette-1': '#222831',
        'palette-2': '#393E46',
        'palette-3': '#FFD369',
        'palette-4': '#EEEEEE'
      }
    },
  },
  plugins: [],
}