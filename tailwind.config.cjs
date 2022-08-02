/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
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
      fontSize: {
        'xxs': ['0.6rem', '0.7rem']
      },
      screens: {
        'menu': '770px'
      }
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
    }
  ],
}
