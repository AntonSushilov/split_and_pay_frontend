import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type AuthState } from "./user.interface";

const initialState: AuthState = {
  loading: false,
  telegramInitData: null,
  user: null,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    checkAuthRequest(state, action: PayloadAction<string>) {
      state.loading = true;
      state.error = null;
      state.telegramInitData = action.payload;
    },
    checkAuthSuccess(state, action: PayloadAction<AuthState["user"]>) {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    },
    checkAuthFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.user = null;
      state.error = action.payload;
    },
    updatePhoneRequest(state) {
      state.loading = true;
      state.error = null;
    },
    updatePhoneSuccess(state, action: PayloadAction<AuthState["user"]>) {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    },
    updatePhoneFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.user = null;
      state.error = action.payload;
    },
  },
});

export const userActions = userSlice.actions;

export const userReducer = userSlice.reducer;
