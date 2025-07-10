import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      app: path.resolve(__dirname, 'src/app'),
      pages: path.resolve(__dirname, 'src/pages'),
      routes: path.resolve(__dirname, 'src/routes'),
      hooks: path.resolve(__dirname, 'src/hooks'),
      api: path.resolve(__dirname, 'src/api'),
      // Добавьте другие алиасы по необходимости
    },
  },
});