/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.html",
  ],
  theme: {
    colors: {
      black: '#000000',
      emerald: '#001211',
      white: '#FFFFFF',
      yellow: '#FFC627',
      blue: '#00818A',
      grass: '#142524'
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif']
    },
    extend: {

    },
  },
  plugins: [],
}
