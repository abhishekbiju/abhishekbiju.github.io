import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  publicDir: 'public', // Ensure the public directory is correctly set
  server: {
    watch: {
      usePolling: true
    }}
})
