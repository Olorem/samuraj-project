const FOLLOW    = "FOLLOW";
const UNFOLLOW  = "UNFOLLOW";
const SET_USERS = "SET_USERS";

const initStateUsers = {
  users: [
  //   {id: 0, following: false, username: 'Eric Jonson', status: "just now", location: "USA, California"},
  //   {id: 1, following: false, username: "Touka Kirishima", status: "35 min ago", location: "Russia, Kremlin"}, 
  //   {id: 2, following: false, username: "Pepe frog", status: "heh", location: "Swamp"}
   ],
  usersCount: 4
};

export const usersReducer = (state = initStateUsers, action) => {
  switch(action.type) {
    case FOLLOW:
      state.users = state.users.map( u => u.id === action.id ? {...u, following: true} : u);
    break;

    case UNFOLLOW:
      state.users = state.users.map( u => u.id === action.id ? {...u, following: false} : u);
    break;
    
    default: break;

    case SET_USERS:
      // return ({ ...state, users: action.users });
      // state.users = [...action.users];
      return { ...state, users: [...action.users] }
    break;
  }

  return state;
  
}
export const followAC   = (userId) => ({ type: FOLLOW,    id: userId });
export const unFollowAC = (userId) => ({ type: UNFOLLOW,  id: userId });
export const setUsersAC = (users)  => ({ type: SET_USERS, users: users });