import { dialogsReducer } from "./dialogsReducer";
import { profileReducer } from "./profileReducer";

//
// not in use. Project currently working with redux-store.js
//


let store = {
  _state: {
    profilePage: {
      postsD: [
        {id: 0, username: 'Eric Jonson', timeAgo: "just now", postText: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy"},
        {id: 1, username: "Touka Kirishima", timeAgo: "35 min ago", postText: "I wanna be the Boshi"}, 
        {id: 2, username: "Some Body", timeAgo: "once", postText: "Told me the world is gonna roll me"}
      ],
      inputTemp: "",
    },
    dialogsPage: {
      dialogs: [
        {name: 'Valera', id: 0, messages: [{user: 'Valera', content: 'HiVal'}, {user: 'Me', content: 'Hi'},  {user: 'Valera', content: 'keks go play some valo1'}, {user: 'Me', content: 'ok'}]}, 
        {name: 'Vadim', id: 1, messages: [{user: 'Vadim', content: 'HiVad'}, {user: 'Me', content: 'Hi'},  {user: 'Vadim', content: 'keks go play some valo2'}, {user: 'Me', content: 'ok'}]},
        {name: 'Oleg', id: 2, messages: [{user: 'Oleg', content: 'HiO'}, {user: 'Me', content: 'Hi'},  {user: 'Oleg', content: 'keks go play some valo3'}, {user: 'Me', content: 'ok'}] },
        {name: 'Tolik', id: 3, messages: [{user: 'Tolik', content: 'HiT'}, {user: 'Me', content: 'Hi'},  {user: 'Tolik', content: 'keks go play some valo4'}, {user: 'Me', content: 'ok'}] },
        {name: 'Naruto', id: 4, messages: [{user: 'Naruto', content: 'HiN'}, {user: 'Me', content: 'Hi'},  {user: 'Naruto', content: 'keks go play some valo5'}, {user: 'Me', content: 'ok'}] },
        {name: 'Kuplinov', id: 5, messages: [{user: 'Kuplinov', content: 'HiK'}, {user: 'Me', content: 'Hi'},  {user: 'Kuplinov', content: 'keks go play some valo6'}, {user: 'Me', content: 'ok'}] },
      ],
      inputTemp: "",
      currentDialog: 0,
    },
    sidebar: {},
  },

  _subscriber() { return console.log() },

  getState() {
    return this._state;
  },

  subscribe(callback) {
    this._subscriber = callback;
  },

  dispatch(action) {
    profileReducer(this._state.profilePage, action);
    dialogsReducer(this._state.dialogsPage, action);
    //...
    this._subscriber();
  }
}

window.store = store;

export default store