import { authMeThunk } from "./authReducer";

// action types
const SET_INIT_DONE = "SET_INIT_DONE";


// initial state
const initStateApp = {
  isInitialized: false
};

// Reducer
export const appReducer = (state = initStateApp, action) => {
  switch (action.type) {
    case SET_INIT_DONE:
      console.log("APP INIT START");
      state = { ...state, isInitialized: true };
      console.log("APP INIT DONE");
      break;

    default: break;
  }

  return state;

}

// Action Creators 
export const init = () => ({ type: SET_INIT_DONE });

// Thunk Creators
export const initThunk = () => (dispatch) => {
  dispatch(authMeThunk())
    .then(() => dispatch(init()));
}