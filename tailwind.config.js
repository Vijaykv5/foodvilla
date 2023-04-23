/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        adelia: ["ADELIA", "cursive"],
        sans: ['BR Firma', 'sans-serif'],
        nunito: ['nunito', 'sans-serif'],
        MyFont: ['My Font', 'serif'] 
      }, 
      
    },
  },
  plugins: [],
}

