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
  ARMOR_REMOVED,
  WEAPON_REMOVED,
  RACE_REMOVED,
  CLASS_REMOVED,
  ALIGNMENT_ADDED,
  ALIGNMENT_REMOVED,
  SHEET_CREATED,
  HP_CHANGED,
  SKILLS_RECIEVED,
} from "./types";
import Axios from "axios";

export const createSheet = () => {
  return async function (dispatch, getState) {
    const state = getState();
    const options = {
      method: "POST",
      url: `http://localhost:3000/user/sheets`,
      headers: {
        Authorization: localStorage.getItem("Authorization"),
      },
      data: state.creatorReducer.character,
    };
    console.log(state.creatorReducer.character);
    await Axios(options);
    dispatch({ type: SHEET_CREATED });
  };
};
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

export const changeHp = (value) => {
  return {
    type: HP_CHANGED,
    payload: value,
  };
};

export const addClass = (type) => {
  const options = {
    method: "GET",
    url: `http://localhost:2000/type/${type}`,
  };
  return async function (dispatch) {
    const res = await Axios(options);
    dispatch({ type: CLASS_CHANGED, payload: res.data });
  };
};

export const addRace = (race) => {
  const options = {
    method: "GET",
    url: `http://localhost:2000/race/${race}`,
  };
  return async function (dispatch) {
    const res = await Axios(options);
    dispatch({ type: RACE_CHANGED, payload: res.data });
  };
};

export const removeRace = () => {
  return {
    type: RACE_REMOVED,
  };
};

export const removeClass = () => {
  return {
    type: CLASS_REMOVED,
  };
};

export const addAlignment = (alignment) => {
  return {
    type: ALIGNMENT_ADDED,
    payload: alignment,
  };
};

export const removeAlignment = () => {
  return {
    type: ALIGNMENT_REMOVED,
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
    url: `http://localhost:2000/armor/${armor}`,
  };
  return async function (dispatch) {
    const res = await Axios(options);
    dispatch({ type: ARMOR_ADDED, payload: res.data });
  };
};

export const removeArmor = (armor) => {
  return {
    type: ARMOR_REMOVED,
    payload: armor,
  };
};

export const removeWeapon = (weapon) => {
  return {
    type: WEAPON_REMOVED,
    payload: weapon,
  };
};

export const addDeity = (deity) => {
  return {
    type: DEITY_ADDED,
    payload: deity,
  };
};

export const getSkills = () => {
  const options = {
    method: "GET",
    url: "http://localhost:2000/skills",
  };
  return async function (dispatch) {
    const res = await Axios(options);
    console.log("it ran");
    dispatch({ type: SKILLS_RECIEVED, payload: res.data });
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
