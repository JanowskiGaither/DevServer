// vite.config.js
const path = require('path')
const {resolve} = require('path')
const { defineConfig } = require('vite')

export default defineConfig({
  root: path.resolve(__dirname, 'src'),
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        order: resolve(__dirname, '/orderForm/index.html'),
        design: resolve(__dirname, '/designForm/index.html')
      },
    },
  },
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  server: {
    port: 8080,
    hot: true
  }
})