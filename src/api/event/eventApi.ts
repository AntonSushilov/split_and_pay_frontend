import { requestApi } from "api";
import type { Response, EventItemDto } from "./eventApi.interface";



export const eventApi = {
  createEventItem: (eventItem: EventItemDto) => createEventItem(eventItem),
}

async function createEventItem(eventItem: EventItemDto): Promise<Response> {
  try {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `token ${String(localStorage.getItem("token"))}`,
      },
      body: JSON.stringify({ eventItem: eventItem }),
    };
    const response = requestApi('/event/add', requestOptions).then(res => {
        return res as Response;
    })

    return response;

  } catch (err) {
    console.error("Auth request error:", err);
    return { ok: false, error: "Request failed" };
  }
}
