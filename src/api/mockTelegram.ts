import telegramWebappData from "./telegram_webapp_data.json"

export const mockTelegram = {
  ...telegramWebappData,
  expand: () => console.log("[mock] expand() called"),
  close: () => console.log("[mock] close() called"),
};