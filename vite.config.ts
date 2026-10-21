import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// El sitio se publica en la raíz del dominio (canonical https://kuanto.app/).
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: { port: 4322 },
});
