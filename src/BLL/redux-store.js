import { applyMiddleware, combineReducers, createStore } from "redux";
import { authReducer } from "./authReducer";
import { dialogsReducer } from "./dialogsReducer";
import { profileReducer } from "./profileReducer";
import { usersReducer } from "./usersReducer";
import thunk from "redux-thunk";
import { appReducer } from "./appReducer";

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  authReducer: authReducer,
  app: appReducer
});

let store = createStore(reducers, applyMiddleware(thunk));
// console.log(store);
window.store = store;

export default store;