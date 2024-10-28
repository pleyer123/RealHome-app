import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['@supabase/supabase-js', 'opencage-api-client'],
    },
  },
  server: {
    port: 5173,
    cors: true,
  },
});
