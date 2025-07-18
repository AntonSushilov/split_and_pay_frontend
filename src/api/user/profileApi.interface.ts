export type AuthResponse = {
  ok: true;
  user: {
    id: number;
    first_name: string;
    last_name: string;
    username: string;
  };
} | {
  ok: false;
  error: string;
};

export interface Contact {
  phone_number: string;
  first_name: string;
  last_name?: string;
  user_id: string;
}
