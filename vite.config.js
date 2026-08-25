import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        developer: resolve(__dirname, 'pages/developer.html'),
        designer: resolve(__dirname, 'pages/designer.html'),
      },
    },
  },
  server: {
    port: 5173,
    open: true
  }
})
