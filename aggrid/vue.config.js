module.exports = {
  devServer: {
    proxy: {
      '/reports/*': {
        target: 'http://localhost:9090',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
