import { all, call, put, takeLatest } from "redux-saga/effects";
import type { SagaIterator } from "redux-saga";
import { eventActions } from "./event.reducer";
import { eventApi } from "api/event";

function* createEventSaga({payload}: any): SagaIterator {
  try {
    const data = yield call(eventApi.createEventItem, payload);
    if (data.ok) {
      yield put(eventActions.createEventItemSuccess(data.event));
    } else {
      yield put(eventActions.createEventItemFailure(data.error || "Unknown error"));
    }
  } catch (error: any) {
    yield put(eventActions.createEventItemFailure(error.message));
  }
}

function* createEventItemSagaWhatcher() {
  yield takeLatest(eventActions.createEventItemRequest.type, createEventSaga);
}



export function* eventSagaWhatcher() {
    yield all([createEventItemSagaWhatcher()]);
}