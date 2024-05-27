import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ddangcong80/CNU_Blog/',
  plugins: [react()],
});
