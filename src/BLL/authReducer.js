import { authAPI } from "../DAL/api";

// action types
const SET_AUTH_USERS_DATA = "SET_AUTH_USERS_DATA";
const LOGIN  = "LOGIN";
const LOGOUT = "LOGOUT";

// initial state
const initStateUsers = {
  email: null,
  id: null,
  login: null,
  isAuthorized: false
};

// Reducer
export const authReducer = (state = initStateUsers, action) => {
  switch(action.type) {
    case SET_AUTH_USERS_DATA:
      state = {...state, ...action};
      state.isAuthorized = true;
      console.log("auth data has been set");
    break;

    // case LOGIN:

    // break;

    // case LOGOUT:

    // break;

    default: break;
  }

  return state;
  
}

// Action Creators 
export const setAuthUsersData = (email, id, login) => ({ email, id, login, type: SET_AUTH_USERS_DATA});
export const login  = (email, password, rememberMe) => ({ email, password, rememberMe, type: LOGIN});
export const logout = () => ({ type: LOGOUT });

// Thunk Creators
export const authMeThunk = () => (dispatch) => {
  authAPI.me()
  .then( (r) => {
    console.log(r);
    if(r.resultCode === 0) {
      dispatch(setAuthUsersData(r.data.email, r.data.id, r.data.login));
    }
    else throw console.error("response result is not 0");
  });
}

export const loginThunk = (m, p, r) => (dispatch) => {
  authAPI.login(m, p, r)
  .then(dispatch(authMeThunk()))
  .then(console.log);
  // .then(() => console.log(123));
}

export const logoutThunk = () => (dispatch) => {
  authAPI.logout()
  .then(dispatch(authMeThunk()))
  .then(dispatch(setAuthUsersData(null, null, null, false)));
  // .then(() => console.log(123));
}