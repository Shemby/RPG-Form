import { combineReducers } from "redux";
import sheetReducer from "./sheetReducer";
import userReducer from "./userReducer";

export const rootReducer = combineReducers({
  sheetReducer,
  userReducer,
});
