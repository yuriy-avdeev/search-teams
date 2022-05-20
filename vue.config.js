module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import '@/assets/scss/_variables.scss';`
      }
    }
  },

  // deploy Github ->
  publicPath: process.env.NODE_ENV === 'production'
    ? '/search-teams/'
    : '/'
}

