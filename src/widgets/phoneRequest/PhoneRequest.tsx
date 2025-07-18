import { useTelegramData } from "hooks";
import { useAppDispatch } from "hooks/UseAppDispatch";
import { useEffect, useState } from "react";
import { userActions } from "services/user";

export const PhoneRequest = () => {
  const dispatch = useAppDispatch()
  const [canRequestContact, setCanRequestContact] = useState(false);
  const { tg } = useTelegramData();
  useEffect(() => {
    // Проверим, доступен ли метод
    if (tg?.requestContact) {
      setCanRequestContact(true);
    }
  }, [tg]);

  const handleRequestPhone = () => {
    const tg = window.Telegram?.WebApp;
    if (tg) {
      tg.requestContact?.((success, contactData) => {
        console.log("📤 Контакт запрошен");
        console.log(success, contactData);
        try {
          const parsed = contactData.responseUnsafe;
          console.log("✅ Контакт получен:", parsed.contact);
          dispatch(userActions.updatePhoneRequest(parsed.contact));
        } catch (err) {
          console.error("Ошибка при парсинге контакта", err);
          alert("Ошибка при обработке данных контакта");
        }
      });
    }
  };

  return (
    <div className="p-4 text-center">
      {canRequestContact ? (
        <button
          onClick={handleRequestPhone}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Отправить номер телефона
        </button>
      ) : (
        <p className="text-sm">
          ⚠️ Эта версия Telegram не поддерживает отправку номера через WebApp.
          {/* Пожалуйста, нажмите кнопку <b>«Отправить номер»</b> в чате с ботом. */}
        </p>
      )}
    </div>
  );
};
