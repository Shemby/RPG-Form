import {
  SHEETS_RECIEVED,
  MODS_ASSIGNED,
  SHEET_ASSIGNED,
  SHEET_CLOSED,
} from "../actions/types";

const initialState = {
  sheets: [],
  sheetId: "",
  sheet: {},
  mods: {
    str: 0,
    dex: 0,
    con: 0,
    int: 0,
    wis: 0,
    cha: 0,
  },
};

const sheetReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHEETS_RECIEVED:
      return {
        ...state,
        sheets: action.payload,
      };
    case SHEET_ASSIGNED:
      return {
        ...state,
        sheet: action.payload,
      };
    case MODS_ASSIGNED:
      return {
        ...state,
        mods: {
          str: Math.floor((state.sheet.str - 10) / 2),
          dex: Math.floor((state.sheet.dex - 10) / 2),
          con: Math.floor((state.sheet.con - 10) / 2),
          int: Math.floor((state.sheet.int - 10) / 2),
          wis: Math.floor((state.sheet.wis - 10) / 2),
          cha: Math.floor((state.sheet.cha - 10) / 2),
        },
      };
    case SHEET_CLOSED:
      return {
        ...state,
        sheet: {},
      };
    default:
      return state;
  }
};

export default sheetReducer;
