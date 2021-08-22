import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { calendarReducer } from "./calendarReducer";

import { uiRecuder } from "./uiReducer";

export const rootReducer = combineReducers({
  ui: uiRecuder,
  calendar: calendarReducer,
  auth: authReducer,
});
