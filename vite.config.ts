import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";


export default defineConfig({
  base: "/split_and_pay_frontend/",
  plugins: [react()],
  resolve: {
    alias: {
      app: path.resolve(__dirname, "src/app"),
      pages: path.resolve(__dirname, "src/pages"),
      routes: path.resolve(__dirname, "src/routes"),
      hooks: path.resolve(__dirname, "src/hooks"),
      api: path.resolve(__dirname, "src/api"),
      urls: path.resolve(__dirname, "src/urls"),
      utils: path.resolve(__dirname, "src/utils"),
      widgets: path.resolve(__dirname, "src/widgets"),
      services: path.resolve(__dirname, "src/services"),
      // Добавьте другие алиасы по необходимости
    },
  },
  server: {
    host: true, // ✅ Разрешает внешние подключения
    port: 3000, // ✅ Ок, главное чтобы совпадал с SSH-туннелем
    strictPort: true, // ✅ Лучше пусть так
    cors: true, // ✅ Нужно для API-запросов
    allowedHosts: true, // ✅ Разрешаем все хосты и наш поддомен
    // allowedHosts: ['splitandpay.loca.lt'],
    hmr: {
      protocol: "wss",
      host: 'splitandpay.loca.lt', // ✅ твой поддомен
    },
  },
});
