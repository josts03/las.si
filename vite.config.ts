import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  build: {
    // Strežniški build (za prerender) ne potrebuje kopije public/.
    copyPublicDir: !isSsrBuild,
  },
  ssr: {
    // react-helmet-async je CJS z ESM ovojem; v strežniški bundle ga vključimo neposredno.
    noExternal: ['react-helmet-async'],
  },
}));
