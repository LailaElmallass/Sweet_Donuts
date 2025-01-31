import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration for your project
export default defineConfig({
  base: '/Sweet_Donuts/',  // This tells Vite to build for the /Sweet_Donuts subdirectory
  plugins: [react()],
  build: {
    // Specify the output directory
    outDir: 'dist',  // Default output directory for build

    // Customize the filenames with hashes for cache-busting
    rollupOptions: {
      output: {
        // Entry files (JS)
        entryFileNames: 'assets/index.CoRMjXpm.js',  // Dynamically generate JS file names with hashes
        // Chunk files (code-splitting)
        chunkFileNames: 'assets/index.CoRMjXpm.js',  // Dynamically generate chunk JS file names with hashes
        // Asset files (images, CSS, fonts, etc.)
        assetFileNames: 'assets/[name].[hash][extname]',  // Dynamically generate asset filenames with hashes
      },
    },
  },
});
