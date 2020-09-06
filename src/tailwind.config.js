const config = require('./tailwind-full.config');

const defaultTheme = config.theme;

module.exports = {
  purge: [],
  theme: {
    container: {
      padding: {
        default: '4rem'
      },
    },
    extend: {
      fontFamily: {
        sans: ['Helvetica Neue', 'Roboto', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          100: '#000000',
          200: '#000000',
          300: '#46d9ff',
          400: '#000000',
          500: '#12b7e0',
          600: '#000000',
          700: '#00acd7',
          800: '#000000',
          900: '#000000',
        },
        secondary: {
          100: '#000000',
          200: '#000000',
          300: '#000000',
          400: '#000000',
          500: '#87ff78',
          600: '#000000',
          700: '#000000',
          800: '#000000',
          900: '#000000',
        },
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: []
};
