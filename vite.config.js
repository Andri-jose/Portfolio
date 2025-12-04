import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/Portfolio/", 
  plugins: [react()],
  server: {
    open: true,
    host: true
  }
})
