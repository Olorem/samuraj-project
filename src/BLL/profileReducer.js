const PROFILE_INPUT_CHANGE = "PROFILE_INPUT_CHANGE";
const ADD_POST = "ADD_POST";
const SET_USER = "SET_USER";

export const addPost = postText => ({
    type: ADD_POST,
    post: { postText }
});

export const inputChange = (text) => ({
    type: PROFILE_INPUT_CHANGE,
    text
});

export const setUser = user => ({
  type: SET_USER,
  user
});

const initStateProfile = {
  postsD: [
    {id: 0, username: 'Eric Jonson', timeAgo: "just now", postText: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy"},
    {id: 1, username: "Touka Kirishima", timeAgo: "35 min ago", postText: "I wanna be the Boshi"}, 
    {id: 2, username: "Some Body", timeAgo: "once", postText: "Told me the world is gonna roll me"}
  ],
  inputTemp: "",
  user: { 
    fullName: "Eric Jonson", 
    aboutMe: "Any one can join with but Social network us if you want Any one can join with us if you want",
    lookingForAJobDescription: "I Don’t know how? But i believe that it is possible one day if i stay with my dream all time",
    photos: { small: "https://htmldemo.hasthemes.com/adda/adda/assets/images/profile/profile-midle-1.jpg"}
  }, //default user is zaglushka
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

    case SET_USER:
      state.user = {...action.user}
    break;
    
    default: break;
  }

  return state;
  
}