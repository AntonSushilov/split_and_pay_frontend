import type { EventItemViewDto } from "api/event";

export interface EventState {
  loading: boolean;
  event: EventItemViewDto | null;
  eventList: EventItemViewDto[] | [] | null;
  error: string | null;
}