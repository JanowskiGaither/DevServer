// vite.config.js
const path = require('path')
const {resolve} = require('path')
const { defineConfig } = require('vite')

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        order: resolve(__dirname, 'src/orderForm/index.html'),
        design: resolve(__dirname, 'src/designForm/index.html')
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