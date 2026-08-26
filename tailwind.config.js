module.exports = {
  content: [
    './public/**/*.html',
  ],
  darkMode: 'media', // o 'media' o 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'wave-pattern': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 23'%3E%3Cpath d='M0,0 L8,0 Q16,23 24,0 L32,0 L32,23 L0,23 Z' fill='white'/%3E%3C/svg%3E")`,
      })

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}