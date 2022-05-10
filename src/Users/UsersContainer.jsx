import { connect } from "react-redux";
import { followAC, setUsersAC, unFollowAC } from "../BLL/usersReducer";
import Users from "./Users";


let mapStateToProps = (state) => ({
  users:      state.usersPage.users,
  usersCount: state.usersPage.usersCount,
});

let mapDispatchToProps = (dispatch) => ({
  follow:   (id)    => dispatch(followAC(id)),
  unfollow: (id)    => dispatch(unFollowAC(id)),
  setUsers: (users) => dispatch(setUsersAC(users)),
});


export const UsersContainer =  connect(mapStateToProps, mapDispatchToProps)(Users);
