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
      screens: {
        'xl': '1400px',
      }
    },
  },
  variants: {},
  plugins: [],
}
