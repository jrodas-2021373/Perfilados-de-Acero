import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: './' allows the built site to run anywhere: Vercel, Netlify, or GitHub Pages subpaths!
  base: './',
  server: {
    watch: {
      // Avoid Windows file locking issues on large media files
      ignored: ['**/*.mp4', '**/public/**']
    }
  }
});
