// components/LiveConsole.tsx
import { useEffect, useState } from "react";

export const LiveConsole = () => {
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    const originalLog = console.log;

    console.log = (...args: any[]) => {
      const message = args
        .map((a) =>
          typeof a === "object" ? JSON.stringify(a, null, 2) : String(a)
        )
        .join("\n");
      setLogs((prev) => [...prev.slice(-49), message]); // максимум 50 сообщений
      originalLog(...args);
    };

    return () => {
      console.log = originalLog; // вернём как было при размонтировании
    };
  }, []);

  return (
    <>
      <button onClick={() => setLogs([])}> Очистить консоль</button>

      <div
        style={{
          background: "#111",
          color: "#0f0",
          padding: "10px",
          fontFamily: "monospace",
          fontSize: "12px",
          overflowY: "auto",
          maxHeight: "150px",
          width: "300px",
          borderRadius: "6px",
          marginTop: "10px",
          wordBreak: "break-word"
        }}
      >
        <strong>LiveConsole:</strong>
        <div>
          {logs.map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </div>
      </div>
    </>
  );
};
