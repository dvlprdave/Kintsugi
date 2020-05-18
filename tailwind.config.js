module.exports = {
  theme: {
    extend: {
      gridTemplateColumns: {
        'fill': 'repeat(auto-fill,minmax(250px, 1fr))',
        'large': '24% 40% 1fr',
        'anime': '20% 1fr 1fr',
        'maxContent': 'max-content 1fr',
      },
      container: {
        center: true,
        padding: '2rem',
      },
      maxHeight: {
        '400': '400px',
      },
      minHeight: {
        '230': '230px',
      },
      maxWidth: {
        '284': '284px',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
      },
      screens: {
        'xl': '1400px',
      }
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active']
  },
  plugins: [],
}
