import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/tic-tac-toe-game/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: 'index.html',
    }
  }
})