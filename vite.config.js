import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    // No need to externalize @supabase/supabase-js in Vite config
  },
  server: {
    port: 5173,
    cors: true,
  },
});
