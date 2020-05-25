import {
  STEP_CHANGED,
  ABILITY_CHANGED,
  CLASS_CHANGED,
  RACE_CHANGED,
  DOMAIN_ADDED,
  DOMAIN_REMOVED,
  DEITY_ADDED,
  NAME_ADDED,
  AGE_ADDED,
  GENDER_ADDED,
  HEIGHT_ADDED,
  WEIGHT_ADDED,
  EYES_ADDED,
  HAIR_ADDED,
  SKIN_ADDED,
} from "../actions/types";

const initialState = {
  step: 1,
  race: {},
  class: {},
  abilities: {
    str: 0,
    dex: 0,
    con: 0,
    int: 0,
    wis: 0,
    cha: 0,
  },
  skills: {},
  feats: {},
  hp: 0,
  domains: [],
  deity: "",
  name: "",
  age: 0,
  gender: "",
  height: "",
  weight: 0,
  eyes: "",
  hair: "",
  skin: "",
  weapons: [],
  armor: [],
};

const creatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case STEP_CHANGED:
      return {
        ...state,
        step: action.payload,
      };
    case ABILITY_CHANGED:
      return {
        ...state,
        abilities: {
          ...state.abilities,
          [action.payload.name]: action.payload.value,
        },
      };
    case RACE_CHANGED:
      return {
        ...state,
        race: action.payload,
      };
    case CLASS_CHANGED:
      return {
        ...state,
        class: action.payload,
      };
    case DOMAIN_ADDED:
      return {
        ...state,
        domains: [...state.domains, action.payload],
      };
    case DOMAIN_REMOVED:
      const index = state.domains
        .map((domain) => {
          return domain.name;
        })
        .indexOf(action.payload);
      return {
        ...state,
        domains: [
          ...state.domains.slice(0, index),
          ...state.domains.slice(index + 1),
        ],
      };
    case DEITY_ADDED:
      return {
        ...state,
        deity: action.payload,
      };
    case NAME_ADDED:
      return {
        ...state,
        name: action.payload,
      };
    case AGE_ADDED:
      return {
        ...state,
        age: action.payload,
      };
    case GENDER_ADDED:
      return {
        ...state,
        gender: action.payload,
      };
    case HEIGHT_ADDED:
      return {
        ...state,
        height: action.payload,
      };
    case WEIGHT_ADDED:
      return {
        ...state,
        weight: action.payload,
      };
    case EYES_ADDED:
      return {
        ...state,
        eyes: action.payload,
      };
    case HAIR_ADDED:
      return {
        ...state,
        hair: action.payload,
      };
    case SKIN_ADDED:
      return {
        ...state,
        skin: action.payload,
      };
    default:
      return state;
  }
};

export default creatorReducer;
