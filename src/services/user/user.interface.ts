interface User {
  id: number;
  tg_id: number;
  phone: string;
  first_name: string;
  last_name: string;
  username: string;
}

export interface AuthState {
  loading: boolean;
  tg: TelegramWebApp | null;
  user: User | null;
  error: string | null;
}