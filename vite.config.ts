import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Сайт открывается на GitHub Pages по адресу /kt3-routing/
export default defineConfig({
  base: '/kt3-routing/',
  plugins: [react()],
})
