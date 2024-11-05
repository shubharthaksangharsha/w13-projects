/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./pages/**/*.html",
    "./js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2c3e50',
        secondary: '#e67e22',
        accent: '#3498db',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

