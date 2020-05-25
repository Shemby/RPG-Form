import {
  CLASSES_RECIEVED,
  CLASS_RECIEVED,
  RACE_RECIEVED,
  DOMAINS_RECIEVED,
} from "../actions/types";

const initialState = {
  classes: [],
  class: {},
  race: {},
  domains: [],
};
const threeFiveReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLASSES_RECIEVED:
      return {
        ...state,
        classes: action.payload,
      };
    case CLASS_RECIEVED:
      return {
        ...state,
        class: action.payload,
      };
    case RACE_RECIEVED:
      return {
        ...state,
        race: action.payload,
      };
    case DOMAINS_RECIEVED:
      action.payload.map((domain) => {
        return domain;
      });
      return {
        ...state,
        domains: action.payload,
      };
    default:
      return state;
  }
};

export default threeFiveReducer;
