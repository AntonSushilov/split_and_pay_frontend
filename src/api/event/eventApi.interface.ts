export type Response = {
  ok: true;
  data: any;
} | {
  ok: false;
  error: string;
};

export interface EventItemViewDto {
  id: number;
  code: string;
  title: number;
  description: string;
}

export interface EventItemDto {
  user_id: number;
  title: number;
  description: string;
}
