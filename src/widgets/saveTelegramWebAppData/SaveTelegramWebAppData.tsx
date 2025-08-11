export const SaveTelegramWebAppData = () => {
  const handleSave = () => {
    const tg = window.Telegram?.WebApp;

    if (!tg) {
      alert("Telegram WebApp не найден");
      return;
    }

    // Берём только сериализуемые данные (например initDataUnsafe и initData)
    const dataToSave = {
      initData: tg.initData,
      initDataUnsafe: tg.initDataUnsafe,
      user: tg.initDataUnsafe?.user,
      // Добавь сюда другие свойства, которые нужны
    };

    // Преобразуем в JSON
    const json = JSON.stringify(dataToSave, null, 2);

    // Создаём Blob и скачиваем файл
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "telegram_webapp_data.json";
    a.click();

    URL.revokeObjectURL(url);
  };

  return <button onClick={handleSave}>Сохранить Telegram WebApp данные в файл</button>;
};
