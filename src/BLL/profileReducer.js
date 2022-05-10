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

export const inputChangeActionCreator = (text) => (
  {
    type: PROFILE_INPUT_CHANGE,
    text: text
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
        // id: action.post.id || state.postsD[state.postsD.length - 1].id + 1,
        id: action.post.id || state.postsD.length,
        username: action.post.username || "vasyan",
        timeAgo: action.post.timeAgo || "rn",
        postText: action.post.postText || "bruh",
      };
      
      state.postsD = [...state.postsD, newPost];
      state.inputTemp = "";
      console.log(state.postsD);
    break;

    case PROFILE_INPUT_CHANGE:
      state.inputTemp = action.text;
    break;
    
    default: break;
  }

  return state;
  
}