import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";

import { pagesReducer } from "pages";
import { rootSaga } from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const rootReducer = combineReducers({
    pages: pagesReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                // ваши настройки
            },
        }).concat(
            sagaMiddleware,
            ...(import.meta.env.VITE_DISABLED_LOGGER_DEV ? [] : [createLogger({ collapsed: true })])
        ),
});

sagaMiddleware.run(rootSaga);