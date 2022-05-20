import React from "react";
import Users from "./Users";
import defaultPic from "../assets/img/defaultUser.jpg";
import { apiGetUsers } from "../DAL/api";

// {id: 0, follow: false, username: 'Eric Jonson', status: "just now", location: "USA, California"}

// const Users = ({ users, usersCount, follow, unfollow, setUsers }) => {
class UsersAnotherContainer extends React.Component {
  componentDidMount(props) {
    this.updateUsers();
    console.log("didMount");
    this.props.setFetching(true);
  }

  updateUsers(page = this.props.currentPage, count = this.props.pageSize) {
    
      apiGetUsers(page, count)
      .then( (r) => {
        console.log(r)

        this.props.setTotalCount(r.totalCount);
        this.props.setUsers( r.items.map( u => ({
            id: u.id,
            username: u.name,
            following: u.followed,
            status: u.status || "no status?",
            location: u.location || "USA, California",
            smallPic: u.photos.small || defaultPic,
          })));
        // this.props.setPageSize(1);
        this.props.setFetching(false);
        console.log("updateUsers");
        })
        .catch(err => {
          console.log(err);
          this.props.setTotalCount(3);
          this.props.setUsers([
            {id: 0, following: false, username: 'Eric Jonson', status: "AMAZING status text, its really great. Just very nice status :)", location: "USA, California"},
            {id: 1, following: false, username: "Gigachad Based", status: "empty status pog pog", location: "Russia, Kremlin"}, 
            {id: 2, following: false, username: "Pepe frog", status: "im a proud Billy Harrington lifer", location: "Heaven, Earth"}
          ]);
          this.props.setPageSize(1);
        });
    // props.setUsers([
    //   {id: 0, following: false, username: 'Eric Jonson', status: "AMAZING status text, its really great. Just very nice status :)", location: "USA, California"},
    //   {id: 1, following: false, username: "Gigachad Based", status: "empty status pog pog", location: "Russia, Kremlin"}, 
    //   {id: 2, following: false, username: "Pepe frog", status: "im a proud Billy Harrington lifer", location: "Heaven, Earth"}
    // ]);
    
  }
  
  clickHandler = (page) => {
    this.props.setFetching(true);
    this.props.setPage(page);
    this.updateUsers(page);
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