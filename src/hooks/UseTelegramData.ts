import { useEffect, useState } from "react";
import { mockTelegram } from "api/mockTelegram";

type TelegramUser = typeof mockTelegram.initDataUnsafe.user;

export const useTelegramData = () => {
  const [tg, setTg] = useState<Window["Telegram"]["WebApp"] | null>(null);
  const [user, setUser] = useState<TelegramUser | null>(null);
  const [initData, setInitData] = useState<string>("");
  const [isMocked, setIsMocked] = useState<boolean>(() => {
    return localStorage.getItem("USE_TELEGRAM_MOCK") === "true";
  });

  useEffect(() => {
    let telegram: any = null;

    if (!isMocked && window.Telegram?.WebApp) {
      telegram = window.Telegram.WebApp;
      console.log("[Telegram SDK] Используется Telegram WebApp");
    } else {
      telegram = mockTelegram;
      console.warn("[Mock] Используется мок Telegram WebApp");
    }

    // telegram.expand?.();
    // telegram.MainButton.setText("Продолжить");
    // telegram.MainButton.show();
    // telegram.MainButton.enable();
    // telegram.MainButton.onClick(() => {
    //   telegram.sendData("Клик по кнопке");
    // });
    setTg(telegram);
    setUser(telegram.initDataUnsafe?.user || null);
    setInitData(telegram.initData || "");
    // telegram.ready();
  }, [isMocked]);

  const toggleMock = () => {
    const next = !isMocked;
    localStorage.setItem("USE_TELEGRAM_MOCK", String(next));
    setIsMocked(next);
    window.location.reload(); // перезагрузить для повторного init
  };

  return { tg, user, initData, isMocked, toggleMock };
};
