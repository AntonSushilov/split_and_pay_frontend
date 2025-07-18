import { all, call, put, takeLatest } from "redux-saga/effects";
import type { SagaIterator } from "redux-saga";
import { userApi } from "api/user";
import { userActions } from "services/user/user.reducer";

function* checkAuthSaga({payload}: any): SagaIterator {
  try {
    const data = yield call(userApi.checkUserAuth, payload);
    if (data.ok) {
      yield put(userActions.checkAuthSuccess(data.user));
    } else {
      yield put(userActions.checkAuthFailure(data.error || "Unknown error"));
    }
  } catch (error: any) {
    yield put(userActions.checkAuthFailure(error.message));
  }
}

function* updatePhone({payload}: any): SagaIterator {
  try {
    const data = yield call(userApi.updatePhoneNumber, payload);
    if (data.ok) {
      yield put(userActions.updatePhoneSuccess(data.user));
    } else {
      yield put(userActions.updatePhoneFailure(data.error || "Unknown error"));
    }
  } catch (error: any) {
    yield put(userActions.updatePhoneFailure(error.message));
  }
}

function* checkUserSagaWhatcher() {
  yield takeLatest(userActions.checkAuthRequest.type, checkAuthSaga);
}

function* updatePhoneSagaWatcher() {
    yield takeLatest(userActions.updatePhoneRequest.type, updatePhone);
}

export function* userSagaWhatcher() {
    yield all([checkUserSagaWhatcher(), updatePhoneSagaWatcher(),]);
}