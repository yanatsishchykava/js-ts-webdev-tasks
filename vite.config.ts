// vite.config.ts
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    middlewareMode: false,
    watch: {
      usePolling: true,
    },
  },
  build: {
    rollupOptions: {
      input: './index.html',
    },
  }
});
