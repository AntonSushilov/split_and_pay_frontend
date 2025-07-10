import {all} from "redux-saga/effects";

import {pagesSagaWatcher} from "pages";


export function* rootSaga() {
    yield all([pagesSagaWatcher()]);
}
