import { authAPI } from "../DAL/api";
import { FORM_ERROR } from "final-form";
// action types
const SET_AUTH_USERS_DATA = "SET_AUTH_USERS_DATA";
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const SUBMIT_ERROR = "SUBMIT_ERROR";

// initial state
const initStateUsers = {
  email: null,
  id: null,
  login: null,
  isAuthorized: false,
  submitError: null
};

// Reducer
export const authReducer = (state = initStateUsers, action) => {
  switch (action.type) {
    case SET_AUTH_USERS_DATA:
      state = { ...state, ...action, isAuthorized: true };
      console.log("auth data has been set");
      break;

    // case LOGIN:

    // break;

    // case LOGOUT:

    // break;

    case SUBMIT_ERROR:
      state = {...state, submitError: action.error}
    break;

    default: break;
  }

  return state;

}

// Action Creators 
export const setAuthUsersData = (email, id, login) => ({ email, id, login, type: SET_AUTH_USERS_DATA });
export const login = (email, password, rememberMe) => ({ email, password, rememberMe, type: LOGIN });
export const logout = () => ({ type: LOGOUT });
export const setSubmitError = (error) => ({ type: SUBMIT_ERROR, error});

// Thunk Creators
export const authMeThunk = () => (dispatch) => {
  return authAPI.me()
    .then((r) => {
      console.log(r);
      if (r.resultCode === 0) {
        console.log(r);
        dispatch(setAuthUsersData(r.data.email, r.data.id, r.data.login));
      }
      else {
        // throw console.error("AUTH ME response result is not 0");
        console.log("ALO ZAREGAISYA");
      }
    });
}

export const loginThunk = (m, p, r) => (dispatch) => {
  authAPI.login(m, p, r)
    .then((response) => {
      if (response.resultCode === 0)
        dispatch(authMeThunk());
      else {
        console.log("LOGIN response result is not 0", response.messages);
        // return ({ [FORM_ERROR]: 'Login Failed' });
        dispatch(setSubmitError(response.messages.length ? response.messages[0] : 'login response result is not 0' ));
      }
    })
    .then(console.log);
  // .then(() => console.log(123));
}

export const logoutThunk = () => (dispatch) => {
  authAPI.logout()
    .then(dispatch(authMeThunk()))
    .then(dispatch(setAuthUsersData(null, null, null, false)));
  // .then(() => console.log(123));
}