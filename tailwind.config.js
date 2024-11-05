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
        primary: {
          DEFAULT: '#2c3e50',
          light: '#34495e',
          dark: '#243342'
        },
        secondary: {
          DEFAULT: '#e67e22',
          light: '#f39c12',
          dark: '#d35400'
        },
        accent: {
          DEFAULT: '#3498db',
          light: '#5dade2',
          dark: '#2980b9'
        },
        success: '#2ecc71',
        warning: '#f1c40f',
        error: '#e74c3c'
      },
      screens: {
        'xs': '475px',
        '3xl': '1600px',
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

