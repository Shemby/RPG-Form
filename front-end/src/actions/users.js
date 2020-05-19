import { LOGIN_SUCCESS, LOGOUT_SUCCESS, USER_RECIEVED } from "./types";
import Axios from "axios";

export const login = (email, pass) => {
  const options = {
    method: "POST",
    url: "http://localhost:3000/user/login",
    data: {
      email: email,
      password: pass,
    },
  };
  return async function (dispatch) {
    const res = await Axios(options);
    await localStorage.setItem("token", res.data.token);
    await localStorage.setItem("Authorization", `Bearer ${res.data.token}`);
    await localStorage.setItem("isAuth", true);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
  };
};

export const logout = () => {
  const options = {
    method: "POST",
    url: "http://localhost:3000/user/logout",
    headers: {
      Authorization: localStorage.getItem("Authorization"),
    },
  };
  return async function (dispatch) {
    await Axios(options);
    await localStorage.clear();
    await localStorage.setItem("isAuth", false);
    dispatch({ type: LOGOUT_SUCCESS });
  };
};

export const getUser = () => {
  const options = {
    method: "GET",
    url: "http://localhost:3000/user/profile",
    headers: {
      Authorization: localStorage.getItem("Authorization"),
    },
  };
  return async function (dispatch) {
    const res = await Axios(options);
    dispatch({ type: USER_RECIEVED, payload: res.data });
  };
};
