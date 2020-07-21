import {
  SHEETS_RECIEVED,
  MODS_ASSIGNED,
  SHEET_ASSIGNED,
  SHEET_CLOSED,
  HEALED,
  DAMAGED,
  RESET,
  SR_SET,
  RANK_CHANGED,
  MISC_CHANGED,
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
  currentHp: 0,
  skills: [],
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
          str: Math.floor((state.sheet.abilities.str - 10) / 2),
          dex: Math.floor((state.sheet.abilities.dex - 10) / 2),
          con: Math.floor((state.sheet.abilities.con - 10) / 2),
          int: Math.floor((state.sheet.abilities.int - 10) / 2),
          wis: Math.floor((state.sheet.abilities.wis - 10) / 2),
          cha: Math.floor((state.sheet.abilities.cha - 10) / 2),
        },
        currentHp: state.sheet.hp,
      };
    case SHEET_CLOSED:
      return {
        ...state,
        sheet: {},
      };
    case HEALED:
      return {
        ...state,
        currentHp: state.currentHp + Number(action.payload),
      };
    case DAMAGED:
      return {
        ...state,
        currentHp: state.currentHp - Number(action.payload),
      };
    case RESET:
      return {
        ...state,
        currentHp: state.sheet.hp,
      };
    case SR_SET:
      return {
        ...state,
        sheet: {
          ...state.sheet,
          sr: action.payload,
        },
      };
    case RANK_CHANGED:
      const skillIndex = state.skills
        .map((skill) => {
          return skill.name;
        })
        .indexOf(action.payload.key);
      console.log(skillIndex);
      return {
        ...state,
        skills: [...state.skills],
      };
    case MISC_CHANGED:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default sheetReducer;
