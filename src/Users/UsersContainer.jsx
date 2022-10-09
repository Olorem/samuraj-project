import { connect } from "react-redux";
import { compose } from "redux";
import { updateStatusThunk } from "../BLL/profileReducer";
import { getButtonsInProgress, getCurrentPage, getIsAuthorized, getIsFetching, getPageSize, getTotalCount, getUser, getUsers } from "../BLL/users-selectors";
import { followThunkCreator, getUsersThunkCreator, setDisabled, setFetching, setPage, setPageSize, setTotalCount, setUsers, unFollowThunkCreator } from "../BLL/usersReducer";
import withAuthRedirect from "../HOC/withAuthRedirect";
import UsersAnotherContainer from "./UsersAnotherContainer";

let mapStateToProps = (state) => ({
  users:       getUsers(state),
  totalCount:  getTotalCount(state),
  pageSize:    getPageSize(state),
  currentPage: getCurrentPage(state),
  isFetching:  getIsFetching(state),
  buttonsInProgress: getButtonsInProgress(state),
  user:        getUser(state),      //ayayay
  isAuth:      getIsAuthorized(state),
});


export const UsersContainer = compose(
  connect(mapStateToProps, 
    {  setUsers,  setPage,  setTotalCount,  setPageSize,  
      setFetching, setDisabled, getUsersThunkCreator, 
      followThunkCreator, unFollowThunkCreator, updateStatusThunk }
  ),
  withAuthRedirect,
)(UsersAnotherContainer);
// connect(mapStateToProps, 
//   {  setUsers,  setPage,  setTotalCount,  setPageSize,  setFetching, setDisabled, getUsersThunkCreator, followThunkCreator, unFollowThunkCreator }
// )(withAuthRedirect(UsersAnotherContainer));