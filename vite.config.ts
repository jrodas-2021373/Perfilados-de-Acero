import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path: Vercel automatically sets process.env.VERCEL; otherwise use GitHub Pages subpath for production
  base: process.env.VERCEL ? '/' : (process.env.NODE_ENV === 'production' ? '/Perfilados-de-Acero/' : '/'),
  server: {
    watch: {
      // Avoid Windows file locking issues on large media files
      ignored: ['**/*.mp4', '**/public/**']
    }
  }
});
