const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // Redirects requests from `api` to `http://localhost:5000` via proxy (intermediary)
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true, 
        logLevel: 'debug',
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
})
