import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['@supabase/supabase-js', 'geocoding.js'],
    },
  },
  server: {
    port: 5173, // Ensure this matches your setup
    cors: true, // Enable CORS if necessary
  },
  // No need to define `process.env`. Vite uses import.meta.env directly
});
