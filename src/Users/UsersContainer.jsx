import { connect } from "react-redux";
import { compose } from "redux";
import { followThunkCreator, getUsersThunkCreator, setDisabled, setFetching, setPage, setPageSize, setTotalCount, setUsers, unFollowThunkCreator } from "../BLL/usersReducer";
import withAuthRedirect from "../HOC/withAuthRedirect";
import UsersAnotherContainer from "./UsersAnotherContainer";

let mapStateToProps = (state) => ({
  users:       state.usersPage.users,
  totalCount:  state.usersPage.totalCount,
  pageSize:    state.usersPage.pageSize,
  currentPage: state.usersPage.currentPage,
  isFetching:  state.usersPage.isFetching,
  buttonsInProgress: state.usersPage.buttonsInProgress,
  user:        state.profilePage.user,      //ayayay
  isAuth: state.authReducer.isAuthorized,
});


export const UsersContainer = compose(
  connect(mapStateToProps, 
    {  setUsers,  setPage,  setTotalCount,  setPageSize,  
      setFetching, setDisabled, getUsersThunkCreator, 
      followThunkCreator, unFollowThunkCreator }
  ),
  withAuthRedirect,
)(UsersAnotherContainer);
// connect(mapStateToProps, 
//   {  setUsers,  setPage,  setTotalCount,  setPageSize,  setFetching, setDisabled, getUsersThunkCreator, followThunkCreator, unFollowThunkCreator }
// )(withAuthRedirect(UsersAnotherContainer));