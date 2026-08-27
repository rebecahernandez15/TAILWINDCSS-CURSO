module.exports = {
  content: [
    './public/**/*.html',
  ],
  darkMode: 'media', // o 'media' o 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
      'wave-pattern': `url("data:image/svg+xml,...")`,
      'wave-pattern-dots': `url("data:image/svg+xml,...")`,
      'pattern-characters-red': `url("../../img/pattern-characters-red.jpg")`,
      'character-spiderman': `url("../../img/character-spiderman.png")`,
      'wave-red': `url("../../img/wave-red.png")`,
      'black-dots': `url("../../img/black-dots.png")`,
    }),
      screens:{
        'xsm':'320px'
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}