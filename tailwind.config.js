module.exports = {
  purge: ['./public/**/*.html', './src/**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        agblack: ['AgencyFB BlackWide', 'sans-serif'],
        agreg: ['AgencyFB RegularWide', 'sans-serif'],
        agbold: ['Agency fb bold', 'sans-serif'],
      },
    },
    colors:{
      white: '#FFF',
      black: '#000',
      red: '#F00',
      orange: '#fd5214',
    },
    container: {
      center: true,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
