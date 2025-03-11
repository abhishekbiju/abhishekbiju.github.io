import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/abhishekbiju.github.io/', // Ensure this matches your GitHub Pages repository name
  publicDir: 'public', // Ensure the public directory is correctly set
});
