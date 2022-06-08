import { apiFollow, apiGetUsers, apiUnFollow } from "../DAL/api";
import defaultPic from "../assets/img/defaultUser.jpg";

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
  buttonsInProgress: [],
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

// Action Creators
 const follow        = (userId)        => ({ type: FOLLOW,    id: userId });
 const unfollow      = (userId)        => ({ type: UNFOLLOW,  id: userId });
export const setUsers      = (users)         => ({ type: SET_USERS, users: users });
export const setPage       = (page)          => ({ type: SET_PAGE,  page: page });
export const setTotalCount = (totalCount)    => ({ type: SET_COUNT, totalCount: totalCount });
export const setPageSize   = (pageSize)      => ({ type: SET_PAGE_SIZE, pageSize: pageSize });
export const setFetching   = (isFetching)    => ({ type: TOGGLE_FETCHING, isFetching: isFetching });
export const setDisabled   = (toggling, id)  => ({ type: TOGGLE_DISABLED, toggling: toggling, id: id });

// Thunk Creators
export const getUsersThunkCreator = (page, count) => (dispatch) => {
  dispatch(setFetching(true));
  apiGetUsers(page, count)
  .then( (r) => {
    console.log(r)

    dispatch(setTotalCount(r.totalCount));
    dispatch(setUsers( r.items.map( u => ({
        id: u.id,
        username: u.name,
        following: u.followed,
        status: u.status || "no status?",
        location: u.location || "USA, California",
        smallPic: u.photos.small || defaultPic,
      }))))
    // setPageSize(1);
    dispatch(setFetching(false))
    console.log("updateUsers");
  })
  .catch(err => {
      console.log(err);
      setTotalCount(3);
      setUsers([
        {id: 0, following: false, username: 'Eric Jonson', status: "AMAZING status text, its really great. Just very nice status :)", location: "USA, California"},
        {id: 1, following: false, username: "Gigachad Based", status: "empty status pog pog", location: "Russia, Kremlin"}, 
        {id: 2, following: false, username: "Pepe frog", status: "im a proud Billy Harrington lifer", location: "Heaven, Earth"}
      ]);
      setPageSize(1);
  });
}

export const followThunkCreator = (id) => (dispatch) => {
  dispatch(setDisabled(true, id));
  apiFollow(id).then( r => {
    dispatch(setDisabled(false, id));
    if(r.resultCode === 0)
      dispatch(follow(id));
    else
      console.log(r);
  });
}

export const unFollowThunkCreator = (id) => (dispatch) => {
  dispatch(setDisabled(true, id));

  apiUnFollow(id).then( r => {
    dispatch(setDisabled(false, id));
    if(r.resultCode === 0)
      dispatch(unfollow(id));
  });
}
