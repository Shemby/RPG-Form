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
  WEAPON_ADDED,
  ARMOR_ADDED,
} from "./types";
import Axios from "axios";

export const changeStep = (step) => {
  return {
    type: STEP_CHANGED,
    payload: step,
  };
};

export const changeAbilities = (name, value) => {
  return {
    type: ABILITY_CHANGED,
    payload: { name, value },
  };
};

export const changeClass = (type) => {
  return {
    type: CLASS_CHANGED,
    payload: type,
  };
};

export const changeRace = (race) => {
  return {
    type: RACE_CHANGED,
    payload: race,
  };
};

export const addDomain = (domain) => {
  const options = {
    method: "GET",
    url: `http://localhost:2000/domain/${domain}`,
  };
  return async function (dispatch) {
    const res = await Axios(options);
    dispatch({ type: DOMAIN_ADDED, payload: res.data });
  };
};

export const removeDomain = (domain) => {
  return {
    type: DOMAIN_REMOVED,
    payload: domain,
  };
};

export const addWeapon = (weapon) => {
  const options = {
    method: "GET",
    url: `http://localhost:2000/weapon/${weapon}`,
  };
  return async function (dispatch) {
    const res = await Axios(options);
    dispatch({ type: WEAPON_ADDED, payload: res.data });
  };
};

export const addArmor = (armor) => {
  const options = {
    method: "GET",
    url: `http://localhost:2000/weapon/${armor}`,
  };
  return async function (dispatch) {
    const res = await Axios(options);
    dispatch({ type: ARMOR_ADDED, payload: res.data });
  };
};

export const addDeity = (deity) => {
  return {
    type: DEITY_ADDED,
    payload: deity,
  };
};

export const addDepth = (type, value) => {
  switch (type) {
    case "name":
      return {
        type: NAME_ADDED,
        payload: value,
      };
    case "age":
      return {
        type: AGE_ADDED,
        payload: value,
      };
    case "gender":
      return {
        type: GENDER_ADDED,
        payload: value,
      };
    case "height":
      return {
        type: HEIGHT_ADDED,
        payload: value,
      };
    case "weight":
      return {
        type: WEIGHT_ADDED,
        payload: value,
      };
    case "eyes":
      return {
        type: EYES_ADDED,
        payload: value,
      };
    case "hair":
      return {
        type: HAIR_ADDED,
        payload: value,
      };
    case "skin":
      return {
        type: SKIN_ADDED,
        payload: value,
      };
    default:
      console.log("something went wrong");
  }
};
