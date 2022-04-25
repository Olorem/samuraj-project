import { combineReducers, createStore } from "redux";
import { dialogsReducer } from "./dialogsReducer";
import { profileReducer } from "./profileReducer";



const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer
});

let store = createStore(reducers);
console.log(store);

export default store;