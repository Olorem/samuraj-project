import { addPost, inputChange, setUser } from "../BLL/profileReducer";
import Profile from "./Profile";
import { connect } from "react-redux";
import React from "react";
import { withRouter } from "react-router-dom";
import { apiGetProfile } from "../DAL/api";


class ProfileAnotherContainer extends React.Component {

  componentDidMount() {
      apiGetProfile(this.props.match.params.userID)
      .then( (rdata) => {
        console.log(rdata);

        // this.props.method();
        this.props.setUser(rdata);

        console.log("Mount");
        })
  }

  render() {
    return(<Profile {...this.props}/>)
  }
}

let mapStateToProps = (state) => ({
  inputTemp: state.profilePage.inputTemp,
  posts: state.profilePage.postsD,
  user: state.profilePage.user,
});

let mapDispatchToProps = {
  inputChange, addPost, setUser,
};
let ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileAnotherContainer)); 

export default ProfileContainer