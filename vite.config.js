import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/TBS_Solutions/', // 👈 important for GitHub Pages
})
