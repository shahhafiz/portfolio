module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  purge: {
    layers: ['utilities', 'components'],
    content: ['./pages/**/*.js', './components/*.js'],
  },
  theme: {
    extend: {
      fontSize: {

      },
      screens: {

      },
      animation:{
        wiggle: 'wiggle 1s ease-in-out infinite'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-7deg)' },
          '50%': { transform: 'rotate(7deg)' },
        }
      }
    },
  },
  variants: {
    borderColor: ['group-hover'],
    textColor: ['group-hover'],
  },
  plugins: [],
}
