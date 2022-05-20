import { combineReducers, createStore } from "redux";
import { authReducer } from "./authReducer";
import { dialogsReducer } from "./dialogsReducer";
import { profileReducer } from "./profileReducer";
import { usersReducer } from "./usersReducer";

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage:   usersReducer,
  authReducer: authReducer
});

let store = createStore(reducers);
// console.log(store);
window.store = store;

export default store;