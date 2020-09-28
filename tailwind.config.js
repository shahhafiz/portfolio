module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  purge: {
    layers: ['utilities','components'],
    content: ['./pages/**/*.js','./components/*.js'],
  },
  theme: {
    extend: {
      fontSize: {
        
      },
      screens: {
        
      }
    },
  },
  variants: {},
  plugins: [],
}
