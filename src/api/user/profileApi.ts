import { requestApi } from "api";
import type { AuthResponse, Contact } from "./profileApi.interface";

export const userApi = {
  checkUserAuth: (telegramInitData: string) => checkUserAuth(telegramInitData),
  updatePhoneNumber: (contact: Contact) => updatePhoneNumber(contact),
};

async function checkUserAuth(telegramInitData: string): Promise<AuthResponse> {
  try {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `token ${String(localStorage.getItem("token"))}`,
      },
      body: JSON.stringify({ initData: telegramInitData }),
    };
    const response = requestApi("/users/auth", requestOptions).then((res) => {
      return res as AuthResponse;
    });

    return response;
  } catch (err) {
    console.error("Auth request error:", err);
    return { ok: false, error: "Request failed" };
  }
}

async function updatePhoneNumber(contact: Contact): Promise<AuthResponse> {
  try {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `token ${String(localStorage.getItem("token"))}`,
      },
      body: JSON.stringify({ contact: contact }),
    };
    const response = requestApi("/auth/update-phone", requestOptions).then(
      (res) => {
        return res as AuthResponse;
      }
    );

    return response;
  } catch (err) {
    console.error("Auth request error:", err);
    return { ok: false, error: "Request failed" };
  }
}
