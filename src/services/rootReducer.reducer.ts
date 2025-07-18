import { combineReducers } from "redux";
import { userReducer } from "./user";
import { eventReducer } from "./event";

export const rootReducer = combineReducers({
    userReducer: userReducer,
    eventReducer: eventReducer
});