// action types
const SET_AUTH_USERS_DATA = "SET_AUTH_USERS_DATA";

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

    default: break;
  }

  return state;
  
}

// Action Creators 
export const setAuthUsersData = (email, id, login) => ({ email, id, login, type: SET_AUTH_USERS_DATA});
