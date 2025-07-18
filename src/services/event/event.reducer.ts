import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type EventState } from "./event.interface";
import type { EventItemDto } from "api/event";

const initialState: EventState = {
  loading: false,
  event: null,
  eventList: [],
  error: null,
};

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    createEventItemRequest(state, _action: PayloadAction<EventItemDto>) {
      state.loading = true;
      state.error = null;
    },
    createEventItemSuccess(state, action: PayloadAction<EventState["event"]>) {
      state.loading = false;
      state.event = action.payload;
      state.error = null;
    },
    createEventItemFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.event = null;
      state.error = action.payload;
    },
  },
});

export const eventActions = eventSlice.actions;

export const eventReducer = eventSlice.reducer;
