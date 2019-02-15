module.exports = {
  devServer: {
    proxy: {
      '/getreport*': {
        target: 'http://localhost:9000',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
