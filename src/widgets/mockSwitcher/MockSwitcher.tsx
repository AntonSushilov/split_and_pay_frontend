import { useTelegramData } from "hooks/UseTelegramData";

export const MockSwitcher = () => {
  const { user, isMocked, toggleMock } = useTelegramData();

  return (
    <div style={{
      position: "fixed",
      bottom: 10,
      right: 10,
      background: "#222",
      color: "#0f0",
      padding: "10px",
      fontSize: "12px",
      borderRadius: "8px",
      fontFamily: "monospace",
      zIndex: 9999,
      maxWidth: "90vw"
    }}>
      <div>
        <strong>{isMocked ? "🧪 МОК Telegram" : "✅ Реальный Telegram"}</strong>
      </div>
      {user && (
        <div style={{ marginTop: 5 }}>
          <div><strong>ID:</strong> {user.id}</div>
          <div><strong>Имя:</strong> {user.first_name} {user.last_name}</div>
          <div><strong>Юзернейм:</strong> @{user.username}</div>
        </div>
      )}
      <button
        onClick={toggleMock}
        style={{
          marginTop: 10,
          background: "#444",
          color: "#fff",
          border: "none",
          padding: "6px 10px",
          borderRadius: "6px",
          cursor: "pointer"
        }}
      >
        Переключить → {isMocked ? "Telegram" : "Mock"}
      </button>
    </div>
  );
}