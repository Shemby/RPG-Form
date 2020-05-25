import {
  CLASSES_RECIEVED,
  CLASS_RECIEVED,
  RACE_RECIEVED,
  DOMAINS_RECIEVED,
} from "./types";
import Axios from "axios";

export const getClasses = () => {
  const options = {
    method: "GET",
    url: "http://localhost:2000/types",
  };
  return async function (dispatch) {
    const res = await Axios(options);
    dispatch({ type: CLASSES_RECIEVED, payload: res.data });
  };
};

export const getClass = (selection) => {
  const options = {
    method: "GET",
    url: `http://localhost:2000/type/${selection}`,
  };
  return async function (dispatch) {
    const res = await Axios(options);
    dispatch({ type: CLASS_RECIEVED, payload: res.data });
  };
};

export const getRace = (selection) => {
  const options = {
    method: "GET",
    url: `http://localhost:2000/race/${selection}`,
  };
  return async function (dispatch) {
    const res = await Axios(options);
    dispatch({ type: RACE_RECIEVED, payload: res.data });
  };
};

export const getDomains = () => {
  const options = {
    method: "GET",
    url: `http://localhost:2000/domains`,
  };
  return async function (dispatch) {
    const res = await Axios(options);
    const names = res.data.map((domain) => {
      return domain.name;
    });
    console.log(names);
    dispatch({ type: DOMAINS_RECIEVED, payload: names });
  };
};
