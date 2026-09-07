import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path: dynamically resolves to repository subpath on GitHub Actions, and relative './' locally
  base: process.env.GITHUB_ACTIONS ? '/Perfilados-de-Acero/' : './',
  server: {
    watch: {
      // Avoid Windows file locking issues on large media files
      ignored: ['**/*.mp4', '**/public/**']
    }
  }
});
