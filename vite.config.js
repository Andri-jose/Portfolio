import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/Portfolio/",   // 👈 OBLIGATORIO para GitHub Pages
  plugins: [
    react()
  ],
  server: {
    open: true,
    host: true
  }
})