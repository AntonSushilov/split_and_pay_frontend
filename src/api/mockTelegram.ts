export const mockTelegram = {
  initData: "mock_init_data",
  initDataUnsafe: {
    user: {
      id: 123456,
      first_name: "Антон",
      last_name: "Разработчик",
      username: "dev_user",
      language_code: "ru",
      photo_url: "https://t.me/i/userpic/320/dev_user.jpg",
    },
    auth_date: Math.floor(Date.now() / 1000),
    hash: "mock_hash",
  },
  expand: () => console.log("[mock] expand() called"),
  close: () => console.log("[mock] close() called"),
};