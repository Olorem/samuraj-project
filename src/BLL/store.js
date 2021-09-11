
let store = {
  _state: {
    profilePage: {
      postsD: [
        {id: 0, username: 'Eric Jonson', timeAgo: "just now", postText: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy"},
        {id: 1, username: "Touka Kirishima", timeAgo: "35 min ago", postText: "I wanna be the Boshi"}, 
        {id: 2, username: "Some Body", timeAgo: "once", postText: "Told me the world is gonna roll me"}
      ],
      inputTemp: "im a samuraj",
    },
    dialogsPage: {
      usersD: [{name: 'Sanya', id: 0}, {name: 'Vadim', id: 1}, {name: 'Oleg', id: 2},{name: 'Tolik', id: 3},{name: 'Naruto', id: 4},{name:'Kuplinov', id: 5},],
      messagesD: [{user: 'Valera', content: 'Hi'}, {user: 'Me',content: 'Hi'}, {user: 'Valera',content: 'keks go play some valo'}, {user: 'Me',content: 'ok'}],
    },
    sidebar: {},
  },

  _subscriber() { return console.log() },

  getState() {
    return this._state;
  },

  addPost(post) {
    let newPost = {
      id: post.id || 10,
      username: post.username || "vasyan",
      timeAgo: post.timeAgo || "rn",
      postText: post.postText || "bruh",
    };
    this._state.profilePage.postsD.push(newPost);
    this._state.profilePage.inputTemp = "";
    this._subscriber();
  },

  inputChangeHandler(e) {
    this._state.profilePage.inputTemp = e.target.value;
    // e.target.value = '';
    this._subscriber();
  },

  subscribe(callback) {
    this._subscriber = callback;
  },

  dispatch(action) {
    if(action.type === "ADD-POST"){
      //
    }
    
  }

}

window.store = store;

export default store