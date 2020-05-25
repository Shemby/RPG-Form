import { combineReducers } from "redux";
import sheetReducer from "./sheetReducer";
import userReducer from "./userReducer";
import threeFiveReducer from "./threeFiveReducer";
import creatorReducer from "./creatorReducer";

export const rootReducer = combineReducers({
  sheetReducer,
  userReducer,
  threeFiveReducer,
  creatorReducer,
});
