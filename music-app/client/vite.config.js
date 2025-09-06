import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      // Proxy /api to the backend server
      '/api': {
        target: 'https://music-player-dp0l.onrender.com',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})
