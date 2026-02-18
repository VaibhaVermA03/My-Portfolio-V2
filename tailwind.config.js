/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        stylish: ['"Great Vibes"', 'cursive'],
        sans: ['"Ubuntu"', 'sans-serif'], 
      },
      colors: {
        brand: {
          light: '#87CEEB',
          mid: '#000080',   
          dark: '#240046',  
          'glass-light': '#f0ffff',
          'glass-dark': '#00bfff'
        }
      }
    },
  },
  plugins: [],
}