import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['@supabase/supabase-js'],
    },
  },
  server: {
    port: 5173,
    cors: true,
  },
});
