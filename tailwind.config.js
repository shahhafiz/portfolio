module.exports = {
  future: {
    purgeLayersByDefault: true,
  },
  purge: {
    layers: ['utilities'],
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
