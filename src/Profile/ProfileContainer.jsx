import { addPost, inputChange, setUser, getProfileThunk, updateStatusThunk } from "../BLL/profileReducer";
import Profile from "./Profile";
import { connect } from "react-redux";
import React from "react";
import { withRouter } from "react-router-dom";
import withAuthRedirect from "../HOC/withAuthRedirect";
import { compose } from "redux";


class ProfileAnotherContainer extends React.Component {

  componentDidMount() {
    this.props.getProfileThunk(this.props.match.params.userID);
  }

  render() {
    return(<Profile {...this.props}/>)
  }
}

let mapStateToProps = (state) => ({
  inputTemp: state.profilePage.inputTemp,
  posts: state.profilePage.postsD,
  user: state.profilePage.user,
  isAuth: state.authReducer.isAuthorized,
});

let mapDispatchToProps = {
  inputChange, addPost, setUser, getProfileThunk, updateStatusThunk
};

let ProfileContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  withAuthRedirect,
)(ProfileAnotherContainer);

// let ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(withRouter(withAuthRedirect(ProfileAnotherContainer))); 

export default ProfileContainer