import {
  SHEETS_RECIEVED,
  SHEET_ASSIGNED,
  SHEET_CLOSED,
  MODS_ASSIGNED,
  HEALED,
  DAMAGED,
  RESET,
  SR_SET,
  SKILLS_RECIEVED,
  RANK_CHANGED,
  MISC_CHANGED,
} from "./types";
import Axios from "axios";

export const getSheets = () => {
  const options = {
    method: "GET",
    url: "http://localhost:3000/user/sheets",
    headers: {
      Authorization: localStorage.getItem("Authorization"),
    },
  };
  return async function (dispatch) {
    const res = await Axios(options);
    dispatch({ type: SHEETS_RECIEVED, payload: res.data });
  };
};

export const getSheet = (id) => {
  const options = {
    method: "GET",
    url: `http://localhost:3000/user/sheets/${id}`,
    headers: {
      Authorization: localStorage.getItem("Authorization"),
    },
  };
  return async function (dispatch) {
    const res = await Axios(options);
    await dispatch({ type: SHEET_ASSIGNED, payload: res.data });
    dispatch({ type: MODS_ASSIGNED });
  };
};

export const closeSheet = () => {
  return {
    type: SHEET_CLOSED,
  };
};

export const heal = (hp) => {
  return {
    type: HEALED,
    payload: hp,
  };
};

export const damage = (hp) => {
  return {
    type: DAMAGED,
    payload: hp,
  };
};

export const reset = () => {
  return {
    type: RESET,
  };
};

export const sr = (sr) => {
  return {
    type: SR_SET,
    payload: Number(sr),
  };
};

export const getSkills = () => {
  const options = {
    method: "GET",
    url: "http://localhost:2000/skills",
  };
  return async function (dispatch) {
    const res = await Axios(options);
    dispatch({ type: SKILLS_RECIEVED, payload: res.data });
  };
};

export const changeRank = (key, value) => {
  return {
    type: RANK_CHANGED,
    payload: {
      key,
      value,
    },
  };
};

export const changeMisc = (key, value) => {
  return {
    type: MISC_CHANGED,
    payload: {
      key,
      value,
    },
  };
};
