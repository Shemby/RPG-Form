import { LOGIN_SUCCESS, LOGOUT_SUCCESS, USER_RECIEVED } from "../actions/types";

const initialState = {
  token: "",
  header: "",
  isAuth: localStorage.getItem("isAuth"),
  user: "no user",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        header: { Authorization: `Bearer ${action.payload.token}` },
        token: action.payload.token,
        isAuth: true,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        header: "",
        token: "",
        isAuth: false,
      };
    case USER_RECIEVED:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
