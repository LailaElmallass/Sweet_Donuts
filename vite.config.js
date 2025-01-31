import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Sweet_Donuts/',  // This tells Vite to build for the /Sweet_Donuts subdirectory
  plugins: [react()],
});
