import { defineConfig } from 'vite';

import { resolve } from 'path';

export default defineConfig({
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        curriculo: resolve(__dirname, 'curriculo.html'),
        resume: resolve(__dirname, 'resume.html'),
      },
    },
  },
});

