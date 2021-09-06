import renderWholeTree from "../render";


let state = {
  profilePage: {
    postsD: [
      {id: 0, username: 'Eric Jonson', timeAgo: "just now", postText: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy"},
      {id: 1, username: "Touka Kirishima", timeAgo: "35 min ago", postText: "I wanna be the Boshi"}, 
      {id: 2, username: "Some Body", timeAgo: "once", postText: "Told me the world is gonna roll me"}
    ],
  },
  dialogsPage: {
    usersD: [{name: 'Sanya', id: 0}, {name: 'Vadim', id: 1}, {name: 'Oleg', id: 2},{name: 'Tolik', id: 3},{name: 'Naruto', id: 4},{name:'Kuplinov', id: 5},],
    messagesD: [{user: 'Valera', content: 'Hi'}, {user: 'Me',content: 'Hi'}, {user: 'Valera',content: 'keks go play some valo'}, {user: 'Me',content: 'ok'}],
  },
  sidebar: {},
}

let addPost = (post) => {
  
  let newPost = {
    id: post.id || 10,
    username: post.username || "vasyan",
    timeAgo: post.timeAgo || "rn",
    postText: post.postText || "bruh",
  };

  state.profilePage.postsD.push(newPost);
  renderWholeTree(state);
};

export { state, addPost }