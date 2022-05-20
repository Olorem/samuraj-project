const FOLLOW    = "FOLLOW";
const UNFOLLOW  = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_PAGE  = "SET_PAGE";
const SET_COUNT = "SET_COUNT";
const SET_PAGE_SIZE   = "SET_PAGE_SIZE";
const TOGGLE_FETCHING = "TOGGLE_FETCHING";
const TOGGLE_DISABLED = "TOGGLE_DISABLED";

const initStateUsers = {
  users: [
  //   {id: 0, following: false, username: 'Eric Jonson', status: "just now", location: "USA, California"},
  //   {id: 1, following: false, username: "Touka Kirishima", status: "35 min ago", location: "Russia, Kremlin"}, 
  //   {id: 2, following: false, username: "Pepe frog", status: "heh", location: "Swamp"}
   ],
  totalCount: 0,
  pageSize: 3,
  currentPage: 1,
  isFetching: true,
  buttonsInProgress: [24084],
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

    case SET_COUNT:
      state.totalCount = action.totalCount;
    break;

    case SET_PAGE:
      state.currentPage = action.page;
    break;

    case SET_PAGE_SIZE:
      state.pageSize = action.pageSize;
    break;

    case TOGGLE_FETCHING:
      state.isFetching = action.isFetching;
    break;

    case TOGGLE_DISABLED:
      if(action.toggling === true)
        state.buttonsInProgress = [...state.buttonsInProgress, action.id];
      else
        state.buttonsInProgress = state.buttonsInProgress.filter( item => item !== action.id);
    break;
  }

  return state;
  
}
export const follow        = (userId)        => ({ type: FOLLOW,    id: userId });
export const unfollow      = (userId)        => ({ type: UNFOLLOW,  id: userId });
export const setUsers      = (users)         => ({ type: SET_USERS, users: users });
export const setPage       = (page)          => ({ type: SET_PAGE,  page: page });
export const setTotalCount = (totalCount)    => ({ type: SET_COUNT, totalCount: totalCount });
export const setPageSize   = (pageSize)      => ({ type: SET_PAGE_SIZE, pageSize: pageSize });
export const setFetching   = (isFetching)    => ({ type: TOGGLE_FETCHING, isFetching: isFetching });
export const setDisabled   = (toggling, id)  => ({ type: TOGGLE_DISABLED, toggling: toggling, id: id });