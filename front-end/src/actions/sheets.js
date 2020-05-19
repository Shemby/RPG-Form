import {
  SHEETS_RECIEVED,
  SHEET_ASSIGNED,
  SHEET_CLOSED,
  MODS_ASSIGNED,
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
