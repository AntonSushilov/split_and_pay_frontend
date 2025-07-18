import { all } from "redux-saga/effects";
import { userSagaWhatcher } from "./user";
import { eventSagaWhatcher } from "./event";

export function* rootSaga() {
  yield all([userSagaWhatcher(), eventSagaWhatcher()]);
}
