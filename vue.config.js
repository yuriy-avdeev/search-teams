module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import '@/assets/scss/_variables.scss';`
      }
    }
  },

  // deploy Github ->
  publicPath: process.env.NODE_ENV === 'production'
    ? '/search-teams/'
    : '/'
}