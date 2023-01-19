import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

/**
 * Dev environment variables exposed only to node in development
 * using the `CFG_VITE_` prefix.
 * @see https://vitejs.dev/guide/env-and-mode.html#env-files
 * @see https://vitejs.dev/guide/api-javascript.html#loadenv
 */
const devEnv = loadEnv('development', process.cwd(), 'CFG_VITE_');

const { CFG_VITE_PROXY_URL } = devEnv;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    proxy: {
      '/offline': {
        target: CFG_VITE_PROXY_URL ?? '/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/offline/, ''),
      },
    },
  },
});
