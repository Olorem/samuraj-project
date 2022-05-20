import { connect } from "react-redux";
import { follow, setDisabled, setFetching, setPage, setPageSize, setTotalCount, setUsers, unfollow } from "../BLL/usersReducer";
import UsersAnotherContainer from "./UsersAnotherContainer";

let mapStateToProps = (state) => ({
  users:       state.usersPage.users,
  totalCount:  state.usersPage.totalCount,
  pageSize:    state.usersPage.pageSize,
  currentPage: state.usersPage.currentPage,
  isFetching:  state.usersPage.isFetching,
  buttonsInProgress: state.usersPage.buttonsInProgress,
  user:        state.profilePage.user,      //ayayay
});


export const UsersContainer = connect(mapStateToProps, 
  {  follow,  unfollow,  setUsers,  setPage,  setTotalCount,  setPageSize,  setFetching, setDisabled }
)(UsersAnotherContainer);