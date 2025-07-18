export {};

declare global {
  interface Window {
    Telegram: {
      WebApp: TelegramWebApp;
    };
  }

  interface TelegramWebApp {
    initData: string;
    initDataUnsafe: TelegramInitData;
    version: string;
    platform: string;
    colorScheme: "light" | "dark";
    isExpanded: boolean;
    isClosingConfirmationEnabled: boolean;

    ready?: () => void;
    expand?: () => void;
    close?: () => void;
    sendData?: (data: string) => void;
    enableClosingConfirmation?: () => void;
    disableClosingConfirmation?: () => void;
    requestWriteAccess?: (callback: (allowed: boolean) => void) => void;
    requestContact?: (callback: (success:boolean, contactData: any) => void) => void;

    onEvent(eventType: string, callback: () => void): void;
    offEvent(eventType: string, callback: () => void): void;
    invokeCustomMethod?: (
      method: string,
      params: object,
      callback: (result: any) => void
    ) => void;
    // Объекты кнопок
    MainButton?: {
      setText: (text: string) => void;
      onClick: (callback: () => void) => void;
      show: () => void;
      hide: () => void;
      enable: () => void;
      disable: () => void;
      isVisible: boolean;
      isActive: boolean;
      color: string;
      textColor: string;
      text: string;
    };

    BackButton?: {
      show: () => void;
      hide: () => void;
      onClick: (callback: () => void) => void;
    };

    HapticFeedback?: {
      impactOccurred: (style: "light" | "medium" | "heavy") => void;
      notificationOccurred: (type: "error" | "success" | "warning") => void;
      selectionChanged: () => void;
    };
  }

  interface TelegramInitData {
    query_id?: string;
    user?: {
      id: number;
      first_name: string;
      last_name?: string;
      username?: string;
      language_code?: string;
      photo_url?: string;
    };
    auth_date?: number;
    hash?: string;
  }
}
