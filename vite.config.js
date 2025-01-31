import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Sweet_Donuts/',  // This sets the base path for all assets
  plugins: [react()],
})
