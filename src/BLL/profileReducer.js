const PROFILE_INPUT_CHANGE = "PROFILE-INPUT-CHANGE";
const ADD_POST = "ADD-POST";

export const addPostActionCreator = (text) => (
  {
    type: ADD_POST,
    post: {
      postText: text
    }
  }
);

export const inputChangeActionCreator = (e) => (
  {
    type: PROFILE_INPUT_CHANGE,
    e: e
  }
);

const initStateProfile = {
  postsD: [
    {id: 0, username: 'Eric Jonson', timeAgo: "just now", postText: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy"},
    {id: 1, username: "Touka Kirishima", timeAgo: "35 min ago", postText: "I wanna be the Boshi"}, 
    {id: 2, username: "Some Body", timeAgo: "once", postText: "Told me the world is gonna roll me"}
  ],
  inputTemp: "",
};

export const profileReducer = (state = initStateProfile, action) => {
  switch(action.type) {
    case ADD_POST: 
      let newPost = {
        id: action.post.id || 10,
        username: action.post.username || "vasyan",
        timeAgo: action.post.timeAgo || "rn",
        postText: action.post.postText || "bruh",
      };
      console.log(state);
      state.postsD.push(newPost);
      state.inputTemp = "";
    break;

    case PROFILE_INPUT_CHANGE:
      state.inputTemp = action.e.target.value;
    break;
    
    default: break;
  }

  return state;
  
}