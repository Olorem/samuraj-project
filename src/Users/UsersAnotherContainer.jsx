import React from "react";
import Users from "./Users";

// {id: 0, follow: false, username: 'Eric Jonson', status: "just now", location: "USA, California"}

// const Users = ({ users, usersCount, follow, unfollow, setUsers }) => {
class UsersAnotherContainer extends React.Component {
  componentDidMount(props) {
    console.log(this.props);
    this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    if(this.props.user && this.props.user.userID) {
      this.props.getProfileThunk(this.props.user.userID);
      console.log("userID in usersPage", this.props.user.userID);
      console.log("user in usersPage", this.props.user);
    }
    console.log("this", this)
    console.log("didMount");
  }
  
  clickHandler = (page) => {
    this.props.setPage(page);
    this.props.getUsersThunkCreator(page, this.props.pageSize);
  }

  render = () => (<Users 
    {...this.props}
    clickHandler={this.clickHandler}
    updateUsers={this.updateUsers}
    // setTotalCount={() => this.setTotalCount}
    setFetching={this.props.setFetching}
  />);
}

export default UsersAnotherContainer;