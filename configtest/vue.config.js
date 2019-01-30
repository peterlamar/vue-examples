module.exports = {
  devServer: {
    proxy: {
      '/report/*': {
        target: 'http://localhost:9000',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
