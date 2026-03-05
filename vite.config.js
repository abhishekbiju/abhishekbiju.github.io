import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // User pages on GitHub Pages are served from the root
  publicDir: 'public', // Ensure the public directory is correctly set
});
